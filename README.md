# 🌟 KeenKeeper

🔗 **Live Site:** https://keenkeeper-alpha.vercel.app/

---

## 📌 Project Overview

**KeenKeeper** is a modern contact management web application built with Next.js. It helps users keep track of their friends and maintain consistent communication. The app visually organizes contacts into interactive cards and allows users to log interactions like calls, texts, and video chats — all while tracking engagement through a timeline and statistics dashboard.

---

## 🛠️ Technologies Used

* **Next.js (App Router)**
* **React.js**
* **Tailwind CSS**
* **React Toastify**
* **Recharts**
* **JavaScript (ES6+)**

---

## 🚀 Key Features

### 1. 👥 Interactive Friend Cards

* Displays friend profiles with image, name, status (Overdue, Almost Due, On-Track), and relationship tags
* Click on any card to view detailed friend information

### 2. 📞 Smart Interaction Tracking

* Three action buttons: **Call**, **Text**, **Video**
* Each interaction triggers a toast notification
* Automatically logs the interaction into a **timeline with conditional rendering** (different visuals for call, text, video)

### 3. 📊 Visual Statistics Dashboard

* Tracks total number of calls, texts, and video interactions
* Displays data using **Recharts** for clear and engaging visualization

---

## 🎯 Purpose

KeenKeeper is designed to help users maintain meaningful relationships by reminding and tracking how often they connect with their friends — making sure no connection fades away.

---

## 💡 Future Improvements

* Authentication system
* Real-time database integration
* Reminder notifications
* Dark mode support

---
## ⚙️ Getting Started & Installation

Follow these instructions to set up and run **KeenKeeper** locally on your computer.

### 📋 Prerequisites

Before starting, make sure you have the following installed:
- **Node.js:** `v18.17.0` or higher
- **Package Manager:** `npm`, `yarn`, or `pnpm`

---

### 📥 Step-by-Step Installation

<Sequence>
  <Step title="Clone the Repository" subtitle="Terminal command">
    Clone the repository to your local machine and navigate into the project directory:
    ```bash
    git clone https://github.com/fardinfaruk-bd/KeenKeeper-A7-Next.js.git
    cd keenkeeper
    ```
  </Step>

  <Step title="Install Dependencies" subtitle="Package management">
    Install all required dependencies (including Recharts, React Toastify, and Tailwind CSS):
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
  </Step>

  <Step title="Configure Environment Variables" subtitle="Root configuration (Optional)">
    If your local setup requires app URL configuration, create a `.env.local` file in the root folder:
    ```bash
    touch .env.local
    ```

    Add the following environment variable:
    ```env
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```
  </Step>

  <Step title="Run the Development Server" subtitle="Launch application">
    Start the Next.js local development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open your browser and navigate to http://localhost:3000 to start using KeenKeeper.
  </Step>
</Sequence>

---

### 🧪 Available Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the optimized production application |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Checks for linting and code style issues |

---


## 👨‍💻 Author

Developed by **Md Fardin Faruk**

---
## ⭐ Support

If you like this project, don’t forget to give it a ⭐ on GitHub!
