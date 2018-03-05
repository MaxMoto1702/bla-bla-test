package maxmoto1702.weather.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Collections;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("user")
public class UserController {

    @RequestMapping
    public ResponseEntity list() {
        return ok(Collections.emptyList());
    }

    @RequestMapping("current")
    public ResponseEntity current(Principal principal) {
        return ok(principal);
    }

    @RequestMapping("currentAuth")
    public ResponseEntity current(Authentication authentication) {
        return ok(authentication);
    }
}
