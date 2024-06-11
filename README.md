# buytyre
This is a full-stack application using React for the frontend and Spring Boot for the backend. The application features user authentication, a dynamic post-login window, and integration with an external API for vehicle fitment data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration and Login
- Post-login window with dynamic content tabs
- API integration for vehicle data

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Java 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Maven](https://maven.apache.org/)

## Installation

### Backend (Spring Boot)

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo.git
    cd your-repo/backend
    ```

2. Install dependencies and build the project:
    ```sh
    mvn clean install
    ```

### Frontend (React)

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    # or if you're using yarn
    yarn install
    ```

## Usage

### Running the Backend

1. Navigate to the backend directory:
    ```sh
    cd backend
    ```

2. Run the Spring Boot application:
    ```sh
    mvn spring-boot:run
    ```

### Running the Frontend

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Start the React development server:
    ```sh
    npm start
    # or if you're using yarn
    yarn start
    ```

3. Open your browser and go to `http://localhost:8080`
