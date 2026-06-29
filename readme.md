# Setup Guide

Follow the steps below to run the project locally.

## 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

---

## 2. Start MongoDB Using Docker

Make sure Docker is running, then start a MongoDB container:

```bash
docker run -d --name mongo-container -p 27017:27017 mongo
```

This will start MongoDB on **localhost:27017**.

---

## 3. Connect MongoDB Compass

Open **MongoDB Compass** and connect using the following connection string:

```text
mongodb://localhost:27017/<Database_Name>
```

> Replace `<Database_Name>` with the name of your database.

---

## 4. Install Dependencies

```bash
npm install
```

---

## 5. Build the Project

```bash
npm run build
```

---

## 6. Start the Server

```bash
npm start
```

The server should now be running locally.

---

## 7. Test the API

Use **Postman** (or any API client) to test the endpoints.

For example, create a new user by sending a request to the appropriate **Create User** endpoint.

---

## Prerequisites

- Node.js
- Docker
- MongoDB Compass (optional but recommended)
- Postman (or any API testing tool)