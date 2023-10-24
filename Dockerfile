# Use the official Node.js 14 image from DockerHub
FROM node:14

# Set the working directory in docker
WORKDIR /app

# Copy the dependencies file to the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install --production

# Copy the content of the local src directory to the working directory
COPY . .

# Specify the command to run on container start
CMD ["npm", "run", "start"]
