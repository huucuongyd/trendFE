# Stage 1: Build the Vite.js application
FROM node:18-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies with the --legacy-peer-deps flag
RUN yarn install --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# Build your Vite.js project for production
RUN yarn build

# Stage 2: Serve the built Vite.js app using Nginx
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm -rf /etc/nginx/conf.d/*

# Expose the port that Nginx listens on (default is 80)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]