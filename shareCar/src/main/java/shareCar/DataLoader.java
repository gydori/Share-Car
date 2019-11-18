package shareCar;

import java.time.LocalDate;
import java.time.Month;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import shareCar.Models.Car;
import shareCar.Models.Gender;
import shareCar.Models.Person;
import shareCar.Repositories.CarRepository;
import shareCar.Services.PersonService;

@Component
@Transactional
public class DataLoader implements CommandLineRunner {

  @Autowired
  private PersonService personService;

  @Autowired
  private CarRepository carRepository;

  @Override
  public void run(String... args) throws Exception {
    Person person1 = new Person("person@person.com", "person", "Person", "Person", Gender.MALE,
        LocalDate.of(1970, Month.APRIL, 11));
    personService.createPerson(person1);

    Car car1 = new Car("asd-123", "opel", 4, 170);
    car1.setOwner(person1);
    carRepository.save(car1);
  }
}
