
# Expiry Alert System

The Expiry Alert System is a web application built with React.js to help reduce medication waste by providing timely expiration alerts. The system includes real-time notifications, secure data storage, and a user-friendly interface. It helps users track the expiration dates of their medications and receive alerts through email, SMS, and calls. This solution leverages modern technologies like React.js, Express.js, Python-based algorithms, and MongoDB to ensure an efficient and effective user experience.

## Key Features

- **Real-Time Notifications**: Get timely alerts through email, SMS, and calls when medications are about to expire.
- **User-Friendly Dashboard**: A clean and intuitive React-based dashboard for managing and tracking medication expiration dates.
- **Secure Data Storage**: MongoDB stores user and medication data securely.
- **Alert Scheduling Algorithm**: A Python-based algorithm that schedules and triggers alerts based on medication expiration dates.
- **Twilio Integration**: SMS and call notifications via Twilio for added convenience.
- **Reduction in Medication Waste**: Achieved a 20% reduction in medication waste through timely reminders and efficient medication management.

## Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Express.js
- **Database**: MongoDB
- **Alert System**: Python (for scheduling alerts), Twilio (for SMS and calls)
- **Version Control**: Git, GitHub

## Repository

You can access the project's repository [here](https://github.com/harinireddy0611/Expiry_alert_system).

## Installation Guide

To get started with the Expiry Alert System on your local machine, follow these steps:

### Prerequisites

- **Node.js** and **npm** (Node Package Manager) installed on your system.
- **MongoDB** installed and running locally or use a cloud-based MongoDB instance (e.g., MongoDB Atlas).
- **Python 3** installed on your system for running the alert scheduling algorithm.
- **Twilio Account** for SMS and call notifications.

### Step-by-Step Installation

1. **Clone the Repository**

   First, clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/yourusername/expiry-alert-system.git
   ```

2. **Navigate to the Project Directory**

   Go to the project directory:

   ```bash
   cd expiry-alert-system
   ```

3. **Install Frontend Dependencies**

   In the frontend directory, install the necessary React.js dependencies:

   ```bash
   cd client
   npm install
   ```

4. **Install Backend Dependencies**

   In the root directory, install the necessary Express.js and backend dependencies:

   ```bash
   cd ..
   npm install
   ```

5. **Configure MongoDB**

   - If you're using a local MongoDB instance, ensure it's running.
   - If you're using MongoDB Atlas, create a cluster and obtain the connection string.
   - Configure the MongoDB URI in the backend code (`server.js` or `.env` file).

6. **Set Up Twilio**

   - Sign up for a Twilio account at [Twilio](https://www.twilio.com/).
   - Get your Twilio account SID, authentication token, and phone number.
   - Configure Twilio credentials in the backend (likely in the `.env` file).

7. **Configure the Python Alert System**

   - Ensure Python 3 is installed on your system.
   - Install any required Python libraries for scheduling (e.g., `schedule`, `smtplib`, `twilio`).
   
   Example command for installing libraries:
   
   ```bash
   pip install schedule smtplib twilio
   ```

8. **Run the Backend Server**

   Start the Express.js backend server:

   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000` by default.

9. **Run the Frontend React Application**

   In the `client` folder, start the React.js application:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000` by default.

10. **Access the Application**

    Once both the frontend and backend are running, open your web browser and go to `http://localhost:3000` to access the Expiry Alert System.

## Contributing

If you'd like to contribute to the Expiry Alert System, feel free to fork the repository and submit pull requests. Please ensure that your code adheres to the existing coding standards and includes tests where appropriate.

