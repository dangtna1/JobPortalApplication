package jobportal.repository;

import jobportal.repository.entity.Company;
import jobportal.repository.entity.InfoJobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface CompanyRepository extends JpaRepository<Company, Integer> {
    @Query(value = "CALL findCompanyBySalaryOfJob(:salary,:keyword);", nativeQuery = true)
    List<Company> searchCompanyBySalaryOfJob(@Param("salary") Integer salary, @Param("keyword") String keyword);

}
