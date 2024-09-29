# GDG - RBU Chapter Website

Welcome to the GDG - RBU Chapter website! This dynamic platform serves as a hub for tech enthusiasts at RCOEM, aiming to empower students through community engagement and access to Google developer technologies.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Docker Setup](#docker-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Overview

The GDG - RBU Chapter website is designed with a sleek user interface and a responsive layout, offering an engaging experience for users. The website showcases the mission and vision of GDG while providing vital information about events, resources, and how to get involved.

## Features

- **Dark Mode Toggle**: Seamlessly switch between light and dark themes for a personalized browsing experience.
- **Home Page**: An inviting landing page that introduces GDG, showcasing our mission and vision.
- **Navigation Bar**: Easy access to different sections like Home, Events, Team, Alumni, and Contact.
- **Informational Sections**: Dedicated sections to get to know GDG, including our mission, perspective, and the driving forces behind our community.
- **Responsive Design**: Optimized for various devices, ensuring a smooth user experience on both desktop and mobile.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For handling routing within the application.
- **Tailwind CSS**: For styling the application with a modern and responsive design.
- **JavaScript**: For implementing dynamic functionality and state management.
- **Docker**: For containerizing the application.

## Getting Started

To run this project locally, follow these steps:

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

## Docker Setup

To run the application using Docker, follow these steps:

1. Ensure you have Docker installed on your machine.
2. Navigate to the project directory.
3. Build the Docker image:
   ```bash
   docker build -t gdg-rbu-chapter .
   ```

4. Run the Docker container:
   ```bash
   docker run -p 5173:5173 gdg-rbu-chapter
   ```

5. Open your browser and visit `http://localhost:5173`.

### Dockerfile

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

## Deployment

The GDG - RBU Chapter website is deployed on [Vercel](https://gdg-task.vercel.app/). 

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request with your changes.
