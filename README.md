# InkPix 

This project is a Text-to-Image SaaS application that allows users to generate images based on text prompts. 
Users need to purchase credits to create images, with multiple plans available to buy credits securely through Razorpay integration. 
Built with React on the frontend and Node.js with MongoDB on the backend, the app offers a smooth, responsive UI enhanced with animations and robust user authentication. 
This platform provides an easy and secure way for users to convert text prompts into images while managing their credit balance efficiently.

---

## Features

- User authentication with JWT
- Purchase credits using Razorpay payment gateway
- Generate images from text prompts using AI (or any image generation API)
- Credit balance management
- Responsive and animated UI with React and Framer Motion
- Transaction history tracking

---

## Tech Stack

- Frontend: React, Framer Motion, Axios
- Backend: Node.js, Express, MongoDB, Mongoose
- Payment Gateway: Razorpay
- Authentication: JWT
- Other: bcrypt for password hashing
- Environment Variables for secure config

---

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance running (local or cloud)
- Razorpay account with API keys

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

2. Install backend dependencies:
   ```bash
   cd backend
   npm install

3. Install frontend dependencies:<br>
   ```bash
   cd ../frontend
   npm install
3. Create a .env file in the backend folder with:<br>
PORT=4000
MONGODB_URI=your_mongodb_connection_string<br>
JWT_SECRET=your_jwt_secret<br>
RAZORPAY_KEY_ID=your_razorpay_key_id<br>
RAZORPAY_KEY_SECRET=your_razorpay_key_secret<br>
CURRENCY=INR<br>
4. Running the app<br>
a. Start backend server:<br>
   ```bash
   cd backend
   npm run server
b. Start frontend app:<br>
   ```bash
   cd frontend
   npm run dev
```
💡 Usage
Register or login to your account

Purchase credits using the plans available

Enter a text prompt to generate images using your credits

View your credit balance and transaction history<br>
###👤 Author
Prajwal P B

Student @ Atria Institute of Technology, Bangalore

[GitHub](https://github.com/csprajwalpb) | [LinkedIn](https://www.linkedin.com/in/prajwalpb/)
<br>
###Snapshots<br>
