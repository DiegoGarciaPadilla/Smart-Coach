import { useEffect, useRef, useState } from "react";
import { Group, ActionIcon } from "@mantine/core";
import { IconEraser, IconTrash } from "@tabler/icons-react";
import "./mostrarVideo.css";

function MostrarVideo(props) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const [canvasCTX, setCanvasCTX] = useState(null);
  const [color, setColor] = useState("#000000");
  const [dibujar, setDibujar] = useState(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.85;
    canvas.height = window.innerHeight * 0.835;

    setCanvasCTX(ctx);
  }, [canvasRef]);
  const theme = getTheme();

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
  const SetPos = (e) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };

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

  const Erase = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

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
