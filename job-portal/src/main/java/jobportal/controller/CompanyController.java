package jobportal.controller;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jobportal.repository.entity.AddCompanyRequest;
import jobportal.repository.entity.AddCompanyResponse;
import jobportal.repository.entity.Company;
import jobportal.repository.entity.InfoJobs;
import jobportal.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public Company getCompanyById(@PathVariable(value = "id", required = false) Integer id){
        return companyService.getCompanyById(id);
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
