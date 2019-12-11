package shareCar.Services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shareCar.Models.FinanceDTO;
import shareCar.Models.Person;
import shareCar.Models.Travel;

@Service
public class FinanceService {

  @Autowired
  private TravelService travelService;

  public List<FinanceDTO> finances() {
    List<Travel> travelsAsDriver = travelService.getMyTravelsAsDriver();
    Map<Person, Long> finances = new HashMap<>();
    for (Travel t : travelsAsDriver) {
      for (Person p : t.getPassengers()) {
        if (finances.containsKey(p)) {
          finances.put(p, finances.get(p) + calculateAmount(t));
        } else {
          finances.put(p, calculateAmount(t));
        }
      }
    }
    List<Travel> travelsAsPassanger = travelService.getMyTravelsAsPassenger();
    for (Travel t : travelsAsPassanger) {
      Person p = t.getCar().getOwner();
      if (finances.containsKey(p)) {
        finances.put(p, finances.get(p) - calculateAmount(t));
      } else {
        finances.put(p, calculateAmount(t) * (-1));
      }
    }
    List<FinanceDTO> financeList = new ArrayList<>();
    for (Map.Entry<Person, Long> entry : finances.entrySet()) {
      financeList.add(new FinanceDTO(entry.getKey(), entry.getValue()));
    }
    return financeList;
  }

  public Long calculateAmount(Travel travel) {
    return travel.getCar().getConsumptionPerKm() * travel.getLength() * travel.getPriceOfFuel() / (
        travel.getPassengers().size() + 1);
  }

}
