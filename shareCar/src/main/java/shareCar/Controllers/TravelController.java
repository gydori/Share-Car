package shareCar.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import shareCar.Models.Travel;
import shareCar.Services.TravelService;

@RestController
public class TravelController {

  @Autowired
  private TravelService travelService;

  @PostMapping("/travel")
  public Travel createTravel(@RequestBody Travel travel) {
    return travelService.createTravel(travel);
  }

  @GetMapping("/travel/mytravels")
  public List<Travel> getMyTravels() {
    return travelService.getMyTravels();
  }

  @DeleteMapping("/travel")
  public void deleteTravel(@RequestBody Travel travel) {
    travelService.deleteTravel(travel);
  }
}
