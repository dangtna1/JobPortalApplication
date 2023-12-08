package jobportal.controller;

import jakarta.validation.Valid;
import jobportal.controller.request.AddCompanyRequest;
import jobportal.controller.request.UpdateCompanyRequest;
import jobportal.controller.response.AddCompanyResponse;
import jobportal.controller.response.CompanyResponse;
import jobportal.controller.response.DeleteCompanyResponse;
import jobportal.controller.response.UpdateCompanyResponse;
import jobportal.repository.entity.Company;
import jobportal.service.CompanyService;
import org.hibernate.sql.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/company")
public class CompanyController {
    @Autowired
    private CompanyService companyService;
    @RequestMapping("/" )
    public List<Company> getCompanies(){
        return companyService.getCompanies();
    }

    @RequestMapping("/{id}")
    public CompanyResponse getCompanyById(@PathVariable(value = "id", required = false) Integer id){
        CompanyResponse res = new CompanyResponse();
        Optional<Company> existCompany = companyService.findCompanyById(id);
        if (existCompany.isEmpty()) {
            res.setMessage("No company(id="+id.toString()+") in system.");
        } else {
            res.setMessage("Success");
            res.setCompany(existCompany.get());
        }
        return res;
    }

    @GetMapping ("/delete/{id}")
    public DeleteCompanyResponse deleteCompany(@PathVariable(value = "id", required = true) Integer id) {
        DeleteCompanyResponse res = new DeleteCompanyResponse();
        Optional<Company> existCompany = companyService.findCompanyById(id);
        if (existCompany.isEmpty()) {
            res.setMessage("No company(id="+id.toString()+") in system.");
        } else {
            companyService.deleteCompany(id);
            res.setMessage("Delete company(id="+id.toString()+") successfully.");
        }
        return res;
    }

    @PostMapping("/update")
    public UpdateCompanyResponse updateCompany(@RequestBody @Valid UpdateCompanyRequest company){
        UpdateCompanyResponse res = new UpdateCompanyResponse();
        Optional<Company> existCompany = companyService.findCompanyById(company.getCompanyId());
        if (existCompany.isEmpty()) {
            res.setMessage("No company(id="+company.getCompanyId().toString()+") in system.");
        } else {
            companyService.updateCompany(company);
            res.setMessage("Update company(id="+company.getCompanyId().toString()+") successfully.");
        }
        return res;
    }

    @PostMapping("/create")
    public AddCompanyResponse create(@RequestBody @Valid AddCompanyRequest company){

        companyService.create(company);
        AddCompanyResponse res = new AddCompanyResponse();
        res.setMessage("Add new company successfully");
        return res;
    }

    @GetMapping("/search-by-salary")
    public List<Company> searchCompanyBySalaryOfJob(@RequestParam Integer salary, @RequestParam String keyword){
        return companyService.searchCompanyBySalaryOfJob(salary, keyword);
    }
}
