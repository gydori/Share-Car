package shareCar.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shareCar.Models.FinanceDTO;
import shareCar.Services.FinanceService;

@RestController
@RequestMapping("/finance")
public class FinanceController {

  @Autowired
  private FinanceService financeService;

  @GetMapping("")
  public List<FinanceDTO> getFinances() {
    return financeService.finances();
  }

}
