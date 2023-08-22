FROM node:18.17.0-buster-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install application dependencies inside the container
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Set the application's default port (e.g., 3000 for Express.js apps)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]