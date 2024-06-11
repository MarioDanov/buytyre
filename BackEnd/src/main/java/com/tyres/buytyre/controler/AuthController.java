package com.tyres.buytyre.controler;

import com.tyres.buytyre.model.User;
import com.tyres.buytyre.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/register",consumes = "application/json")// consumes = "application/x-www-form-urlencoded")
    public ResponseEntity<String> register(@RequestBody User user) {
        userService.saveUser(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping(value = "/login", consumes = "application/json")
    public ResponseEntity<String> login(@RequestBody User user) {
        userService.authenticate(user);
        return ResponseEntity.ok("Login successful");
    }
}