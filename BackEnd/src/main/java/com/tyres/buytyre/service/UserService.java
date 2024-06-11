package com.tyres.buytyre.service;

import com.tyres.buytyre.model.User;
import com.tyres.buytyre.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class UserService {

    private static final Logger logger = Logger.getLogger(UserService.class.getName());

    @Autowired
    private UserRepository userRepository;

    public String saveUser(User user) {
        try {
            Optional<User> existingUser = userRepository.findByUsername(user.getUsername());
            if (existingUser.isPresent()) {
                logger.log(Level.WARNING, "User with username {0} already exists", user.getUsername());
                return "User with this username already exists";
            }
            userRepository.save(user);
            logger.log(Level.INFO, "User with username {0} registered successfully", user.getUsername());
            return "User registered successfully";
        } catch (DataAccessException e) {
            logger.log(Level.SEVERE, "Error while accessing the database", e);
            return "Error while accessing the database";
        } catch (Exception e) {
            logger.log(Level.SEVERE, "An unexpected error occurred", e);
            return "An unexpected error occurred";
        }
    }

    public String authenticate(User user) {
        try {
            Optional<User> existingUser = userRepository.findByUsername(user.getUsername());
            if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
                logger.log(Level.INFO, "User with username {0} authenticated successfully", user.getUsername());
                return "Login successful";
            } else {
                logger.log(Level.WARNING, "Invalid credentials for username {0}", user.getUsername());
                return "Invalid credentials";
            }
        } catch (DataAccessException e) {
            logger.log(Level.SEVERE, "Error while accessing the database", e);
            return "Error while accessing the database";
        } catch (Exception e) {
            logger.log(Level.SEVERE, "An unexpected error occurred", e);
            return "An unexpected error occurred";
        }
    }
}
