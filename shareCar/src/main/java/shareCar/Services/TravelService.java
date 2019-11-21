package shareCar.Services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import shareCar.Models.Person;
import shareCar.Models.Travel;
import shareCar.Repositories.PersonRepository;
import shareCar.Repositories.TravelRepository;

@Service
public class TravelService {

  @Autowired
  private TravelRepository travelRepository;

  @Autowired
  private PersonRepository personRepository;

  @Autowired
  private FilterService filterService;

  @Autowired
  private PersonService personService;

  @Autowired
  private CarService carService;

  public Travel createTravel(Travel travel) {
    return travelRepository.save(travel);
  }

  public List<Travel> getMyTravelsAsDriver() {
    return travelRepository.findAll(
        Specification.where(filterService.filterByCarOwner(personService.getCurrentPerson())));
  }

  public List<Travel> getMyTravelsAsPassenger() {
    return travelRepository.findAll(
        Specification.where(filterService.filterByPassenger(personService.getCurrentPerson())));
  }

  public List<Travel> getAllTravels() {
    return travelRepository.findAll();
  }

  public Travel getOneTravel(Long id) {
    return travelRepository.findById(id).orElseThrow(() -> new ResponseStatusException(
        HttpStatus.BAD_REQUEST, "travel can not found"));
  }

  public List<Travel> getCarTravels(Long id) {
    return travelRepository.findAll(
        Specification.where(filterService.filterByCar(carService.getOneCar(id))));
  }

  public void deleteTravel(Long id) {
    if (!getOneTravel(id).getCar().getOwner().equals(personService.getCurrentPerson())) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
          "You can only delete your travels");
    }
    if (getOneTravel(id).getPassengers().size() != 0) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
          "You can not delete travel with passengers");
    }
    travelRepository.deleteById(id);
  }

  public void joinTravel(Long id) {
    Travel travelToJoin = getOneTravel(id);
    if (travelToJoin.getCar().getOwner().equals(personService.getCurrentPerson())) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can not join your own travel");
    }
    travelToJoin.getPassengers().add(personService.getCurrentPerson());
    Person passenger = personService.getCurrentPerson();
    passenger.getTravelsAsPassenger().add(travelToJoin);
    personRepository.save(passenger);
    travelRepository.save(travelToJoin);
  }

  public void unjoinTravel(Long id) {
    Travel travelToUnjoin = getOneTravel(id);
    travelToUnjoin.getPassengers().remove(personService.getCurrentPerson());
    Person passenger = personService.getCurrentPerson();
    passenger.getTravelsAsPassenger().remove(travelToUnjoin);
    personRepository.save(passenger);
    travelRepository.save(travelToUnjoin);
  }


}
