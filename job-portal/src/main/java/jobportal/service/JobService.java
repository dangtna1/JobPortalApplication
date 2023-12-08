package jobportal.service;

import jobportal.repository.InfoJobRepository;
import jobportal.repository.JobRepository;
import jobportal.repository.entity.InfoJobs;
import jobportal.repository.entity.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {
    @Autowired
    private InfoJobRepository infoJobRepository;

    @Autowired
    private JobRepository jobRepository;

    public List<InfoJobs> getInfoJobs(){
        return infoJobRepository.getInfoJob();
    }

    public void create(Job job) {
        jobRepository.save(job);
    }

    public List<InfoJobs> searchJobs(String keyword, Integer salary){
        return infoJobRepository.searchJobs(keyword, salary);
    }
}
