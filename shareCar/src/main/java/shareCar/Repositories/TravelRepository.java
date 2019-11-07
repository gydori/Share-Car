package shareCar.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shareCar.Models.Travel;

@Repository
public interface TravelRepository extends JpaRepository<Long, Travel> {

}
