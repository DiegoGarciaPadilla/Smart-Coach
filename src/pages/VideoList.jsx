import { useEffect, useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal, ActionIcon } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { IconX } from "@tabler/icons-react";
import MostrarVideo from "./mostrarVideo";
import "./VideoList.css";
import "./CategoryView.css";

function VideoList() {
  const [able, setAble] = useState(false);
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();

  const equipo = searchParams.get("equipo");
  const categoria = searchParams.get("categoria");
  const tipo = searchParams.get("tipo");
  const team = localStorage.getItem("equipo");
  const dir = tipo ? "/" + tipo : "";
  const navigate = useNavigate();

  const theme = getTheme();

  function getTheme() {
    let theme;
    switch (equipo) {
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

  const fetchVideos = useCallback(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://back.smartcoach.top/getList.php?dir=/${team}/${equipo}/${categoria}${dir}/`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        setVideos(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }, [team, equipo, categoria, dir]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const [opened, { open, close }] = useDisclosure(false);
  const [link, setLink] = useState({ name: "", link: "" });
  const [isVideo, setIsVideo] = useState("video");
  return (
    <div className={`list-view view--${theme}`}>
      <Modal
        color="red"
        opened={opened}
        fullScreen
        onClose={close}
        title={link.name}
      >
        <MostrarVideo link={link.link} equipo={equipo} medio={isVideo} />
      </Modal>
      <header className="view_header">
        <div className="container">
          <h3 className="header_title">Videos</h3>
          <button className="header_button" onClick={() => navigate(-1)}>
            <i className="fa fa-solid fa-arrow-left"></i>
            Volver
          </button>
        </div>
        <figure className="header_logo">
          <img
            src="/Logos/Logo circular1.png"
            alt="Logo Circular 1"
            className="Logo"
          />
          <img
            src="/Logos/logo texto1.png"
            alt="Logo texto 1"
            className="Logo"
          />
        </figure>
      </header>
      <div className="video-list">
        {videos.map((video) => (
          <div className="video nav-item" key={video.id}>
            <ActionIcon
              color="red"
              radius="xl"
              variant="filled"
              style={{ marginBottom: -12, margin: -12 }}
              onClick={() => {
                var requestOptions = {
                  method: "GET",
                  redirect: "follow",
                };

                fetch(
                  `https://back.smartcoach.top/delFile.php?dir=/${team}/${equipo}/${categoria}${dir}/&filename=${video.name}`,
                  requestOptions
                )
                  .then((response) => response.text())
                  .then((result) => console.log(result))
                  .catch((error) => console.log("error", error));
                fetchVideos();
              }}
            >
              <IconX />
            </ActionIcon>

            <div
              onClick={() => {
                var team = localStorage.getItem("equipo");
                var dir = tipo ? "/" + tipo : "";
                const images = ["jpg", "gif", "png"];

                const url = new URL("https://smartcoach.top/" + video.name);
                const extension = url.pathname.split(".")[1];
                setIsVideo("video");
                if (images.includes(extension)) {
                  setIsVideo("image");
                }
                setLink({
                  name: video.name,
                  link: `/${team}/${equipo}/${categoria}/${dir}/${video.name}`,
                });
                open();
              }}
            >
              <img
                className="video_thumbnail"
                src={video.link}
                alt={video.name}
              />
              <div className="item_category">{video.name}</div>
            </div>
          </div>
        ))}
      </div>
      <Dropzone
        loading={able}
        onDrop={(files) => {
          //start
          setAble(true);
          var file = files[0];
          // is image
          if (files[0].type.includes("image/")) {
            var reader = new FileReader();
            reader.onloadend = function () {
              var formdata = new FormData();
              formdata.append("File", files[0]);
              formdata.append("Image", reader.result);

              var requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow",
              };

              fetch(
                `https://back.smartcoach.top/prueba.php?dir=${team}/${equipo}/${categoria}${dir}`,
                requestOptions
              )
                .then((response) => {
                  fetchVideos();
                  response.text();
                  setAble(false);
                })
                .then((result) => console.log(result))
                .catch((error) => console.log("error", error));
            };
            reader.readAsDataURL(file);

            return;
          }

          //is not video
          if (!files[0].type.includes("video/")) {
            setAble(false);
            return;
          }

          //isvideo
          var url = URL.createObjectURL(file);

          var video = document.createElement("video");
          video.src = url;
          video.currentTime = 3;

          var snapshot = function () {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            video.removeEventListener("canplay", snapshot);
            var formdata = new FormData();
            formdata.append("File", files[0]);
            formdata.append("Image", canvas.toDataURL("image/jpg"));

            var requestOptions = {
              method: "POST",
              body: formdata,
              redirect: "follow",
            };

            fetch(
              `https://back.smartcoach.top/prueba.php?dir=${team}/${equipo}/${categoria}${dir}`,
              requestOptions
            )
              .then((response) => {
                setAble(false);
                fetchVideos();

                return response.text();
              })
              .then((result) => console.log(result))
              .catch((error) => {
                setAble(false);
                console.log("error", error);
              });
          };

          video.addEventListener("canplay", snapshot);
        }}
        style={{
          backgroundColor: "transparent",
          border: 0,
        }}
      >
        <Dropzone.Idle>
          <div className="drag-drop">
            Arrastra un video a esta zona para añadirlo a la lista.
          </div>
        </Dropzone.Idle>
        <Dropzone.Accept>
          <div className="drag-drop">Agregar archivo.</div>
        </Dropzone.Accept>
        <Dropzone.Reject>
          <div className="drag-drop">Archivo no compatible</div>
        </Dropzone.Reject>
      </Dropzone>
    </div>
  );
}
//<MostrarVideo />

export default VideoList;
