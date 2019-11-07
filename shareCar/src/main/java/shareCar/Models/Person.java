package shareCar.Models;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Person {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column
  private Long id;

  @Column
  private String firstname;

  @Column
  private String lastname;

  @Column
  private Gender gender;

  @Column
  private LocalDate dateOfBirth;

}
