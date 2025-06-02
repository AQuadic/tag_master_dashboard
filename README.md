# Project Setup

## Step 1: Create a New Project

To start a new project after cloning an empty repo, run the following command:

```sh
npm create vite@latest .

npm install

npm run dev
```

---

## Step 2: Project Structure

1. Create the `components` and `pages` folders inside the `src` directory:

```
project-root/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js
└── ...
```

2. Remove all content inside `App.jsx` and delete `App.css`. Also, remove the `import './App.css';` line from `App.jsx`.

3. Clear all CSS lines inside `index.css`, as we will be using Tailwind CSS.

---

## Step 3: Project Layout

### Installing React Router

To manage navigation between different pages, install the `react-router-dom` package:

```sh
npm install react-router-dom
```

---

### Setting Up Routing

Once installed, update the main `App.js` (or `App.tsx` if using TypeScript) file to include routing logic:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

### Explanation

1. **`BrowserRouter`**: Wraps the entire application, enabling routing capabilities.
2. **`Routes`**: Container for all route definitions.
3. **`Route path="/" element={<Layout />}`**: Defines the base route (`/`) that loads the `Layout` component.
4. **`Route index element={<HomePage />}`**: Ensures `HomePage` is the default child of `Layout` at the root path.

---

### Structuring the Layout Component

The `Layout` component acts as a wrapper for pages, containing shared UI elements like the header and footer.

```jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Providers from "./Providers";

const Layout = () => {
  return (
    <Providers>
      <Header />
      <Outlet />
      <Footer />
    </Providers>
  );
};

export default Layout;
```

#### Code Explanation

- **`Providers`**: Wrapper for global providers (Theme, Auth, Redux/Zustand providers).
- **`Header`**: A global navigation bar.
- **`Outlet`**: Dynamically injects pages based on the route.
- **`Footer`**: A common footer for all pages.

---

## Step 4: UI Using Tailwind and ShadCN

### Installing Tailwind CSS

To set up Tailwind CSS, install the required dependencies:

```sh
npm install tailwindcss @tailwindcss/vite
```

### Updating `index.css`

Add the following line to `src/index.css`:

```css
@import "tailwindcss";
```

### Updating `vite.config.js`

Modify your `vite.config.js` file to include Tailwind CSS:

```js
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Configuring Path Aliases

Create a `jsconfig.json` file in the root of the project and add the following configuration:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/_": ["src/_"]
    }
  }
}
```

### installing shadcn

run the following command

```sh
npx shadcn@latest init
```

---

### Summary

By structuring the project this way, we:
✅ Centralize layout components like the header and footer.
✅ Use `Outlet` to dynamically render pages.
✅ Improve maintainability and scalability of the application.
✅ Enhance UI styling with Tailwind CSS and ShadCN.

This setup provides a strong foundation for adding more routes and features as the project grows.
