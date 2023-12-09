package jobportal.repository.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {

    @Id
    private int userId;
    private String username;
    private String password;
    private String role;
    private String email;
}
