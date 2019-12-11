package shareCar.Models;

import java.io.Serializable;

public class FinanceDTO implements Serializable {

  private Person person;
  private long amount;

  public FinanceDTO(Person person, long amount) {
    this.person = person;
    this.amount = amount;
  }

  public Person getPerson() {
    return person;
  }

  public void setPerson(Person person) {
    this.person = person;
  }

  public long getAmount() {
    return amount;
  }

  public void setAmount(long amount) {
    this.amount = amount;
  }
}
