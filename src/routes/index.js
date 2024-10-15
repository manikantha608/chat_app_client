import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import AuthLayouts from "../layout";
import Forgotpassword from "../pages/Forgotpassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Set the default route to redirect to the email page
      {
        path: "/",
        element: <Navigate to="/email" />,  // Redirect to email page on landing
      },
      {
        path: "email",
        element: <CheckEmailPage />
      },
      {
        path: "password",
        element: <CheckPasswordPage />
      },
      {
        path: "forgot-password",
        element: <Forgotpassword />
      },
      {
        path: "register",
        element:<RegisterPage />
      },
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: ":userId",
            element: <MessagePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
