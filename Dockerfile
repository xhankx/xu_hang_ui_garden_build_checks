# Use Node.js base image
FROM node:16

# Set the working directory
WORKDIR /xu_hang_ui_garden_build_checks

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose port 8018
EXPOSE 8018

# Start the application
CMD ["npm", "start"]
