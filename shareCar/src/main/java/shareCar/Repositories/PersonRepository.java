package shareCar.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shareCar.Models.Person;

@Repository
public interface PersonRepository extends JpaRepository<Long, Person> {

}
