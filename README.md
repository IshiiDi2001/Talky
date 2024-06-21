# Talky - Real-Time Chat Application

Talky is a robust and interactive real-time chat application built using the MERN stack (MongoDB, Express.js, React, and Node.js) along with Socket.IO for seamless bi-directional communication. This application allows users to engage in instant messaging with a responsive and user-friendly interface.

### Talky Live : https://talky-chat-app.onrender.com/

## Features

- **Real-Time Communication**: Leveraging Socket.IO, Talky provides instant messaging capabilities, ensuring messages are delivered and displayed in real-time.
 
- **User Authentication**: Secure user registration and login system implemented using JWT (JSON Web Tokens).
  
- **Password Hashing**: Secure password storage with bcryptjs.
  
- **Access Control**: `authMiddleware` ensures access control from unauthorized users.

- **Message History**: Persistent message history using MongoDB, allowing users to view past conversations.
  
- **Profile Pictures**: Automatically assigns gender-specific avatars using an API.
  
- **Emoji Keyboard**: Integrated emoji keyboard for a more expressive chat experience.
  
- **Notification Sound & Shaking New Message**: Audio notifications for new messages, with a shake effect for added attention.
  
- **Online Status**: Displays online status of users.
  
- **Styling**: Tailwind CSS with DaisyUI for a clean and modern interface.
  
- **State Management**: Zustand for efficient state management.

## Tech Stack

- **Frontend**: React.js, Zustand   
- **Backend**: Node.js, Express.js, Socket.IO 
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)JWT, bcryptjs
- **Styling**: Tailwind CSS, DaisyUI


