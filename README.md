Assignment 1:

Balaji Vamshi Pasala
Student ID - N12156442

## Online Donation Tracker

### Objective

This project is a full-stack Online Donation Tracker application built with Node.js, React.js, and MongoDB. It allows users to register, log in, and manage donations securely. The app supports CRUD operations for donors and donations, and follows DevOps best practices including CI/CD and automated deployment to AWS EC2.

---

### Features

- User authentication and authorization (JWT-based)
- Add, view, update, and delete donors
- Track donations and donor details
- Responsive frontend with React.js
- RESTful backend API with Node.js and Express
- MongoDB database integration
- CI/CD pipeline with GitHub Actions
- Automated deployment to AWS EC2

---

### Project Management & Design

- Managed with JIRA (Epics, User Stories, Sprints)
- SysML diagrams: Requirements, Block Definition, Parametric
- [JIRA Board URL: <https://connect-team-u2bbqxfv.atlassian.net/jira/software/projects/TASK/summary?atlOrigin=eyJpIjoiZDU3M2Y0YjQwODg0NGZkZTgxNzYwZWI4ZTdmZTFjYjUiLCJwIjoiaiJ9>]

---

### Setup Instructions

1. Clone the repository:
  ```bash
  git clone https://github.com/Vammy4211/Assignment-1.git
  ```
2. Install dependencies for backend and frontend:
  ```bash
  cd backend
  npm install
  cd ../frontend
  npm install
  ```
3. Set up environment variables:
  - Create a `.env` file in `backend/` with:
    ```env
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    PORT=5001
    ```
  - Create a `.env` file in `frontend/` if needed for API endpoints.
4. Start the backend and frontend servers:
  ```bash
  cd backend
  npm run dev
  cd ../frontend
  npm start
  ```

---

### CI/CD & Deployment

- GitHub Actions workflows for automated testing and deployment
- Secrets managed in GitHub for secure deployment
- AWS EC2 used for hosting backend and frontend

---

### Public URL

- [Deployed App URL: <http://13.239.1.182>]

---

### Access Credentials

- Username: <Vammy>
- Password: <admin>

---

### Assessment Criteria

- Complete JIRA board and SysML models
- Git best practices and branching
- Working CRUD features and authentication
- CI/CD pipeline and deployment
- Clear documentation and screenshots

