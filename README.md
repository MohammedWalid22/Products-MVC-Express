# 🛒 Products Management App

A full-stack **Product Management System** built with **Node.js, Express, MongoDB** following the **MVC architecture**.  
The project allows users to manage products with full CRUD operations and a clean frontend UI.

---

## 🚀 Features

- 📦 Create, Read, Update, Delete products
- 🧱 MVC Architecture (Models, Views, Controllers)
- 🎨 Server-side rendered UI using **EJS**
- 🗄 MongoDB + Mongoose
- 🌱 Seed script to populate database
- ⚡ Express.js backend
- 🧹 Clean project structure
- 🧑‍💻 Beginner to Intermediate friendly

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **EJS**
- **CSS**
- **dotenv**
- **nodemon**

---

## 📁 Project Structure

products-app/
│
├── app.js
├── package.json
├── .env
├── .gitignore
├── seed.js
│
├── config/
│ └── db.js
│
├── models/
│ └── Product.js
│
├── controllers/
│ └── productController.js
│
├── routes/
│ └── productRoutes.js
│
├── views/
│ └── products/
│ ├── index.ejs
│ ├── new.ejs
│ └── edit.ejs
│
└── public/
└── css/
└── style.css


---


## 🌐 Usage

Open your browser and go to:  
`http://localhost:3000/products`

You can:  
- View all products  
- Add a new product  
- Edit existing products  
- Delete products  

---

## 📌 Learning Outcomes

- Understanding MVC architecture  
- Working with MongoDB & Mongoose  
- Building server-rendered applications  
- Structuring real-world Node.js projects  
- CRUD operations in Express  

---

## 🔮 Future Improvements

- Authentication & Authorization (JWT)  
- REST API version  
- Admin dashboard  
- Image upload  
- Pagination & search  

---

## 👨‍💻 Author

Mohammed Walid  
Backend Developer (Node.js)  

---

## ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub!

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/MohammedWalid22/products-app.git
cd products-app
2️⃣ Install dependencies
npm install
3️⃣ Environment Variables
Create a .env file in the root directory:

MONGO_URI=mongodb://127.0.0.1:27017/productsDB
4️⃣ Seed the database (optional)
node seed.js
5️⃣ Run the project
npm run dev

