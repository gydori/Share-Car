package shareCar;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import shareCar.Models.Car;
import shareCar.Models.Gender;
import shareCar.Models.Person;
import shareCar.Models.Travel;
import shareCar.Repositories.CarRepository;
import shareCar.Services.PersonService;
import shareCar.Services.TravelService;

@Component
@Transactional
public class DataLoader implements CommandLineRunner {

  @Autowired
  private PersonService personService;

  @Autowired
  private CarRepository carRepository;

  @Autowired
  private TravelService travelService;

  @Override
  public void run(String... args) throws Exception {
    Person person1 = new Person("person@person.com", "person", "Person", "Person", Gender.MALE,
        LocalDate.of(1970, Month.APRIL, 11));
    personService.createPerson(person1);

    Car car1 = new Car("asd-123", "opel", 4, 170);
    car1.setOwner(person1);
    carRepository.save(car1);

    Travel travel1 = new Travel(LocalDateTime.of(2019, 05, 20, 10, 57), "innen", "oda", 10l, 400,
        car1);
    travelService.createTravel(travel1);

    Person person2 = new Person("person2@person.com", "person", "Person2", "Person2", Gender.MALE,
        LocalDate.of(1970, Month.APRIL, 11));
    personService.createPerson(person2);

    Car car2 = new Car("def-123", "skoda", 5, 170);
    car2.setOwner(person2);
    carRepository.save(car2);

    Travel travel2 = new Travel(LocalDateTime.of(2019, 05, 20, 10, 57), "innen", "oda", 10l, 400,
        car2);
    travelService.createTravel(travel2);

    Person person3 = new Person("person3@person.com", "person", "Person3", "Person3", Gender.FEMALE,
        LocalDate.of(1970, Month.APRIL, 11));
    personService.createPerson(person3);
  }
}
