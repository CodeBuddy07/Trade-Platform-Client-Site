# Trade People

<div align="center">
  <img src="https://res.cloudinary.com/dp1mpzbvq/image/upload/v1746285003/portfolio/jxrttl9wnfvxtxyomf3i.png" alt="Trade People Logo">
  <p><strong>Connecting Clients with Skilled Tradespeople</strong></p>
</div>

## 📋 Project Overview

Trade People is a full-stack web application that connects clients with skilled tradespeople like electricians, plumbers, and carpenters. Our platform allows clients to post jobs and tradespeople to view and bid on available opportunities. 

The application streamlines the process of finding and hiring qualified trade professionals while providing tradespeople with a steady stream of potential work. The platform supports real-time messaging, secure authentication, and role-based dashboards tailored to each user type's needs.

## 🛠️ Tech Stack

### Frontend
- **React.js** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Axios** - Promise-based HTTP client for API requests
- **React Router** - Declarative routing for React applications

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework for Node.js
- **MongoDB** - NoSQL database for storing application data
- **Mongoose** - Object Data Modeling (ODM) library for MongoDB
- **JWT** - JSON Web Tokens for secure authentication
- **bcrypt** - Library for hashing and comparing passwords

### Deployment
- **Vercel** - Frontend deployment (optional)
- **Render** - Backend deployment (optional)

## ✨ Key Features

- **Secure Authentication System**
  - JWT-based authentication
  - Password encryption with bcrypt
  - Protected routes and API endpoints

- **Role-Based Access Control**
  - Client dashboard
  - Tradesperson dashboard
  - Admin panel for system oversight

- **Job Management**
  - Post new job opportunities with detailed descriptions
  - Browse jobs with filtering and search capabilities
  - Save favorite jobs for later

- **Bidding System**
  - Place competitive bids on jobs
  - View and compare multiple bids
  - Accept or decline bids

- **Real-Time Messaging**
  - Direct communication between clients and tradespeople
  - Notification system for new messages
  - Message history and conversation tracking

- **Responsive Design**
  - Mobile-first approach
  - Consistent experience across devices
  - Accessible user interface

## 🚀 Installation

### Prerequisites
- Node.js (v16.x or later)
- npm (v8.x or later)
- MongoDB (v5.x or later)

### Clone the Repository
```bash
# Clone the repository
git clone https://github.com/yourusername/trade-people.git

# Navigate to the project directory
cd trade-people
```

### Setting Up the Backend
```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

Edit the `.env` file with your MongoDB connection string and JWT secret:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/trade-people
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=30d
```

### Setting Up the Frontend
```bash
# Navigate to the client directory
cd ../client

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

Edit the `.env` file with your backend API URL:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🏃‍♂️ Running the Project

### Start the Backend Server
```bash
# Navigate to the server directory
cd server

# Run in development mode
npm run dev

# Or run in production mode
npm start
```

The server will start on http://localhost:5000 (or the port specified in your .env file).

### Start the Frontend Development Server
```bash
# Navigate to the client directory
cd ../client

# Start the development server
npm start
```

The client application will start on http://localhost:3000 and will automatically open in your default browser.

## 📝 API Routes

### Authentication
| Method | Endpoint              | Description                | Access          |
|--------|----------------------|----------------------------|-----------------|
| POST   | /api/auth/register   | Register a new user        | Public          |
| POST   | /api/auth/login      | Login a user               | Public          |
| GET    | /api/auth/profile    | Get user profile           | Protected       |
| PUT    | /api/auth/profile    | Update user profile        | Protected       |

### Jobs
| Method | Endpoint              | Description                | Access          |
|--------|----------------------|----------------------------|-----------------|
| GET    | /api/jobs            | Get all jobs               | Protected       |
| GET    | /api/jobs/:id        | Get job by ID              | Protected       |
| POST   | /api/jobs            | Create a new job           | Client Only     |
| PUT    | /api/jobs/:id        | Update a job               | Job Owner Only  |
| DELETE | /api/jobs/:id        | Delete a job               | Job Owner Only  |

### Bids
| Method | Endpoint              | Description                | Access          |
|--------|----------------------|----------------------------|-----------------|
| GET    | /api/jobs/:id/bids   | Get all bids for a job     | Job Owner Only  |
| POST   | /api/jobs/:id/bids   | Place a bid on a job       | Tradesperson    |
| PUT    | /api/bids/:id        | Update a bid               | Bid Owner Only  |
| DELETE | /api/bids/:id        | Delete a bid               | Bid Owner Only  |
| PUT    | /api/bids/:id/accept | Accept a bid               | Job Owner Only  |

### Messages
| Method | Endpoint              | Description                | Access          |
|--------|----------------------|----------------------------|-----------------|
| GET    | /api/messages/:userId | Get messages with a user   | Protected       |
| POST   | /api/messages        | Send a message             | Protected       |
| PUT    | /api/messages/:id/read | Mark message as read      | Message Recipient |

## 📁 Project Structure

```
trade-people/
├── client/                 # Frontend React application
│   ├── public/             # Public assets
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context for state management
│   │   ├── pages/          # Application pages
│   │   ├── services/       # API service integrations
│   │   ├── utils/          # Utility functions
│   │   ├── App.js          # Main application component
│   │   └── index.js        # Entry point
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Node.js/Express application
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   ├── app.js              # Express application setup
│   ├── server.js           # Server entry point
│   └── package.json        # Backend dependencies
│
├── .gitignore              # Git ignore file
└── README.md               # Project documentation
```

## 📈 Future Enhancements

- Rating and review system for both clients and tradespeople
- Payment integration for secure transactions
- Calendar integration for scheduling
- Mobile application (iOS and Android)
- Email and SMS notifications
- Analytics dashboard for user insights

## 📄 License

### Server
This project's server code is licensed under the MIT License - see the [LICENSE](./server/LICENSE) file for details.

### Client
This project's client code is licensed under the MIT License - see the [LICENSE](./client/LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, please email us at [contact@tradepeople.com](mailto:contact@tradepeople.com) or open an issue in this repository.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/CodeBuddy07">Your Name</a></p>
</div>
