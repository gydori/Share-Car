package shareCar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import shareCar.Models.Car;
import shareCar.Services.CarService;

@RestController
public class CarController {

  @Autowired
  private CarService carService;

  @PostMapping("/car")
  public Car createCar(@RequestBody Car car) {
    return carService.createCar(car);
  }
}
