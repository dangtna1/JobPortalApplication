package jobportal.controller;

import jobportal.controller.json.request.Credential;
import jobportal.service.CredentialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CredentialController {

    @Autowired
    private CredentialService credentialService;

    @PostMapping("/smanager-login")
    public String updateCredential(@RequestBody Credential credential){
        credentialService.updateDatabaseCredentials(credential);
        return "Login with username: "+credential.getUsername().toString();
    }
}
