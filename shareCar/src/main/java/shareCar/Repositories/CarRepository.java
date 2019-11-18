package shareCar.Repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shareCar.Models.Car;
import shareCar.Models.Person;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

  List<Car> findByOwner(Person owner);
}
