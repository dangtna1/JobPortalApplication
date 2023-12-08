package jobportal.service;

import jobportal.repository.CompanyRepository;
import jobportal.repository.InfoJobRepository;
import jobportal.repository.entity.Company;
import jobportal.repository.entity.InfoJobs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }

    public Company create(Company company) {
        return companyRepository.save(company);
    }

    public List<Company> searchCompanyBySalaryOfJob(Integer salary, String keyword) {
        return companyRepository.searchCompanyBySalaryOfJob(salary, keyword);
    }
}
