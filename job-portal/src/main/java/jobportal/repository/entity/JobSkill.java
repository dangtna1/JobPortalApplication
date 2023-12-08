package jobportal.repository.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@IdClass(JobId.class)
public class JobSkill {
    @Transient
    @ManyToOne
    @PrimaryKeyJoinColumn(name="job_id", referencedColumnName="job_id")
    private InfoJobs infoJobs;

    @Id
    @Column(name="job_id")
    private int jobId;
    @Id
    private String name;
    @Id
    private int duration;
}
