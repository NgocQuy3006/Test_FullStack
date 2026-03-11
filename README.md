# Fullstack Developer Technical Assessment

## Overview

This project is a simple **HR Management System** built for the **HRM Labs Junior Fullstack Developer Technical Assessment**.

The purpose of this project is to demonstrate basic **full-stack development skills**, including:

* Building REST APIs using **Node.js and Express**
* Creating a simple frontend using **HTML, CSS, and Vanilla JavaScript**
* Connecting frontend and backend using the **Fetch API**

The system allows users to **manage employees and create leave requests**.

---

## Project Structure

```
Test_FullStack_Developer
│
├── backend
│   ├── server.js
│   ├── package.json
│
├── frontend
│   ├── index.html
│   ├── script.js
│   ├── style.css
│
└── README.md
```

---

## How to Run the Project

### 1. Run Backend

Navigate to the backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Start the server:

```
npm start
```

The backend server will run at:

```
http://localhost:3000
```

---

### 2. Run Frontend

Open the following file in your browser:

```
frontend/index.html
```

Make sure the backend server is running before using the frontend.

---

## API Endpoints

### Employees

Get all employees

```
GET /employees
```

Add new employee

```
POST /employees
```

Example request body:

```json
{
"id": "1",
"name": "John",
"department": "IT",
"leaveBalance": 10
}
```

Get employee by ID

```
GET /employees/:id
```

Delete employee

```
DELETE /employees/:id
```

---

### Leave Requests

Create leave request

```
POST /leave
```

Example request body:

```json
{
"employeeId": "1",
"startDate": "2026-03-11",
"endDate": "2026-03-12",
"reason": "Sick leave"
}
```

When a leave request is created, the employee’s **leaveBalance is reduced by 1**.

Get all leave requests

```
GET /leave
```

Approve leave request (Bonus)

```
PATCH /leave/:id/approve
```

This endpoint updates the leave request status to **approved**.

---

## Frontend Features

* Add new employees
* View employee list in a table
* Create leave requests
* View leave requests
* Display leave request status (pending / approved)

The frontend communicates with the backend using the **Fetch API**.

---

## Data Storage

All data is stored in **in-memory arrays**.

This means that restarting the server will reset all stored data.

---

## Technologies Used

* Node.js
* Express.js
* HTML
* CSS
* JavaScript (Fetch API)

---

## Author

Submitted for **HRM Labs – Junior Fullstack Developer Technical Assessment**.
