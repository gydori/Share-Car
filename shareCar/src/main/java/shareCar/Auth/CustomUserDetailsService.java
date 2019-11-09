package shareCar.Auth;

import java.util.ArrayList;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.server.ResponseStatusException;
import shareCar.Models.Person;
import shareCar.Repositories.PersonRepository;


@Configuration
@Transactional
public class CustomUserDetailsService implements UserDetailsService {

  @Autowired
  private PersonRepository personRepository;

  @Override
  public User loadUserByUsername(String s) throws UsernameNotFoundException {
    Person person = personRepository.findByEmail(s).orElseThrow(
        () -> new ResponseStatusException(HttpStatus.UNAUTHORIZED));
    return new User(s, person.getPassword(), new ArrayList<>());
  }
}
