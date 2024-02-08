import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import PackageAddLayout from "./layout/PackageAddLayout";
import ApplicationManagement from "./pages/ApplicationManagement";
import Dashboard from "./pages/Dashboard";
import DocumentService from "./pages/DocumentService";
import Form from "./pages/Form";
import Login from "./pages/Login";
import BranchSetup from "./pages/menu-master/branchSetup";
import CityLocation from "./pages/menu-master/cityLocation";
import DistrictLocation from "./pages/menu-master/districtLocation";
import ZoneSetup from "./pages/menu-master/zoneSetup";
import AccommodationDetails from "./pages/package/add/AccommodationDetails";
import BasicDetail from "./pages/package/add/BasicDetail";
import Exclusions from "./pages/package/add/Exclusions";
import Inclusions from "./pages/package/add/Inclusions";
import Itinerary from "./pages/package/add/Itinerary";
import OtherDetails from "./pages/package/add/OtherDetails";
import TourPrice from "./pages/package/add/TourPrice";
import Register from "./pages/Register";
import ServiceManagement from "./pages/ServiceManagement";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/app" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="application" element={<ApplicationManagement />} />
          <Route path="document" element={<DocumentService />} />
          <Route path="form" element={<Form />} />
          <Route path="services" element={<ServiceManagement />} />
          <Route path="package/add" element={<PackageAddLayout />}>
            <Route index element={<BasicDetail />} />
            <Route path="basic-details" element={<BasicDetail />} />
            <Route path="itinerary" element={<Itinerary />} />
            <Route path="tour-price" element={<TourPrice />} />
            <Route
              path="accommodation-details"
              element={<AccommodationDetails />}
            />
            <Route path="inclusions" element={<Inclusions />} />
            <Route path="exclusions" element={<Exclusions />} />
            <Route path="other-details" element={<OtherDetails />} />
          </Route>
          <Route path="menu-master">
          <Route index element={<BasicDetail />} />
            <Route path="main-menu" element={<ZoneSetup />} />
            <Route path="menu-metadata" element={<BranchSetup />} />
            <Route path="menu-city" element={<CityLocation />} />
            <Route path="menu-district" element={<DistrictLocation />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
