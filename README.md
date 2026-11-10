# Placement Pilot 🚀🎓

> A full-stack placement preparation platform designed to help students track their job applications, explore top companies, and follow structured learning roadmaps.
>
> 🌐 **[Try the Live App Here](https://placementpilot.netlify.app/)**

---

## ✨ Overview

Navigating campus placements can be overwhelming. **Placement Pilot** solves this by providing a centralized dashboard where students can discover 45+ companies, monitor their application status (Applied, Interviewing, Offered, Rejected), and follow 19 carefully curated roadmaps for technical subjects. 

Built with a modern, responsive UI, it features secure authentication and real-time data syncing.

---

## 💎 Key Features

*   **🔐 Secure Authentication:** Email/Password and Google Sign-in powered by Firebase Auth. Also includes a Guest Mode for quick exploration.
*   **🏢 Company Explorer:** Browse a database of 45+ companies with details on their hiring process, required skills, and package details.
*   **📈 Application Tracker:** Keep track of every job application with real-time status updates.
*   **🗺️ Learning Roadmaps:** Access 19 structured roadmaps (DSA, Web Dev, Core Subjects) with progress tracking.
*   **📱 Fully Responsive:** Optimized for both desktop and mobile devices using Tailwind CSS.
*   **☁️ Real-Time Data:** Powered by Firebase Firestore for instant syncing across devices.

---

## 🛠️ Tech Stack

### **Frontend**
*   **Framework:** React + Vite
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **Routing:** React Router

### **Backend & Database**
*   **Authentication:** Firebase Auth (Email, Google, Guest)
*   **Database:** Firebase Firestore
*   **Deployment:** Netlify

---

## 🚀 Quick Start Guide

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18+)
*   A Firebase project setup

### 1. Clone the repository
```bash
git clone https://github.com/MosaSushma/Placement-Pilot.git
cd Placement-Pilot
```
### 2. Install dependencies
```bash
npm install
```
### 3. Environment Variables
Create a .env file in the root directory and add your Firebase configuration:
```bash
env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
### 4. Run the development server
```bash
npm run dev
The app will run on http://localhost:5173
```
### 👥 Meet the Developer
Built with ❤️ by Mosa Sushma.

LinkedIn: sushmamosa
GitHub: MosaSushma


