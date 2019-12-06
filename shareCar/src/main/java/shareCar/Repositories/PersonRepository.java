package shareCar.Repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import shareCar.Models.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long>,
    JpaSpecificationExecutor<Person> {

  Optional<Person> findByEmail(String email);
}
