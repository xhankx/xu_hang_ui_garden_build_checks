# Step 1: Build the React application
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /xu_hang_ui_garden

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the app
RUN npm run build

# Step 2: Set up NGINX to serve the production build
FROM nginx:alpine

# Copy the build output from the previous step into NGINX's default directory
COPY --from=build /xu_hang_ui_garden/dist /usr/share/nginx/html

# Expose port 8083 for the app to run on
EXPOSE 8083

# Start NGINX when the container runs
CMD ["nginx", "-g", "daemon off;"]
