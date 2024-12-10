React Component Library Docker Setup
This guide will show you how to build and run the web application on localhost:8083.

Prerequisites
Docker installed on your system.
Clone the repository.
Build and Run Instructions
Build the Docker Image: Navigate to the project directory containing the Dockerfile and run:

docker build -t xu_hang_coding_assignment12 .

Run the Docker Container: After building the Docker image, run this command to start the container:

 docker run -d -p 8083:3000 --name xu_hang_coding_assignment12 xu_hang_coding_assignment12
Open your web browser and go to:

http://localhost:8083
