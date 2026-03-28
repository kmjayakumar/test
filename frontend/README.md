# Patient Management Frontend

A clean, modern, and production-ready React frontend for managing patient records.

## Technology Stack

- **React (v18)**: Functional components and hooks for UI logic.
- **Redux Toolkit**: Efficient and reliable state management.
- **Tailwind CSS**: Utility-first styling for a custom, responsive design.
- **Parcel**: Fast, zero-config web application bundler.
- **Lucide React**: Beautifully simple icons.

## Features

- **Patient Registration**: Form with validation for name, age (>0), and gender.
- **Real-time Search**: Multi-field, case-insensitive filtering for quick patient location.
- **Soft Delete**: Mark records as inactive without permanent removal from history.
- **Responsive UI**: Fully optimized for mobile, tablet, and desktop views.
- **Dynamic Updates**: State-driven UI for instant feedback on CRUD actions.

## Prerequisites

- Node.js (v16+)
- A running backend server (on `http://localhost:5000`)

## Getting Started

1.  **Clone the repository**.
2.  **Install dependencies**:
    ```bash
    cd frontend
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm start
    ```
4.  **Production build**:
    ```bash
    npm run build
    ```

## Project Structure

```bash
frontend/
├── src/
│   ├── api/          # Axios instance & service calls
│   ├── components/   # Reusable UI components
│   ├── store/        # Redux store & patientSlice
│   ├── App.js        # Main layout & component integration
│   ├── index.css     # Tailwind imports & base styles
│   ├── index.html    # Entry HTML
│   └── index.js      # React entry point
├── package.json      # Dependencies & scripts
└── README.md         # Documentation
```
