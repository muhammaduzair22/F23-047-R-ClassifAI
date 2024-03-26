import logo from './logo.svg';
import './App.css';
import Login from "./customer/screen/Login"
import Signup from './customer/screen/Signup';
import Home from './customer/screen/Home';
import Dashboard from './customer/screen/Dashboard';
import Subscription from './customer/components/Subscription';
import Pricing from './customer/components/Pricing'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./useScroll.css";
import { motion, useScroll, useSpring } from "framer-motion"
import FileUploadComponent from './customer/screen/FileUploadComponent';

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login></Login>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/Home",
      element: <Home></Home>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/Signup",
      element: <Signup></Signup>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/Dashboard",
      element: <Dashboard></Dashboard>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/Subscription",
      element: <Subscription></Subscription>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/Pricing",
      element: <Pricing></Pricing>,
      errorElement: <h1>Error</h1>,
    }, {
      path: "/test",
      element: <FileUploadComponent />,
      errorElement: <h1>Error</h1>,
    },
  ]);

  return (
    <div className="App">
      <motion.div className="progress-bar" style={{ scaleX }}> </motion.div>
      <RouterProvider router={router} forceRefresh={true} />
    </div>
  );
}

export default App;