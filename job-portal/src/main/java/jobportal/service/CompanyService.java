package jobportal.service;

import jobportal.controller.json.request.UpdateCompanyRequest;
import jobportal.repository.CompanyRepository;
import jobportal.controller.json.request.AddCompanyRequest;
import jobportal.repository.UserRepository;
import jobportal.repository.entity.Company;
import jobportal.repository.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {
    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }

    public Optional<Company> findCompanyById(Integer id) {
        return companyRepository.findById(id);
    }

    public void deleteCompany(Integer id) {
        companyRepository.deleteByCompanyId(id);
    }

    public void updateCompany(UpdateCompanyRequest company){
        Company updateCompany = companyRepository.findById(company.getCompanyId()).get();
        updateCompany.setCompanyId(company.getCompanyId());
        updateCompany.setCompanyName(company.getCompanyName());
        updateCompany.setDescription(company.getDescription());
        updateCompany.setIndustry(company.getIndustry());
        updateCompany.setPhoneNumber(company.getPhoneNumber());
        updateCompany.setWebsiteUrl(company.getWebsiteUrl());
        companyRepository.save(updateCompany);
    }

    public void create(AddCompanyRequest company) {
        userRepository.save(
            new User(
                company.getCompanyName(),
                company.getPhoneNumber(),
                "COMPANY",
                company.getEmail()
            )
        );
        User user = userRepository.findByEmail(company.getEmail());
        Company newCompany = this.setAddParameterType(company);
        newCompany.setCompanyId(user.getUserId());
        companyRepository.save(newCompany);
    }

    public List<Company> searchCompanyBySalaryOfJob(Integer salary, String keyword) {
        return companyRepository.searchCompanyBySalaryOfJob(salary, keyword);
    }

    private Company setAddParameterType(AddCompanyRequest company){
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
