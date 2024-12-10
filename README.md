# React Component Library - Docker Setup

This guide will show you how to build and run the web application on 
 'localhost:8018'.

---

## Prerequisites
- [Docker](https://www.docker.com/) must be installed on your system.
- Clone this repository to your local machine.

---

## Build and Run Instructions

### 1. Build the Docker Image:
Navigate to the project directory containing the Dockerfile and run:

docker build -t xu_hang_coding_assignment13 .

### 2. Run the Docker Container:
After building the Docker image, run this command to start the container:

docker run -d -p 8018:3000 --name xu_hang_coding_assignment13 xu_hang_coding_assignment13

### 3. Open your web browser and go to:

http://localhost:8018
