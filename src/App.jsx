import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Oraganizations from "./pages/Oraganizations";
import Product from "./pages/Product";
import RuleAndPolicies from "./pages/RuleAndPolicies";
import ComplianceEngine from "./pages/ComplianceEngine";
import Reports from "./pages/Reports";
import Signup from "./pages/auth/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/organization",
          element: <Oraganizations />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/rules-and-policies",
          element: <RuleAndPolicies />,
        },
        {
          path: "/compliance-engine",
          element: <ComplianceEngine />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
