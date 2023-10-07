import { Link } from "react-router-dom";
import { MantineProvider, Text } from "@mantine/core";
import "./navigationScreen.css";

function NavScreen() {
  return (
    <div className="background-container">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Text className="Title">BIENVENIDO A SMART COACH</Text>

        <div className="navMenu">
          <div className="navLogos">
            <img
              src="Logos/Logo circular 2.png"
              alt="Logo Circular 2"
              className="navLogo"
            />
            <img
              src="Logos/logo texto1.png"
              alt="Logo texto 1"
              className="navLogo2"
            />
          </div>

          <div className="navOptions">
            <Text className="Title2" style={{ color: "white" }}>
              ELIJA LA OPCIÓN DESEADA DANDO CLICK EN EL RECUADRO
            </Text>
            {localStorage.getItem("adminStatus") === "1" ? (
              <Link to={"/admin"} className="Link">
                <div className="navOption">
                  <button className="navButton">
                    <img
                      src="/Logos/Logo circular 2.png"
                      alt="VideoScout"
                      className="buttonImage"
                    />
                  </button>
                  <span className="navText">ADMIN</span>
                </div>
              </Link>
            ) : (
              <></>
            )}
            <Link to="/scout" className="Link">
              <div className="navOption">
                <button className="navButton">
                  <img
                    src="/Logos/VideoScout/VIDEO SCOUT.png"
                    alt="VideoScout"
                    className="buttonImage"
                  />
                </button>
                <span className="navText">VIDEOS SCOUT</span>
              </div>
            </Link>
            <Link to="/steelers" className="Link">
              <div className="navOption">
                <button className="navButton">
                  <img
                    src="/Logos/VideoSteelers/VIDEO STEELERS.png"
                    alt="VideoSteelers"
                    className="buttonImage"
                  />
                </button>
                <span className="navText">VIDEOS STEELERS</span>
              </div>
            </Link>
            <Link to="/drills" className="Link">
              <div className="navOption">
                <button className="navButton">
                  <img
                    src="/Logos/drills/drills.png"
                    alt="drills"
                    className="buttonImage"
                  />
                </button>
                <span className="navText">DRILLS</span>
              </div>
            </Link>
            <Link to="/acondicionamiento" className="Link">
              <div className="navOption">
                <button className="navButton">
                  <img
                    src="/Logos/acond/acondicionamiento fisico.png"
                    alt="acondicionamientoFisico"
                    className="buttonImage"
                  />
                </button>
                <span className="navText">ACONDICIONAMIENTO FÍSICO</span>
              </div>
            </Link>
            <Link to="/playbook" className="Link">
              <div className="navOption">
                <button className="navButton">
                  <img
                    src="/Logos/playbook/playbook.png"
                    alt="playbook"
                    className="buttonImage"
                  />
                </button>
                <span className="navText">PLAYBOOK</span>
              </div>
            </Link>
            <Link to="/coaches" className="Link">
              <div className="navOption">
                <button className="navButton">
                  <img
                    src="/Logos/docCoaches/documentos Coaches.png"
                    alt="documentosCoaches"
                    className="buttonImage"
                  />
                </button>
                <span className="navText">DOCUMENTOS COACHES</span>
              </div>
            </Link>
            <Link to="/administracion" className="Link">
              <div className="navOption">
                <button className="navButton">
                  <img
                    src="/Logos/docAdmin/Documentos Administracion.png"
                    alt="documentosAdministracion"
                    className="buttonImage"
                  />
                </button>
                <span className="navText">DOCUMENTOS ADMINISTRACIÓN</span>
              </div>
            </Link>
            <Link to="/generador-jugadas" className="Link">
              <div className="navOption">
                <button className="navButton">
                  <img
                    src="/Logos/Generador de jugadas.png"
                    alt="GeneradorJugadas"
                    className="buttonImage"
                  />
                </button>
                <span className="navText">GENERADOR DE JUGADAS</span>
              </div>
            </Link>
            <Link to="/" className="Link">
              <div className="navOption">
                <button className="navButton">
                  <img
                    src="/Logos/logout.png"
                    alt="VideoScout"
                    className="buttonImage"
                    onClick={() => {
                      localStorage.removeItem("credenciales");
                      localStorage.removeItem("adminStatus");
                      window.location.reload();
                    }}
                  />
                </button>
                <span className="navText">CERRAR SESIÓN</span>
              </div>
            </Link>
          </div>
        </div>
      </MantineProvider>
    </div>
  );
}

export default NavScreen;
