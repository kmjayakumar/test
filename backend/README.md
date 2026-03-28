# Node.js Express Backend Setup

A clean MVC (Model-View-Controller) architecture for a Node.js Express backend using MongoDB and Mongoose.

## Folder Structure

```
backend/
├── src/
│   ├── config/       # Database configuration
│   ├── controllers/  # Business logic
│   ├── models/       # Mongoose schemas
│   └── routes/       # API endpoints
├── .env              # Environment variables
├── .gitignore        # Git ignore rules
├── index.js          # Server entry point
├── package.json      # Dependencies and scripts
└── README.md         # Documentation
```

## Features

- **Express Framework**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB & Mongoose**: Object Data Modeling (ODM) for MongoDB and Node.js.
- **MVC Pattern**: Separated concerns for better maintainability and scalability.
- **Environment Variables**: Managed using `dotenv`.
- **CORS**: Enabled for cross-origin requests.
- **Error Handling**: Custom middleware for global error handling.

## Getting Started

1.  **Clone the repository**.
2.  **Install dependencies**:
    ```bash
    cd backend
    npm install
    ```
3.  **Setup environment variables**:
    Create a `.env` file in the `backend` folder and add your `MONGO_URI`.
4.  **Run the server**:
    - Development mode:
      ```bash
      npm run dev
      ```
    - Production mode:
      ```bash
      npm start
      ```

## API Endpoints

- `GET /`: Health check.
- `GET /api/users`: Get all users.
- `POST /api/users`: Create a new user.
