package jobportal.repository.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Company {
    @Id
    private int companyId;
    private String companyName;
    private String phoneNumber;
    private String industry;
    private String description;
    private String websiteUrl;
}
