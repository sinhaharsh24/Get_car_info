# 🚘 Car Identifier Web App

A modern web application that allows users to upload a car image and identifies its **brand, model, and estimated year**. It's a lightweight tool designed for enthusiasts, learners, and curious users who want instant car recognition.

🔗 **Live Demo:** [https://get-car-info-rbxf.vercel.app/](https://get-car-info-rbxf.vercel.app/)

---

## 📸 Features

- Upload car images directly from your device
- Instant preview of selected image
- Displays car **brand**, **model**, and **year**
- Simple, clean, and responsive design
- Works on both desktop and mobile browsers

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js

### Deployment
- **Frontend**: Vercel
- **Backend**: Vercel

---

## 📂 Project Structure

```
Get_car_info/
├── backend/         # Express server logic
│   ├── index.js
│   └── .env
│
├── frontend/        # Static frontend files
│   ├── index.html
│   ├── script.js
│   └── index.css
│
├── package.json
└── README.md
```

---

## 🚀 How to Use

1. **Visit the Site**: [get-car-info-rbxf.vercel.app](https://get-car-info-rbxf.vercel.app/)
2. **Choose a Car Image**: Upload from your device
3. **Click "Identify Car"**: Wait a few seconds for the result
4. **View the Details**: Brand, model, and year appear below

---

## 💻 Run Locally

### Step 1: Clone the Repository

```bash
git clone https://github.com/sinhaharsh24/Get_car_info.git
cd Get_car_info
```

### Step 2: Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file and add your secret key if needed.

```env
# example
SECRET_KEY=your_key_here
```

Run the server:

```bash
node index.js
```

### Step 3: Open the Frontend

Open `frontend/index.html` in your browser, or use Live Server in VS Code.

---

## ✨ Creator

Made by [Harsh Sinha](https://github.com/sinhaharsh24)
