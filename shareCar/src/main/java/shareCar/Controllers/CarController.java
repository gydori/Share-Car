package shareCar.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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

  @GetMapping("/car")
  public List<Car> getAllCar() {
    return carService.getAllCar();
  }

  @DeleteMapping("/car")
  public void deleteCar(@RequestBody Car car) {
    carService.deleteCar(car);
  }
}
