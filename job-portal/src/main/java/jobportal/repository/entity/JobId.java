package jobportal.repository.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class JobId implements Serializable {
    private int jobId;
    private String name;
    private int duration;
}
