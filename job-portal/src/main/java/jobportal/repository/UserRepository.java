package jobportal.repository;

import jobportal.repository.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Integer deleteByUserId(Integer userId);
    User findByEmail(String email);
}
