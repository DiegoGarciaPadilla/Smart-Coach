import { useEffect, useRef, useState } from "react"; // React modules
import { Group, ActionIcon } from "@mantine/core"; // Mantine components
import { IconEraser, IconTrash } from "@tabler/icons-react"; // Tabler icons
import "./mostrarVideo.css"; // CSS file

// Defining the MostrarVideo component
function MostrarVideo(props) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 }); // Defining mouse state variable
  const canvasRef = useRef(null); // Defining canvas reference
  const [canvasCTX, setCanvasCTX] = useState(null); // Defining canvas context
  const [color, setColor] = useState("#000000"); // Defining color state variable
  const [dibujar, setDibujar] = useState(2); // Defining dibujar state variable

  // Using useEffect hook to set canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.85;
    canvas.height = window.innerHeight * 0.835;
    setCanvasCTX(ctx);
  }, [canvasRef]);

  // Defining theme
  const theme = getTheme();

  // Defining getTheme function (returns theme based on equipo)
  function getTheme() {
    let theme;
    switch (props.equipo) {
      case "steelers":
        theme = "black";
        break;
      case "drills":
        theme = "white";
        break;
      case "acondicionamiento":
        theme = "red";
        break;
      default:
        theme = "yellow";
        break;
    }

    return theme;
  }

  // Defining SetPos function (sets mouse position)
  const SetPos = (e) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // Defining Draw function (draws on canvas)
  const Draw = (e) => {
    const canvas = canvasRef.current;
    let r = canvas.getBoundingClientRect();
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
    if (e.buttons !== 1) return;
    const ctx = canvasCTX;
    ctx.beginPath();
    ctx.moveTo(mouse.x - r.x, mouse.y - r.y);
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
    if (dibujar === 1) {
      ctx.lineTo(e.clientX - r.x, e.clientY - r.y);
      ctx.strokeStyle = color;
      ctx.lineWidth = 10;
    } else {
      ctx.clearRect(e.clientX - r.x, e.clientY - r.y, 20, 20);
    }
    // Set the line cap to round
    ctx.lineCap = "round";
    ctx.stroke();
  };

  // Defining Erase function (clears canvas)
  const Erase = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Returning JSX
  return (
    <div className={`list-view view--${theme}`}>
      <Group m={5}>
        <button
          onClick={(e) => {
            setColor("black");
            setDibujar(1);
          }}
          class="opciones"
        >
          <div
            class="color"
            style={{ backgroundColor: "black", color: "black" }}
          >
            n
          </div>
        </button>
        <button
          onClick={(e) => {
            setColor("red");
            setDibujar(1);
          }}
          class="opciones"
        >
          <div class="color" style={{ backgroundColor: "red", color: "red" }}>
            l
          </div>
        </button>
        <button
          onClick={(e) => {
            setColor("green");
            setDibujar(1);
          }}
          class="opciones"
        >
          <div
            class="color"
            style={{ backgroundColor: "green", color: "green" }}
          >
            n
          </div>
        </button>
        <button
          onClick={(e) => {
            setColor("blue");
            setDibujar(1);
          }}
          class="opciones"
        >
          <div class="color" style={{ backgroundColor: "blue", color: "blue" }}>
            n
          </div>
        </button>
        <button
          onClick={(e) => {
            setColor("yellow");
            setDibujar(1);
          }}
          class="opciones"
        >
          <div
            class="color"
            style={{ backgroundColor: "yellow", color: "yellow" }}
          >
            n
          </div>
        </button>
        {/* Eraser */}
        <ActionIcon
          color="red"
          radius="xl"
          size="xl"
          variant="filled"
          onClick={(e) => {
            setDibujar(2);
          }}
          style={{ marginBottom: 10, marginRight: "1vw" }}
        >
          <IconEraser />
        </ActionIcon>
        {/* Trash */}
        <ActionIcon
          color="red"
          radius="xl"
          size="xl"
          variant="filled"
          onClick={(e) => {
            Erase();
          }}
          style={{ marginBottom: 10 }}
        >
          <IconTrash />
        </ActionIcon>
      </Group>

      {/* Video */}
      <div class="cuerpo">
        {props.medio === "video" ? (
          <video
            controls
            width={"75%"}
            preload="auto"
            src={`https://smartcoach.top/back/datos${props.link}`}
          ></video>
        ) : (
          <img
            id="imagen"
            width={"75%"}
            alt={`${props.link}`}
            src={`https://smartcoach.top/back/datos${props.link}`}
          />
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          onMouseMove={(e) => Draw(e)}
          onMouseDown={(e) => SetPos(e)}
        ></canvas>
      </div>
    </div>
  );
}

export default MostrarVideo;
