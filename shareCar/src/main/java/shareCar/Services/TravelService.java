package shareCar.Services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import shareCar.Models.Travel;
import shareCar.Repositories.TravelRepository;

@Service
public class TravelService {

  @Autowired
  private TravelRepository travelRepository;

  @Autowired
  private FilterService filterService;

  @Autowired
  private PersonService personService;

  public Travel createTravel(Travel travel) {
    return travelRepository.save(travel);
  }

  public List<Travel> getMyTravels() {
    return travelRepository.findAll(
        Specification.where(filterService.filterByCarOwner(personService.getCurrentPerson())));
  }

  public void deleteTravel(Travel travel) {
    travelRepository.delete(travel);
  }
}
