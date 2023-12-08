package jobportal.controller;

import jakarta.validation.Valid;
import jobportal.repository.entity.AddJobRequest;
import jobportal.repository.entity.InfoJobs;
import jobportal.repository.entity.Job;
import jobportal.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/job")
public class JobController {
    @Autowired
    private JobService jobService;

    @RequestMapping("/")
    public List<InfoJobs> getInfoJobs(){
        return jobService.getInfoJobs();
    }

    @PostMapping("/create")
    public void create(@RequestBody @Valid AddJobRequest job){
        jobService.create(job);
    }

    @GetMapping("/search")
    public List<InfoJobs> searchJobs(@RequestParam String keyword, @RequestParam Integer salary){
        return jobService.searchJobs(keyword, salary);
    }
}
