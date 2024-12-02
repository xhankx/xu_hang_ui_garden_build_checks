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

# Step 2: Expose port for development server
EXPOSE 8083

# Run the app using `npm start` for Create React App
CMD ["npm", "start"]
