package jobportal.service;

import jobportal.repository.CompanyRepository;
import jobportal.controller.request.AddCompanyRequest;
import jobportal.repository.entity.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }


    public Optional<Company> findCompanyById(Integer id) {
        return companyRepository.findById(id);
    }

    public void deleteCompany(Integer id) {
        companyRepository.deleteById(id);
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
