# User Dashboard – React Frontend

A responsive User Dashboard built using React that fetches users from an API, allows searching, creating new users (client-side), and viewing detailed user information with routing.

## Features
- Fetch users from public API
- Display users in responsive card layout
- Search users by name
- Create new user using modal form (client-side)
- Click user to view full details (address & geo-location)
- Mobile-friendly UI

## API Used
https://jsonplaceholder.typicode.com/users

## Tech Stack
- React (Functional Components & Hooks)
- React Router DOM
- Tailwind CSS
- Fetch API

## Pages
- **Dashboard**: User list, search, create user
- **User Details**: Full user information with address & geo data

## Folder Structure
```
USER_DASHBOARD_ASSIGNMENT/
├── dist/                    
├── node_modules/            
├── public/
├── src/
│   ├── components/          
│   │   ├── CreateUserForm.jsx
│   │   └── UserCard.jsx
│   ├── pages/               
│   │   ├── Dashboard.jsx
│   │   └── UserCardDetails.jsx
│   ├── App.jsx             
│   ├── index.css           
│   └── main.jsx             
├── .gitignore               
├── eslint.config.js         
├── package-lock.json        
├── package.json             
├── postcss.config.js        
├── README.md                
├── tailwind.config.js       
└── vite.config.js           

```

## Setup Instructions
```bash
npm install
npm run dev
