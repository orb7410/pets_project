import Home from "./components/Home";
import Pets from "./components/Pets";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/pets',
    element: <Pets />
  }
];

export default AppRoutes;
