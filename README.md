# User Dashboard – React Frontend

A responsive User Dashboard built using React that fetches users from an API, allows searching, creating new users (client-side), and viewing detailed user information with routing.

## Deployed 
Live link:- (https://user-dashboard-detailed.netlify.app/)

## 📸 Screenshots
<img width="330" height="350" alt="Web_Dashboard" src="https://github.com/user-attachments/assets/ec924dae-39d7-4595-a0bc-aab2394fd188" />  <img width="330" height="350" alt="Web_UserForm" src="https://github.com/user-attachments/assets/41fbcc15-777f-4967-9089-c78e5b5bc433" />  <img width="330" height="350" alt="UserCardDetails" src="https://github.com/user-attachments/assets/f84e55c6-9001-4aaa-b32f-b7a90138fd49" />

<img width="233" height="485" alt="mobiledashboard" src="https://github.com/user-attachments/assets/1d5ba6f9-9237-4ce4-8996-d1a654b79f8c" />
<img width="235" height="490" alt="UserForm" src="https://github.com/user-attachments/assets/33f95a86-804d-44e9-9c3e-9d60ee81c049" />
<img width="233" height="500" alt="UserCardDetailsMobile" src="https://github.com/user-attachments/assets/cb14dea8-9c78-4fce-a900-a255e55a0208" />


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
