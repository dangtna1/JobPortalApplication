package jobportal.controller.json.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class AddJobRequest {
    private int companyId;

    private int branchId;

    @NotNull(message = "Date posted shouldn't be null")
    @Pattern(regexp = "\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}", message = "Invalid date format. Use yyyy-MM-dd HH:mm:ss")
    private String datePosted;

    @NotNull(message = "Deadline shouldn't be null")
    @Pattern(regexp = "\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}", message = "Invalid date format. Use yyyy-MM-dd HH:mm:ss")
    private String deadline;

    private boolean status;

    @NotNull(message = "This field shouldn't be null")
    private int maxNoApplicants;

    @NotNull(message = "Title shouldn't be null")
    @Size(max = 50, message = "Max size is 50 character")
    private String title;

    private String requirement;

    private String responsibilities;

    @NotNull(message = "Salary shouldn't be null")
    private float salary;

    private int noApplicants;

    private float yearOfExp;
}
