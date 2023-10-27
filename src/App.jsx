// Importing necessary components and modules
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavScreen from "./pages/navigationScreen";
import "./App.css";
import Login from "./Login";
import CategoryView from "./pages/CategoryView";
import navigation from "./data/navigation.json";
import VideoList from "./pages/VideoList";
import DocumentViews from "./pages/DocumentViews";
import Admin from "./pages/PanelAdmin/admin";
import PlayGenerator from "./pages/PlayGenerator";
import ProtectedRoute from "./pages/rerouting/protectedRoute";
import ProtectedLogin from "./pages/rerouting/protectedlogin";
import ProtectedAdmin from "./pages/rerouting/protectedAdmin";

// Exporting the main component of the application
export default function App() {
  // Defining state variables
  const [credenciales, setcredenciales] = useState("");
  const [isadmin, setisadmin] = useState("");

  // Using useEffect hook to retrieve data from local storage
  useEffect(() => {
    var valueFromLocalStorage = localStorage.getItem("credenciales");
    setcredenciales(valueFromLocalStorage);
    valueFromLocalStorage = localStorage.getItem("adminStatus");
    setisadmin(valueFromLocalStorage);
  }, []);

  // Rendering the application
  return (
    <BrowserRouter>
      <Routes>
        {/* Defining routes for login and admin pages */}
        <Route element={<ProtectedLogin credenciales={credenciales} />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route
          element={
            <ProtectedAdmin credenciales={credenciales} admin={isadmin} />
          }
        >
          <Route path="/admin" element={<Admin />} />
        </Route>

        {/* Defining protected routes for the rest of the application */}
        <Route element={<ProtectedRoute credenciales={credenciales} />}>
          <Route path="/home" element={<NavScreen />} />
          <Route path="/videos" element={<VideoList />} />
          <Route path="/generador-jugadas" element={<PlayGenerator />} />

          {/* Defining nested routes for different categories */}
          <Route path="scout">
            <Route
              index
              element={<CategoryView viewData={navigation.scout} />}
            />
            <Route
              path="ofensa"
              element={<CategoryView viewData={navigation.ofensa} />}
            />
            <Route
              path="defensa"
              element={<CategoryView viewData={navigation.defensa} />}
            />
            <Route
              path="especiales"
              element={<CategoryView viewData={navigation.especiales} />}
            />
          </Route>

          <Route path="steelers">
            <Route
              index
              element={<CategoryView viewData={navigation.steelers} />}
            />
            <Route
              path="ofensa"
              element={<CategoryView viewData={navigation.ofensa} />}
            />
            <Route
              path="defensa"
              element={<CategoryView viewData={navigation.defensa} />}
            />
            <Route
              path="especiales"
              element={<CategoryView viewData={navigation.especiales} />}
            />
          </Route>

          <Route path="drills">
            <Route
              index
              element={<CategoryView viewData={navigation.drills} />}
            />
          </Route>

          <Route path="acondicionamiento">
            <Route
              index
              element={<CategoryView viewData={navigation.acondicionamiento} />}
            />
            <Route
              path="ligas"
              element={<CategoryView viewData={navigation.ligas} />}
            />
            <Route
              path="gym"
              element={<CategoryView viewData={navigation.gym} />}
            />
          </Route>

          <Route path="playbook">
            <Route
              index
              element={<DocumentViews viewData={navigation.playbook} />}
            />
          </Route>

          <Route path="coaches">
            <Route
              index
              element={<DocumentViews viewData={navigation.coaches} />}
            />
          </Route>

          <Route path="administracion">
            <Route
              index
              element={<DocumentViews viewData={navigation.administracion} />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
