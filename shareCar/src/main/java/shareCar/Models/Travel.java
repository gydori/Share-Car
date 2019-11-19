package shareCar.Models;

import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Travel {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column
  private Long id;

  @Column
  private LocalDateTime departure;

  @Column
  private String whereFrom;

  @Column
  private String whereTo;

  @Column
  private Long length;

  @Column
  private Integer priceOfFuel;

  @ManyToOne
  @JoinColumn(name = "car_id", nullable = false)
  private Car car;

  @ManyToMany(mappedBy = "travels")
  private List<Person> passengers;

  public Travel() {
  }

  public Travel(LocalDateTime departure, String whereFrom, String whereTo, Long length,
      Integer priceOfFuel, Car car) {
    this.departure = departure;
    this.whereFrom = whereFrom;
    this.whereTo = whereTo;
    this.length = length;
    this.priceOfFuel = priceOfFuel;
    this.car = car;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public LocalDateTime getDeparture() {
    return departure;
  }

  public void setDeparture(LocalDateTime departure) {
    this.departure = departure;
  }

  public String getWhereFrom() {
    return whereFrom;
  }

  public void setWhereFrom(String whereFrom) {
    this.whereFrom = whereFrom;
  }

  public String getWhereTo() {
    return whereTo;
  }

  public void setWhereTo(String whereTo) {
    this.whereTo = whereTo;
  }

  public Long getLength() {
    return length;
  }

  public void setLength(Long length) {
    this.length = length;
  }

  public Integer getPriceOfFuel() {
    return priceOfFuel;
  }

  public void setPriceOfFuel(Integer priceOfFuel) {
    this.priceOfFuel = priceOfFuel;
  }

  public Car getCar() {
    return car;
  }

  public void setCar(Car car) {
    this.car = car;
  }
}
