package shareCar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import shareCar.Models.Person;
import shareCar.Services.PersonService;

@RestController
public class PersonController {

  @Autowired
  private PersonService personService;

  @PostMapping("/register")
  public Person createPerson(@RequestBody Person person) {
    return personService.createPerson(person);
  }

  @GetMapping("/user/{id}")
  public Person getOnePerson(@PathVariable("id") Long id) {
    return personService.findOnePerson(id);
  }

}
