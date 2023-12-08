package jobportal.service;

import jobportal.repository.CompanyRepository;
import jobportal.repository.InfoJobRepository;
import jobportal.repository.entity.AddCompanyRequest;
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

    public void create(AddCompanyRequest company) {
        Company newCompany = this.setParameterType(company);
        companyRepository.save(newCompany);
    }

    public List<Company> searchCompanyBySalaryOfJob(Integer salary, String keyword) {
        return companyRepository.searchCompanyBySalaryOfJob(salary, keyword);
    }

    private Company setParameterType(AddCompanyRequest company){
        Company newCompany = new Company();
        newCompany.setCompanyName(company.getCompanyName());
        if (company.getPhoneNumber() != null) {
            newCompany.setPhoneNumber(company.getPhoneNumber());
        }
        if (company.getIndustry() != null) {
            newCompany.setIndustry(company.getIndustry());
        }
        if (company.getDescription() != null) {
            newCompany.setDescription(company.getDescription());
        }
        if (company.getWebsiteUrl() != null) {
            newCompany.setWebsiteUrl(company.getWebsiteUrl());
        }
        return newCompany;
    }
}
