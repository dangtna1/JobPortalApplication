package jobportal.service;

import jobportal.controller.json.request.UpdateJobRequest;
import jobportal.repository.InfoJobRepository;
import jobportal.repository.JobRepository;
import jobportal.controller.json.request.AddJobRequest;
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

//    public InfoJobs getById(Integer id){
//        return jobRepository.findByJobId(id);
//    }
    public void create(AddJobRequest job) {
        Job newJob = this.jobMapping(job);
        jobRepository.save(newJob);
    }

    public void updateJob(UpdateJobRequest job){
        Job createdJob = jobRepository.findByJobId(job.getJobId());

        createdJob.setDeadline(job.getDeadline());
        createdJob.setStatus(job.isStatus());
        createdJob.setMaxNoApplicants(job.getMaxNoApplicants());
        createdJob.setTitle(job.getTitle());
        createdJob.setRequirement(job.getRequirement());
        createdJob.setResponsibilities(job.getResponsibilities());
        createdJob.setSalary(job.getSalary());
        createdJob.setYearOfExp(job.getYearOfExp());
        jobRepository.save(createdJob);
    }
    private Job jobMapping(AddJobRequest job) {
        Job newJob = new Job();
        newJob.setStatus(job.isStatus());
        newJob.setRequirement(job.getRequirement());
        newJob.setResponsibilities(job.getResponsibilities());
        newJob.setNoApplicants(job.getNoApplicants());
        newJob.setYearOfExp(job.getYearOfExp());
        newJob.setSalary(job.getSalary());

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
        return newJob;
    }

    public List<InfoJobs> searchJobs(String keyword, Integer salary){
        return infoJobRepository.searchJobs(keyword, salary);
    }
    public void deleteJob(Integer id){
        try{
            jobRepository.deleteById(id);
        }
        catch (Exception e){
            throw e;
        }
    }
}
