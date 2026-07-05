# Full Stack Development with MERN
# Project Documentation

---

# 1. Introduction

### Project Title
**ONLINE COMPLAINT REGISTRATION**

### Team Members

Name : Yuvaraj Mithun  (Team Lead)
Role:  Full Stack MERN Developer (Frontend, Backend & Database) |

---

# 2. Project Overview

## Purpose

The **Online Complaint Registration** system is a full-stack MERN web application developed to simplify complaint registration, tracking, and management. It provides a centralized platform where users can submit complaints, administrators can assign them to agents, and agents can resolve complaints while updating their status. The system improves transparency, communication, and efficiency in complaint management.

## Features

### User Features
- User Registration
- User Login
- Submit New Complaint
- View Complaint Status
- View Complaint History
- Chat with Assigned Agent

### Admin Features
- Admin Login
- View All Complaints
- View Registered Users
- View Available Agents
- Assign Complaints to Agents
- Update User Information
- Prevent Duplicate Complaint Assignment

### Agent Features
- Agent Login
- View Assigned Complaints
- Update Complaint Status
- Mark Complaints as Completed
- Chat with Users

---

# 3. Architecture

## Frontend

The frontend is developed using **React.js** with reusable components and React Bootstrap for responsive user interface design. Axios is used to communicate with the backend REST APIs.

**Technologies Used**
- React.js
- React Bootstrap
- Axios
- React Router DOM
- HTML5
- CSS3

## Backend

The backend is built using **Node.js** and **Express.js**.

Responsibilities:
- User Authentication
- Complaint Registration
- Complaint Assignment
- Complaint Status Updates
- Chat Message Handling
- Database Operations

## Database

MongoDB is used as the database with Mongoose.

Collections:
- Users
- Complaints
- AssignedComplaints
- Messages

---

# 4. Setup Instructions

## Prerequisites

- Node.js v18.x
- npm v10.x
- MongoDB Community Server
- MongoDB Compass (Optional)
- Visual Studio Code
- Git

## Installation

```bash
git clone <repository-url>
cd complaint-registery

cd backend
npm install

cd ../frontend
npm install
```

Start MongoDB Community Server before running the backend.

---

# 5. Folder Structure

## Client

```text
frontend/
├── public/
├── src/
├── package.json
└── package-lock.json
```

## Server

```text
backend/
├── config.js
├── Schema.js
├── index.js
├── package.json
└── package-lock.json
```

---

# 6. Running the Application

## Frontend

```bash
cd frontend
npm start
```

Runs on:
http://localhost:3000

## Backend

```bash
cd backend
npm start
```

Runs on:
http://localhost:8000

---

# 7. API Documentation

- POST /SignUp
- POST /Login
- POST /Complaint/:id
- GET /status/:id
- GET /status
- PUT /complaint/:complaintId
- GET /OrdinaryUsers
- DELETE /OrdinaryUsers/:id
- PUT /user/:_id
- GET /AgentUsers
- GET /AgentUsers/:agentId
- POST /assignedComplaints
- GET /allcomplaints/:agentId
- POST /messages
- GET /messages/:complaintId

Example Response

```json
{
  "_id": "...",
  "status": "completed"
}
```

---

# 8. Authentication

The project implements role-based authentication (Admin, Agent, Ordinary User). Login information is stored using Session Storage for the current browser session.

---

# 9. User Interface

Include screenshots of:
- Login
- Registration
- User Dashboard
- Complaint Form
- Complaint Status
- Admin Dashboard
- Agent Dashboard
- Chat Window

---

# 10. Testing

Manual testing was performed for:
- Registration
- Login
- Complaint Submission
- Complaint Assignment
- Complaint Status Updates
- Chat
- CRUD Operations
- Session Management

---

# 11. Screenshots or Demo

Attach screenshots of all major pages before submission.

---

# 12. Known Issues

- Passwords are stored without encryption.
- file upload support is to be implemented.
- mail/SMS notifications is to be implemented.
- analytics dashboard is to be implemented.

---

# 13. Future Enhancements

- JWT Authentication
- bcrypt Password Encryption
- Complaint Categories
- Complaint Priority
- File Attachments
- Email Notifications
- SMS Notifications
- Reports and Analytics
- Search and Filters
- Socket.io Real-Time Notifications

---

# Author

**Yuvaraj Mithun**

Full Stack Development with MERN

ONLINE COMPLAINT REGISTRATION
