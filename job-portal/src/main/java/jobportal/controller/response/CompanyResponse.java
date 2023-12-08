package jobportal.controller.response;

import jobportal.repository.entity.Company;
import lombok.Data;

@Data
public class CompanyResponse {

    private String message;
    private Company company;
}
