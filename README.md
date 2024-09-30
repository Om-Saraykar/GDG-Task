# GDG - RBU Chapter Website

Welcome to the GDG - RBU Chapter website! This dynamic platform serves as a hub for tech enthusiasts at RBU, aiming to empower students through community engagement and access to Google developer technologies.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Getting Started](#getting-started)
- [Contributions](#contributions)
- [References](#references)

## Overview

The GDG - RBU Chapter website is designed with a sleek user interface and a responsive layout, offering an engaging experience for users. The website showcases the mission and vision of GDG while providing vital information about events, resources, and how to get involved.

Here's a more concise version of the **Features** section and **Bonus Features** list:

## **Features**

- **Home Page**: An inviting landing page that highlights GDG's mission and vision.
- **Navigation Bar**: Quick access to key sections like Home, Events, Team, Alumni, and Contact.
- **Informational Sections**: Insights into GDG's mission and values that drive our community.
- **Responsive Design**: Optimized for a seamless experience on both desktop and mobile devices.

Here's the revised **Bonus Features** section that highlights the implemented features without detailed descriptions:

## **Bonus Features**
- **Dark Mode Functionality**: Easily switch between light and dark themes for a personalized experience.
- **SEO Optimization**: Meta tags and performance enhancements have been added to improve search visibility.
- **Deployment on Vercel**: Hosted for fast and reliable access. Check it out [here](https://gdg-task.vercel.app/).
- **Comprehensive Documentation**: Clear README and issue tracking available.
- **Containerization with Docker**: Used to ensure consistent environments for development and production.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For handling routing within the application.
- **Tailwind CSS**: For styling the application with a modern and responsive design.
- **JavaScript**: For implementing dynamic functionality and state management.
- **Docker**: For containerizing the application.

## Deployment

The GDG - RBU Chapter website is deployed on [Vercel](https://gdg-task.vercel.app/). 

Here's the updated **Getting Started** section that clearly mentions the two ways to run the project:

---

## **Getting Started**

You can run this project in two ways: using the standard setup or using Docker. Follow the instructions below for your preferred method.

### **Standard Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/Om-Saraykar/GDG-Task.git
   ```

2. Navigate to the project directory:
   ```bash
   cd GDG-Task
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`.

### **Docker Setup**

Alternatively, you can run the application using Docker by following these steps:

1. Ensure you have Docker installed on your machine.

2. Clone the repository:
   ```bash
   git clone https://github.com/Om-Saraykar/GDG-Task.git
   ```

3. Navigate to the project directory:
   ```bash
   cd GDG-Task
   ```

4. Build the Docker image:
   ```bash
   docker build -t gdg-rbu-chapter .
   ```

5. Run the Docker container:
   ```bash
   docker run -p 5173:5173 gdg-rbu-chapter
   ```

6. Open your browser and visit `http://localhost:5173`.

   #### Dockerfile

   Here's a brief overview of the Dockerfile:

   ```dockerfile
   FROM node:20-alpine

   WORKDIR /app

   COPY package*.json .

   RUN npm install

   COPY . .

   EXPOSE 5173

   CMD [ "npm", "run", "dev" ]
   ```

   - **FROM node:20-alpine**: Uses the lightweight Alpine version of Node.js 20 as the base image.
   - **WORKDIR /app**: Sets the working directory inside the container to `/app`.
   - **COPY package*.json .**: Copies package.json files to the container.
   - **RUN npm install**: Installs the application dependencies.
   - **COPY . .**: Copies the entire application code to the container.
   - **EXPOSE 5173**: Exposes port 5173 for the application.
   - **CMD [ "npm", "run", "dev" ]**: Runs the development server.

## Contributions

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request with your changes.


## References

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com/en)
- [Docker Documentation](https://docs.docker.com/)

