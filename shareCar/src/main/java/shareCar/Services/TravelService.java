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

  public void deleteTravel(Travel travel) {
    travelRepository.delete(travel);
  }

  public void joinTravel(Long id) {
    Travel travelToJoin = travelRepository.findById(id)
        .orElseThrow(() -> new ResponseStatusException(
            HttpStatus.BAD_REQUEST, "travel can not found"));
    travelToJoin.getPassengers().add(personService.getCurrentPerson());
    Person passenger = personService.getCurrentPerson();
    passenger.getTravelsAsPassenger().add(travelToJoin);
    personRepository.save(passenger);
    travelRepository.save(travelToJoin);
  }


}
