package jobportal.repository.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class InfoJobs {
    @Id
    @Column(name = "job_id")
    private int jobId;
    private String title;
    private int salary;
    private String deadline;
    private int maxNoApplicants;
    private String requirement;
    private String responsibilities;
    private boolean status;
    private String address;
    private int yearOfExp;
    private String companyName;
    private String industry;
    private String description;
    private String website_url;

    @OneToMany
    @JoinColumn(name = "job_id")
    private Set<JobSkill> jobSkills;
}
