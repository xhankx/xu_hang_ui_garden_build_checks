# Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the project for production
RUN npm run build

# Use a lightweight web server (nginx) to serve the static files
FROM nginx:alpine

# Copy the build files from the previous step to the nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port the app will run on
EXPOSE 8083

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
