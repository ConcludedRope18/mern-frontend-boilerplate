import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/home";
import Financial from "./pages/financial/financial"
import Login from "./pages/login/login";
import Account from "./pages/account/account";
import AddBudgetForm from "./components/Forms/new_budget_form";
import AddCategoryForm from "./components/Forms/new_category_form";
import AddTransactionForm from "./components/Forms/new_transaction_form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About Frontend</div>,
  },
  {
    path: "financial",
    element: <Financial />,
  },
  {
    path: "settings",
    element: <div>Settings Page</div>,
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "account",
    element: <Account />
  },
  {
    path: "add-transaction",
    element: <AddTransactionForm />
  },
  {
    path: "add-budget",
    element: <AddBudgetForm />
  },
  {
    path: "add-category",
    element: <AddCategoryForm />
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
