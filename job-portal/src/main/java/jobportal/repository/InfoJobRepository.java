package jobportal.repository;

import jobportal.repository.entity.InfoJobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InfoJobRepository extends JpaRepository<InfoJobs, Integer> {
    @Query(value = "CALL getInfoJob();", nativeQuery = true)
    List<InfoJobs> getInfoJob();

    @Query(value = "CALL searchJob(:keyword, :salary);", nativeQuery = true)
    List<InfoJobs> searchJobs(@Param("keyword") String keyword, @Param("salary") Integer salary);

}
