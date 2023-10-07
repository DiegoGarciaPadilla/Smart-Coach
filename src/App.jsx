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

export default function App() {
  const [credenciales, setcredenciales] = useState("");
  const [isadmin, setisadmin] = useState("");

  useEffect(() => {
    var valueFromLocalStorage = localStorage.getItem("credenciales");
    setcredenciales(valueFromLocalStorage);
    valueFromLocalStorage = localStorage.getItem("adminStatus");
    setisadmin(valueFromLocalStorage);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
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
        <Route element={<ProtectedRoute credenciales={credenciales} />}>
          <Route path="/home" element={<NavScreen />} />
          <Route path="/videos" element={<VideoList />} />
          <Route path="/generador-jugadas" element={<PlayGenerator />} />

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
