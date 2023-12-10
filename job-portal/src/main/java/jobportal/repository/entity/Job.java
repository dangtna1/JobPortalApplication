package jobportal.repository.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data
public class Job {

    @Id
    private int jobId;
    private int companyId;
    private int branchId;
    private String datePosted;
    private String deadline;
    private boolean status;
    private int maxNoApplicants;
    private String title;
    private String requirement;
    private String responsibilities;
    private float salary;
    private int noApplicants;
    private float yearOfExp;

}
