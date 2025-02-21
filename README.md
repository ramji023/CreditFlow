# CreditFlow

**CreditFlow** is a smart digital ledger application that helps users track payments, manage dues, set reminders, and generate financial reports effortlessly.

## Features

- **User Authentication** (JWT-based login/signup)
- **Transaction Management** (Add, edit, delete payments)
- **Reminders & Notifications** (Set due date alerts)
- **Monthly Reports & Charts** (Visualize income & expenses)
- **Filtering & Sorting** (Category-wise, date-wise transactions)
- **Dark Mode Support**
- **Export Data** (CSV/PDF)

## Tech Stack

### **Frontend**
- React.js
- Tailwind CSS
- React Query (for API state management)
- Axios (for API requests)

### **Backend**
- Express.js
- PostgreSQL (Database)
- Prisma ORM (or Knex.js for query building)
- JSON Web Token (JWT) for authentication
- Node-Cron (for scheduled reminders)

## Installation & Setup

### **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/creditflow.git
cd creditflow
