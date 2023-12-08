package jobportal.controller;

import jakarta.transaction.Transactional;
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
    @RequestMapping("/")
    public List<Company> getCompanies(){
        return companyService.getCompanies();
    }

    @PostMapping("/create")
    public Company create(@RequestBody Company company){
        return companyService.create(company);
    }

    @GetMapping("/search-by-salary")
    public List<Company> searchCompanyBySalaryOfJob(@RequestParam Integer salary, @RequestParam String keyword){
        return companyService.searchCompanyBySalaryOfJob(salary, keyword);
    }
}
