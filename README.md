# Frontend -- Vite + React + TypeScript

Modern authentication frontend built with:

-   Vite
-   React (TypeScript)
-   React Router
-   Axios
-   Framer Motion
-   Dark Theme UI
-   JWT Authentication Flow

------------------------------------------------------------------------

## Features

-   Login Page
-   Signup Page
-   Profile Page
-   JWT Token Storage (localStorage)
-   Token Verification on App Load
-   Protected Routes
-   Logout Functionality
-   Smooth Animations
-   Custom Loader Component
-   Dark Theme Styling

------------------------------------------------------------------------

## Project Structure

    frontend/
    │
    ├── src/
    │   │
    │   ├── components/
    │   │   ├── AuthLayout.tsx
    │   │   ├── Loader.tsx
    │   │   └── SecureRoute.tsx
    │   │
    │   ├── pages/
    │   │   ├── Login.tsx
    │   │   ├── Signup.tsx
    │   │   └── Profile.tsx
    │   │
    │   ├── services/
    │   │   └── api.ts
    │   │
    │   ├── hooks/
    │   │   └── useAuthCheck.ts (optional)
    │   │
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── index.css
    │
    ├── .env
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## Environment Variables

Create a `.env` file in the frontend root:

    VITE_BACKEND_URL=https://your-backend-url

Important: - Must start with `VITE_` - Restart dev server after changing
`.env`

------------------------------------------------------------------------

## Installation

    npm install

------------------------------------------------------------------------

## Run Development Server

    npm run dev

App runs at:

    http://localhost:5173
Demo email:

    test@example.com
Password:

    Test@123

------------------------------------------------------------------------

## Authentication Flow

1.  User logs in or signs up.
2.  Backend returns JWT token.
3.  Token is stored in localStorage.
4.  On app load, `/auth/verify` is called.
5.  If token is valid → redirect to profile.
6.  If invalid → clear token and redirect to login.

------------------------------------------------------------------------

## API Configuration

Axios instance automatically attaches JWT:

``` ts
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

------------------------------------------------------------------------

## Routes

  Route        Description
  ------------ ------------------------
  `/`          Login Page
  `/signup`    Signup Page
  `/profile`   Protected Profile Page

------------------------------------------------------------------------

## Protected Route

`SecureRoute` ensures only authenticated users access protected pages.

If no token → redirect to login.

------------------------------------------------------------------------

## Loader Component

Full-screen animated loader shown while verifying authentication.

------------------------------------------------------------------------

## Styling

-   Dark theme
-   Scoped CSS (no global button overrides)
-   Smooth hover transitions
-   Animated page transitions via Framer Motion

------------------------------------------------------------------------

## Production Build

    npm run build

Outputs optimized files in:

    dist/

------------------------------------------------------------------------

## Deployment Notes

-   Set `VITE_BACKEND_URL` in hosting platform environment variables.
-   Ensure backend CORS allows frontend origin.
-   Never commit sensitive environment variables.

------------------------------------------------------------------------

## Future Improvements

-   Global Auth Context
-   Refresh Token Flow
-   Token Expiry Auto Logout
-   Toast Notifications
-   Skeleton Loading States
-   Full Dashboard Layout

------------------------------------------------------------------------

## Author

Darshan Solanki
