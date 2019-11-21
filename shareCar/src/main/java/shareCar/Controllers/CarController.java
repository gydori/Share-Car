package shareCar.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shareCar.Models.Car;
import shareCar.Services.CarService;

@RestController
@RequestMapping("/car")
public class CarController {

  @Autowired
  private CarService carService;

  @PostMapping("")
  public Car createCar(@RequestBody Car car) {
    return carService.createCar(car);
  }

  @GetMapping("")
  public List<Car> getAllCar() {
    return carService.getAllCar();
  }

  @DeleteMapping("/{id}")
  public void deleteCar(@PathVariable Long id) {
    carService.deleteCar(id);
  }
}
