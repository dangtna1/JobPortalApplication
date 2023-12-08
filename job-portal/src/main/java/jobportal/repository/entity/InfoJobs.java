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
    private String address;
    private String companyName;
    private String industry;

    @OneToMany
    @JoinColumn(name = "job_id")
    private Set<JobSkill> jobSkills;
}
