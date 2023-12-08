package jobportal.controller.request;

import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UpdateCompanyRequest {

    @Id
    private Integer id;

    @NotNull(message = "Company name shouldn't be null")
    @Size(max = 50, message = "Company name is 50 character maximum")
    private String companyName;
    private String phoneNumber;
    private String industry;
    private String description;
    private String websiteUrl;
}
