# Dockerfile for React Component Library Assignment

# Use the official Node.js image as the base image
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /xu_hang_ui_garden

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the application for production
RUN npm run build

# Use the official Nginx image to serve the build files
FROM nginx:alpine

# Copy the build files to the Nginx html directory
COPY --from=build /xu_hang_ui_garden/build /usr/share/nginx/html

# Expose port 8083 to the host machine
EXPOSE 8083

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

# Metadata
LABEL maintainer="xu_hang_coding_assignment12"