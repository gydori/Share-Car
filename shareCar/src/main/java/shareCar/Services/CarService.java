package shareCar.Services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
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

  public Car getOneCar(Long id) {
    return carRepository.findById(id).orElseThrow(() -> new ResponseStatusException(
        HttpStatus.BAD_REQUEST, "car can not found"));
  }

  public void deleteCar(Long id) {
    if (!getOneCar(id).getOwner().equals(personService.getCurrentPerson())) {
      throw new ResponseStatusException(
          HttpStatus.BAD_REQUEST, "you can only delete your car");
    }
    if (getOneCar(id).getTravels().size() != 0) {
      throw new ResponseStatusException(
          HttpStatus.BAD_REQUEST, "can not delete car with travels");
    }
    carRepository.deleteById(id);
  }
}
