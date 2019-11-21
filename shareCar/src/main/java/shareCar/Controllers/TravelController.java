package shareCar.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shareCar.Models.Travel;
import shareCar.Services.TravelService;

@RestController
@RequestMapping("/travel")
public class TravelController {

  @Autowired
  private TravelService travelService;

  @PostMapping("")
  public Travel createTravel(@RequestBody Travel travel) {
    return travelService.createTravel(travel);
  }

  @GetMapping("/mytravels/driver")
  public List<Travel> getMyTravelsAsDriver() {
    return travelService.getMyTravelsAsDriver();
  }

  @GetMapping("/mytravels/passenger")
  public List<Travel> getMyTravelsAsPassenger() {
    return travelService.getMyTravelsAsPassenger();
  }

  @GetMapping("/alltravels")
  public List<Travel> getAllTravels() {
    return travelService.getAllTravels();
  }

  @DeleteMapping("/{id}")
  public void deleteTravel(@PathVariable Long id) {
    travelService.deleteTravel(id);
  }

  @PutMapping("/join/{id}")
  public void joinTravel(@PathVariable Long id) {
    travelService.joinTravel(id);
  }

  @PutMapping("/unjoin/{id}")
  public void unjoinTravel(@PathVariable Long id) {
    travelService.unjoinTravel(id);
  }
}
