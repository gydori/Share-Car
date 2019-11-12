package shareCar.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import shareCar.Models.Person;
import shareCar.Repositories.PersonRepository;

@Service
public class PersonService {

  @Autowired
  private PersonRepository personRepository;

  @Autowired
  private BCryptPasswordEncoder passwordEncoder;

  public Person getCurrentPerson() {
    return personRepository
        .findByEmail(SecurityContextHolder.getContext().getAuthentication().getName())
        .orElseThrow(() -> new ResponseStatusException(
            HttpStatus.UNAUTHORIZED, "Person not found"));
  }

  public Person createPerson(Person person) {
    person.setPassword(passwordEncoder.encode(person.getPassword()));
    return personRepository.save(person);
  }

  public Person findOnePerson(Long id) {
    return personRepository.findById(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Person not found"));
  }

  public Person updatePerson(Person person) {
    findOnePerson(person.getId());
    return personRepository.save(person);
  }


}
