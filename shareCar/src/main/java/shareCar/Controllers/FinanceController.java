package shareCar.Controllers;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shareCar.Models.Person;
import shareCar.Services.FinanceService;

@RestController
@RequestMapping("/finance")
public class FinanceController {

  @Autowired
  private FinanceService financeService;

  @GetMapping("")
  public Map<Person, Long> getFinances() {
    return financeService.finances();
  }

}
