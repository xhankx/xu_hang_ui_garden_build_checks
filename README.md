# React Component Library Docker Setup

This guide will show you how to build and run the web application on localhost:8083.



## Prerequisites
- Docker installed on your system.

1. ## Clone the repository.

2. ## Build and Run Instructions

    1. **Build the Docker Image**:
    Navigate to the project directory containing the Dockerfile and run:

        docker build -t xu_hang_coding_assignment12 .

3. **Run the Docker Container**:
    After building the Docker image, run this command to start the container:

        docker run -d -p 8083:8083 --name xu_hang_coding_assignment12 xu_hang_coding_assignment12

4. **Open your web browser and go to**:

    http://localhost:8083
