import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Brands from "./Components/Brands/Brands";
import ForYou from "./Components/ForYou/ForYou";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Notfound from "./Components/Notfound/Notfound";
import BrandDetails from "./Components/BrandDetails/BrandDetails";
import InsuranceCompany from "./Components/InsuranceCompany/InsuranceCompany";
import InsuranceDetails from "./Components/InsuranceDetails/InsuranceDetails";
import UsedCars from "./Components/UsedCars/UsedCars";
import NewCars from "./Components/NewCars/NewCars";
import MaintenanceCompanies from "./Components/MaintenanceCompanies/MaintenanceCompanies";
import Recomended from "./Components/Recomended/Recomended";
import Download from "./Components/Download/Download";
import MaintanceDetails from "./Components/MaintanceDetails/MaintanceDetails";
import RescueCompany from "./Components/RescueCompany/RescueCompany";
import RescueDetails from "./Components/RescueDetails/RescueDetails";
import CarSearch from "./Components/CarSearch/CarSearch";
import Blog from "./Components/Blog/Blog";
import Fav from "./Components/FavPage/Fav";
import CarDetails from "./Components/CarDetails/CarDetails"; 
import ShowRoom from "./Components/ShowRoom/ShowRoom";
import TargetedShowRoom from "./Components/TargetedShowRom/TargertedDealer";
import SignUp from './Components/SignUp/SignUp'
import SignIn from './Components/SignIn/SignIn'
import Profile from './Components/Profile/Profile'
import Selling from './Components/Selling/Selling'


let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <SignIn /> },
      {
        path: "brands",
        element: <Brands />,
        children: [{ path: "branddetails/:name", element: <BrandDetails /> }],
      },
      { path: "branddetails/:name", element: <BrandDetails /> },
      { path: "foryou", element: <ForYou /> },
      { path: "recomend", element: <Recomended /> },
      { path: "download", element: <Download /> },
      { path: "about", element: <About /> },
      { path: "usedcars", element: <UsedCars /> },
      { path: "newcars", element: <NewCars /> },
      { path: "maintancedetails/:id", element: <MaintanceDetails /> },
      { path: "insurancedetails/:id", element: <InsuranceDetails /> },
      { path: "rescuedetails/:id", element: <RescueDetails /> },
      { path: "/carsearch", element: <CarSearch /> },
      { path: "/favorite", element: <Fav /> },
      { path: "/car-details/:status/:carId", element: <CarDetails /> }, 
      { path: "showroom", element: <ShowRoom /> }, 
      { path: "/dealershipdetails/:id", element: <TargetedShowRoom /> }, 
      { path: "/SignUp", element: <SignUp /> },
      { path: "/SignIn", element: <SignIn /> },
      { path: "/Profile", element: <Profile /> },
      { path: "/Selling", element: <Selling /> },
      { path: "/Home", element: <Home /> },

      {
        path: "services",
        element: <Services />,
        children: [
          { path: "usedcars", element: <UsedCars /> },
          { path: "newcars", element: <NewCars /> },
          { path: "insurancecompany", element: <InsuranceCompany /> },
          { path: "maintenancecompanies", element: <MaintenanceCompanies /> },
          { path: "rescuecompany", element: <RescueCompany /> },
        ],
      },
      {
        path: "maintenancecompanies",
        element: <MaintenanceCompanies />,
        children: [
          { path: "maintancedetails/:id", element: <MaintanceDetails /> },
        ],
      },
      {
        path: "insurancecompany",
        element: <InsuranceCompany />,
        children: [
          { path: "insurancedetails/:id", element: <InsuranceDetails /> },
        ],
      },
      {
        path: "rescuecompany",
        element: <RescueCompany />,
        children: [{ path: "rescuedetails/:id", element: <RescueDetails /> }],
      },

      { path: "blog", element: <Blog /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={x} />;
}

export default App;
