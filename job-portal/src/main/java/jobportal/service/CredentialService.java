package jobportal.service;

import jobportal.controller.json.request.Credential;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.stereotype.Service;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

@Service
public class CredentialService {

    @Autowired
    private ConfigurableEnvironment environment;

    @Value("${spring.datasource.username}")
    private String currentUsername;

    @Value("${spring.datasource.password}")
    private String currentPassword;

    public void updateDatabaseCredentials(Credential credential) {
        // Update properties in-memory
        environment.getPropertySources().forEach(propertySource -> {
            if (propertySource.getName().startsWith("applicationConfig")) {
                Properties properties = (Properties) propertySource.getSource();
                properties.setProperty("spring.datasource.username", credential.getUsername());
                properties.setProperty("spring.datasource.password", credential.getPassword());
            }
        });

        // Update properties file
        Properties properties = new Properties();
        properties.setProperty("spring.datasource.url", environment.getProperty("spring.datasource.url"));
        properties.setProperty("spring.datasource.username", credential.getUsername());
        properties.setProperty("spring.datasource.password", credential.getPassword());
        properties.setProperty("spring.jpa.properties.hibernate.dialect", environment.getProperty("spring.jpa.properties.hibernate.dialect"));
        properties.setProperty("spring.jpa.hibernate.ddl-auto", environment.getProperty("spring.jpa.hibernate.ddl-auto"));

        try (FileOutputStream fileOutputStream = new FileOutputStream("src/main/resources/application.properties")) {
            properties.store(fileOutputStream, null);
        } catch (IOException e) {
            e.printStackTrace();
            // Handle exception appropriately (e.g., log or throw a custom exception)
        }
    }
}
