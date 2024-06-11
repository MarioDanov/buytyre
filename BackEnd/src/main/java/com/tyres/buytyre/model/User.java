package com.tyres.buytyre.model;

import jakarta.persistence.*;

@lombok.Setter
@lombok.Getter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @lombok.Setter
    @lombok.Getter
    @Column(unique = true, nullable = false)
    private String username;

    @lombok.Setter
    @lombok.Getter
    @Column(nullable = false)
    private String password;

    public User(String username, String password ) {
        this.username = username;
        this.password = password;
    }

    public User() {}
}
