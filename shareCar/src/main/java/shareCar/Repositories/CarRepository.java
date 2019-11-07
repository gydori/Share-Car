package shareCar.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shareCar.Models.Car;

@Repository
public interface CarRepository extends JpaRepository<Long, Car> {

}
