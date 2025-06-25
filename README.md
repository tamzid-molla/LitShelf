# 📚 **LitShelf**

**Your Personal Virtual Bookshelf**

---

## 📝 Project Overview

**LitShelf** is a full-stack web application that lets book lovers browse, collect, and organize their reading life in one place.  
With secure authentication, rich search, interactive shelves, and real-time updates, LitShelf turns your TBR pile into an engaging, data-driven experience.

---

## ✨ Core Features

| 🔎 | **Discover & Collect** – Search by title/author and save books to custom shelves |
|---|---|
| 📚 | **Smart Shelves** – “Currently Reading”, “Want to Read”, “Finished”, or create your own |
| 💬 | **Reviews & Ratings** – Share feedback and see community opinions |
| 📊 | **Reading Tracker** – Track pages read, set goals, view insightful charts |
| 🔐 | **Secure Auth** – Firebase-backed JWT login / registration |
| 🌙 | **Dark Mode** – Toggle between light & dark themes |
| 📱 | **Responsive UI** – Optimized for mobile, tablet & desktop |
| 🚀 | **Real-Time UX** – Instant updates without page refresh |

---


## 🧪 Tech Stack

### 🖥️ Frontend

| Package               | Version     |
|-----------------------|-------------|
| React                 | ^19.1.0     |
| Tailwind CSS          | ^4.1.8      |
| DaisyUI               | ^5.0.43     |
| React Router DOM      | ^7.6.1      |
| Firebase              | ^11.9.0     |
| Lottie React          | ^2.4.1      |
| React CountUp         | ^6.5.3      |
| SweetAlert2           | ^11.22.0    |
| Swiper.js             | ^11.2.8     |
| React Icons           | ^5.5.0      |
| React Tooltip         | ^5.28.1     |
| Axios                 | ^1.9.0      |
| Chart.js              | ^4.4.9      |
| React Chart.js 2      | ^5.3.0      |
| Framer Motion         | ^12.16.0    |
| @tailwindcss/vite     | ^4.1.8      |

---

### ⚙️ Backend

| Package           | Description                          |
|------------------|--------------------------------------|
| Node.js           | JavaScript runtime                   |
| Express.js        | Web framework                        |
| MongoDB (Atlas)   | NoSQL cloud database                 |
| dotenv            | Environment variable management      |
| CORS              | Enable Cross-Origin Resource Sharing |
| Firebase Admin    | Verify JWT & manage auth             |
| Nodemon           | Auto-reloading in development        |

### 🌐 Live Demo

🔗 [https://assignment11-tamzid.surge.sh/](https://assignment11-tamzid.surge.sh/)

---



## 📡 API Endpoints

All `🔒` routes require JWT Authorization in the `Authorization` header:  
`Authorization: Bearer <token>`

---

### 👤 User Routes

| Method | Endpoint           | Description                         |
|--------|--------------------|-------------------------------------|
| POST   | `/users`           | Add a new user to the database      |
| GET    | `/users/all?email=`| Check if a user exists by email     |
| GET    | `/users`           | Get all users                       |

---

### 📚 Book Routes

| Method | Endpoint                    | Description                                 |
|--------|-----------------------------|---------------------------------------------|
| GET    | `/books`                    | Get all books                               |
| GET    | `/books/recent/top`         | Get top 6 recently added books              |
| GET    | `/books/top`                | Get top 6 books sorted by upvotes           |
| GET    | `/books/category?category=` | Get books by category (query param)         |
| GET    | `/books/categories/:category` | Get books by category (URL param)         |
| GET    | `/books/total/category`     | Get total books by each category            |
| GET 🔒 | `/books/email?email=`       | Get books by user email                     |
| GET 🔒 | `/books/:id`                | Get a single book by ID                     |
| POST 🔒| `/books`                    | Add a new book                              |
| PUT 🔒 | `/books/:id`                | Update book details                         |
| PATCH 🔒| `/books/status/:id`        | Update book's reading status                |
| PATCH 🔒| `/books/:id`               | Increment upvote count for a book           |
| DELETE | `/books/:id`               | Delete a book by ID                         |

---

### 🌟 Rating/Review Routes

| Method | Endpoint              | Description                                |
|--------|-----------------------|--------------------------------------------|
| GET    | `/ratings`            | Get all ratings                            |
| GET    | `/rating/:bookId`     | Get ratings for a specific book            |
| POST 🔒| `/ratings`            | Add a rating/review                        |
| PATCH  | `/rating/:id`         | Edit a review                              |
| DELETE | `/rating/:id`         | Delete a review                            |

---

### 🛡️ Auth / Middleware

| Feature       | Description                               |
|---------------|-------------------------------------------|
| `verifyJWT`   | Validates Firebase JWT for protected routes |

---


---

## 🛠️ Getting Started (Local Setup)

### ⚙️ Prerequisites

- Node.js (v16+)
- MongoDB Atlas account or local MongoDB
- Firebase project credentials

---

### 📦 Backend Setup

1. Clone the full project and go to the server folder:
   ```bash
   git clone https://github.com/tamzid-molla/LitShelf.git
   cd server-side
2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add your environment variables:
    ```ini
    DB_USER=your_mongodb_user
    DB_PASSWORD=your_mongodb_password
    PORT=3001
    FB_SERVICE_KEY=Your service key
    ```

4. Start the server:
    ```bash
    nodemon index.js
    ---


### 💻 Frontend Setup

1. In a new terminal, navigate to the client folder:
    ```bash
    cd client-side
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `client-side` folder and add your Firebase environment variables:
    ```ini
    VITE_apiKey=your_api_key
    VITE_authDomain=your_auth_domain
    VITE_projectId=your_project_id
    VITE_storageBucket=your_storage_bucket
    VITE_messagingSenderId=your_messaging_sender_id
    VITE_appId=your_app_id
    VITE_baseURL=your backend server base_url
    ```
4. Start the React development server:
    ```bash
    npm run dev
    ```
