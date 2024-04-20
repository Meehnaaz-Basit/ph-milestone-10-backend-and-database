import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Root from "./components/Root.jsx";
import Phones from "./components/Phones.jsx";
import SinglePhone from "./components/SinglePhone.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader: () => fetch("http://localhost:5000/phones/"),
      },
      {
        path: "/phones/:id",
        element: <SinglePhone></SinglePhone>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phones/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
