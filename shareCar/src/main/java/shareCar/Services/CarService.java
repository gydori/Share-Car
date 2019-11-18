package shareCar.Services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shareCar.Models.Car;
import shareCar.Repositories.CarRepository;

@Service
public class CarService {

  @Autowired
  private CarRepository carRepository;

  @Autowired
  private PersonService personService;

  public Car createCar(Car car) {
    car.setOwner(personService.getCurrentPerson());
    return carRepository.save(car);
  }

  public List<Car> getAllCar() {
    return carRepository.findByOwner(personService.getCurrentPerson());
  }

  public void deleteCar(Car car) {
    carRepository.delete(car);
  }
}
