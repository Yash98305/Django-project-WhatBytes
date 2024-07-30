# Django User Authentication Project

This project is a Django application that provides user authentication with the following features:

- Login with email or username and password
- Signup
- Forgot password
- Change password
- User dashboard
- User profile
- Access restrictions based on authentication status

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
  - [Login Page](#login-page)
  - [Sign Up Page](#sign-up-page)
  - [Forgot Password Page](#forgot-password-page)
  - [Change Password Page](#change-password-page)
  - [Dashboard](#dashboard)
  - [Profile Page](#profile-page)


## Requirements

- Python 3.6+
- Django 3.2+
- Django Rest Framework
- Email backend setup for sending password reset emails (SMTP, Mailgun, etc.)

## Installation

1. **Clone the repository:**

   git clone https://github.com/Yash98305/Django-project-WhatBytes.git
   cd Django-project-WhatBytes

2. **Create and activate a virtual environment:**
    python3 -m venv env
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. **Install dependencies:**
    pip install -r requirements.txt

4. **Create a .env file for environment variables:**
    SECRET_KEY=your_secret_key
    DEBUG=True
    SIGNING_KEY=your_signing
    EMAIL_HOST=smtp.your-email-provider.com
    EMAIL_HOST_USER=your-email@example.com
    EMAIL_HOST_PASSWORD=your-email-password
    EMAIL_PORT=2525
    DOMAIN=localhost:5173

5. **Run database migrations:**
    python manage.py migrate

6. **Create a superuser:**
    python manage.py createsuperuser

7. **Start the development server:**
    python manage.py runserver

8. **Access the application:**
    Open your browser and go to http://127.0.0.1:8000.


## Usage
- Login Page
- Display two fields: Username/Email and Password.
- Include links/buttons for Sign Up and Forgot Password.
- Sign Up Page
- Include fields for Username, Email, Password, and Confirm Password.
- Include a link/button to go back to the Login page.
- Forgot Password Page
- Include a field for Email and a button to send reset instructions.
- Upon clicking the button, send an email with a link to reset the password.
- Change Password Page
- Require authentication to access this page.
- Include fields for Old Password, New Password, and Confirm Password.
- Include a link/button to go back to the Dashboard.
- Dashboard
- Only accessible to authenticated users.
- Display a greeting message like "Hi, username!".
- Include links to the Profile page and Change Password page.
- Provide an option to logout.
- Profile Page
- Display information such as Username, Email, Date Joined, and Last  Updated.
- Include a link/button to go back to the Dashboard.
- Provide an option to logout.

# Vite React Frontend
This section covers the frontend part of the project, built using Vite and React.

Requirements
Node.js 14+
npm 

## Installation
1. **Navigate to the frontend directory:**
cd frontend

2. **Install dependencies:**
npm install

3. **Start the development server:**
npm run dev

4. **Access the application:**

Open your browser and go to http://localhost:5173

## Features
Login Page:

Includes fields for Username/Email and Password.
Links to Sign Up and Forgot Password pages.
Sign Up Page:

Includes fields for Username, Email, Password, and Confirm Password.
Link to Login page.
Forgot Password Page:

Includes a field for Email and a button to send reset instructions.
Change Password Page:

Requires authentication.
Fields for Old Password, New Password, and Confirm Password.
Dashboard:

Accessible only to authenticated users.
Displays a greeting message and links to Profile and Change Password pages.
Logout option.
Profile Page:

Displays user information such as Username, Email, Date Joined, and Last Updated.
Link to Dashboard and Logout option.
