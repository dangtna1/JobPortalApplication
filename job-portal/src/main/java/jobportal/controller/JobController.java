package jobportal.controller;

import jakarta.validation.Valid;
import jobportal.controller.json.request.AddJobRequest;
import jobportal.controller.json.request.UpdateJobRequest;
import jobportal.repository.entity.InfoJobs;
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

    @PutMapping("")
    public List<InfoJobs> updateJob(@RequestBody @Valid UpdateJobRequest request){
        jobService.updateJob(request);
        return getInfoJobs();
    }

    @GetMapping("/search")
    public List<InfoJobs> searchJobs(@RequestParam String keyword, @RequestParam Integer salary){
        return jobService.searchJobs(keyword, salary);
    }

    @DeleteMapping("")
    public List<InfoJobs> deleteJob(@RequestParam Integer id){
        jobService.deleteJob(id);
        return getInfoJobs();
    }
}
