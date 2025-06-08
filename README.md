# Next.js Project Setup and Basics

This project is a modular, component-driven application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It demonstrates best practices in building dynamic pages using reusable components, data fetching with `getStaticProps`, and clean UI structure.

## 📦 Features

- ✅ Reusable components (`Button`, `Modal`, `PostCard`, `UserCard`)
- ✅ Page-based routing (`/home`, `/about`, `/posts`, `/users`)
- ✅ Static site generation with `getStaticProps`
- ✅ API integration with JSONPlaceholder
- ✅ TypeScript interfaces for props validation
- ✅ Responsive design using Tailwind CSS

---

## 🧱 Project Structure

```

.
├── components
│   ├── common
│   │   ├── Button.tsx
│   │   ├── PostCard.tsx
│   │   ├── UserCard.tsx
│   │   └── PostModal.tsx
│   └── layout
│       └── Header.tsx
├── interfaces
│   └── index.ts
├── pages
│   ├── home.tsx
│   ├── about.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public
├── styles
│   └── globals.css
└── ...

````

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Navigate to `http://localhost:3000` to see the app in action.

---

## 🧪 Available Scripts

* `npm run dev` — Starts the development server
* `npm run build` — Builds the production app
* `npm start` — Starts the production server

---

## 🌐 Pages Overview

* `/home` — Displays content added from the PostModal
* `/about` — Demonstrates the reusable `Button` component with different styles
* `/posts` — Fetches and displays posts using `PostCard`
* `/users` — Fetches and displays users using `UserCard`

---

## 🧩 Component Props

### `ButtonProps`

```ts
interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
}
```

### `PostProps`

```ts
interface PostProps {
  title: string;
  content: string;
  userId: number;
}
```

### `UserProps`

```ts
interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}
```

---

## 👨‍💻 Contributing

1. Fork the project
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request






