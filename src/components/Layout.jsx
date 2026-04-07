import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PolicyIcon from "@mui/icons-material/Policy";
import CategoryIcon from "@mui/icons-material/Category";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const NAVIGATION = [
  {
    segment: "",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "organization",
    title: "Organizations",
    icon: <ApartmentIcon />,
  },
  {
    segment: "products",
    title: "Products",
    icon: <CategoryIcon />,
  },
  {
    segment: "rules-and-policies",
    title: "Rules & Policies",
    icon: <PolicyIcon />,
  },
  {
    segment: "compliance-engine",
    title: "Compliance Engine",
    icon: <EngineeringIcon />,
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <AssessmentIcon />,
  },
  {
    kind: "divider",
  },
  {
    segment: "signup",
    title: "Register",
    icon: <LoginIcon />,
  },
];
function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const router = {
    pathname: location.pathname,
    navigate: (path) => navigate(path),
  };
  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      branding={{
        title: "Compliance Analysis",
        logo: <></>,
      }}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}

export default Layout;
