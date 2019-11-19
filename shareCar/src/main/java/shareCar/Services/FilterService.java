package shareCar.Services;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import shareCar.Models.Person;
import shareCar.Models.Travel;

@Service
public class FilterService {

  public Specification<Travel> filterByCarOwner(Person person) {
    return (root, query, cb) -> {
      if (person == null) {
        return cb.isTrue(cb.literal(true));
      }
      return cb.equal(root.get("car").get("owner"), person);
    };
  }
}
