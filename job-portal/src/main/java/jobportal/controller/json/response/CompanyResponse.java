package jobportal.controller.json.response;

import jobportal.repository.entity.Company;
import lombok.Data;

@Data
public class CompanyResponse extends RequestBase{

    private Company company;
}
