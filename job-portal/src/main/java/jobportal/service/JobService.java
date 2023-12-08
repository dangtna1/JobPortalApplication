package jobportal.service;

import jobportal.repository.InfoJobRepository;
import jobportal.repository.JobRepository;
import jobportal.repository.entity.AddJobRequest;
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

    public void create(AddJobRequest job) {
        Job newJob = this.jobMapping(job);
        jobRepository.save(newJob);
    }

    private Job jobMapping(AddJobRequest job) {
        Job newJob = new Job();
        newJob.setStatus(job.getStatus());
        newJob.setRequirement(job.getRequirement());
        newJob.setResponsibilities(job.getResponsibilities());
        newJob.setNoApplicants(job.getNoApplicants());
        newJob.setYearOfExp(job.getYearOfExp());
        if (job.getCompanyId() != 0) {
            newJob.setCompanyId(job.getCompanyId());
        }
        if (job.getBranchId() != 0) {
            newJob.setBranchId(job.getBranchId());
        }
        if (job.getDatePosted() != null) {
            newJob.setDatePosted(job.getDatePosted());
        }
        if (job.getDeadline() != null) {
            newJob.setDeadline(job.getDeadline());
        }
        if (job.getMaxNoApplicants() != 0) {
            newJob.setMaxNoApplicants(job.getMaxNoApplicants());
        }
        if (job.getTitle() != null) {
            newJob.setTitle(job.getTitle());
        }
        if (job.getSalary() != null) {
            newJob.setSalary(job.getSalary());
        }
        return newJob;
    }

    public List<InfoJobs> searchJobs(String keyword, Integer salary){
        return infoJobRepository.searchJobs(keyword, salary);
    }
}
