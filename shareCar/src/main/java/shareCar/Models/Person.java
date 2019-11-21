package shareCar.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class Person {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column
  private Long id;

  @Column(unique = true)
  private String email;

  @Column
  private String password;

  @Column
  private String firstname;

  @Column
  private String lastname;

  @Column
  private Gender gender;

  @Column
  private LocalDate dateOfBirth;

  @OneToMany(mappedBy = "owner")
  @JsonIgnore
  private List<Car> cars;

  @ManyToMany
  @JsonIgnore
  @JoinTable(
      name = "person_travels",
      joinColumns = {@JoinColumn(name = "passenger_id")},
      inverseJoinColumns = {@JoinColumn(name = "travel_id")}
  )
  private Set<Travel> travelsAsPassenger;

  public Person() {
  }

  public Person(String email, String password, String firstname, String lastname,
      Gender gender, LocalDate dateOfBirth) {
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getFirstname() {
    return firstname;
  }

  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }

  public String getLastname() {
    return lastname;
  }

  public void setLastname(String lastname) {
    this.lastname = lastname;
  }

  public Gender getGender() {
    return gender;
  }

  public void setGender(Gender gender) {
    this.gender = gender;
  }

  public LocalDate getDateOfBirth() {
    return dateOfBirth;
  }

  public void setDateOfBirth(LocalDate dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public List<Car> getCars() {
    return cars;
  }

  public void setCars(List<Car> cars) {
    this.cars = cars;
  }

  public Set<Travel> getTravelsAsPassenger() {
    return travelsAsPassenger;
  }

  public void setTravelsAsPassenger(Set<Travel> travelsAsPassenger) {
    this.travelsAsPassenger = travelsAsPassenger;
  }
}
