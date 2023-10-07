import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  LoadingOverlay,
  Button,
  Popover,
  Group,
  Text,
  Dialog,
} from "@mantine/core";
import "./CategoryView.css";
import { IconUpload, IconX } from "@tabler/icons-react";
import { Dropzone, PDF_MIME_TYPE } from "@mantine/dropzone";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

function CategoryView({ viewData }, props) {
  const navigate = useNavigate();
  const location = useLocation();

  const title = viewData.title;
  const theme = viewData.theme;
  const buttonContent = getButtonContent(location.pathname);
  const columns = viewData.columns || 3;
  const items = viewData.items;

  //const stelscout = window.location.pathname.split("/").slice(-2)[0];
  const [opened, { toggle, close }] = useDisclosure(false);
  const [popoverOpened] = useState(() => {
    var obj = {};
    viewData.items.forEach((items) => {
      obj[items.category] = false;
    });

    return obj;
  });
  const [visible, handlers] = useDisclosure(false);
  const [file, setfile] = useState("");
  return (
    <>
      <div className={`view view--${theme}`}>
        <header className="view_header">
          <div className="container">
            <h3 className="header_title">{title}</h3>
            <button className="header_button" onClick={() => navigate(-1)}>
              <i className="fa fa-solid fa-arrow-left"></i>
              Volver a {buttonContent}
            </button>
          </div>
          <figure className="header_logo">
            <img src="/Logos/Logo circular1.png" alt="Logo Circular 1" />
            <img src="/Logos/logo texto1.png" alt="Logo texto 1" />
          </figure>
        </header>
        <section className={`subcategory-list cols--${columns}`}>
          {items.map((item) => (
            <div className="nav-item" key={item.category}>
              <div className="pdfcase">
                <div className="pdfview">
                  <Dropzone
                    onDrop={(files) => {
                      popoverOpened[item.category] = true;
                      setfile(files[0]);
                    }}
                    onReject={() => {
                      toggle();
                      setTimeout(() => {
                        close();
                      }, 1000);
                    }}
                    maxSize={3 * 1024 ** 2}
                    accept={PDF_MIME_TYPE}
                    {...props}
                  >
                    <Group position="center" spacing="xl" className="Grupo">
                      <Dropzone.Accept>
                        <IconUpload size="8rem" stroke={3} color="Green" />
                      </Dropzone.Accept>
                      <Dropzone.Reject>
                        <IconX size="8rem" stroke={3} color="red" />
                      </Dropzone.Reject>
                      <Dropzone.Idle>
                        {/* <IconFileTypePdf size="3.2rem" stroke={1.5} /> */}
                        <figure className="item_image">
                          <img
                            src={item.image.replace(
                              "___",
                              localStorage.getItem("equipo")
                            )}
                            alt={`category-${item.category}`}
                          />
                        </figure>
                      </Dropzone.Idle>
                    </Group>
                  </Dropzone>
                </div>
              </div>
              <Popover
                opened={popoverOpened[item.category]}
                width={250}
                position="bottom"
                withArrow
                shadow="md"
              >
                <Link
                  to={`https://back.smartcoach.top/readPDF.php?dir=public_html/back/datos/${localStorage.getItem(
                    "equipo"
                  )}/${viewData.title}&filename=${item.category}`}
                  download={`${item.category}.pdf`}
                >
                  <Popover.Target>
                    <Text className="pdfname item_category">
                      {item.category}
                    </Text>
                  </Popover.Target>
                </Link>

                <Popover.Dropdown>
                  <LoadingOverlay visible={visible} overlayBlur={2} />
                  <Text size="sm" style={{ padding: 10 }}>
                    Seguro que quieres remplazar el archivo {item.category} con{" "}
                    {file.name}
                  </Text>
                  <span></span>
                  <Group position="right" spacing="xs" grow>
                    <Button
                      color="green"
                      size="sm"
                      onClick={() => {
                        handlers.open();

                        var formdata = new FormData();
                        formdata.append("File", file);

                        var requestOptions = {
                          method: "POST",
                          body: formdata,
                          redirect: "follow",
                        };
                        var equipo = localStorage.getItem("equipo");

                        fetch(
                          `https://back.smartcoach.top/uploadPDF.php?dir=datos/${equipo}/${viewData.title}&filename=${item.category}`,
                          requestOptions
                        )
                          .then((response) => {
                            popoverOpened[item.category] = false;
                            setfile("");
                            handlers.close();
                            return response.text();
                          })
                          .then((result) => console.log(result))
                          .catch((error) => console.log("error", error));

                        /*  var formdata = new FormData();
                        formdata.append("File", file, file.name);
                        var requestOptions = {
                          method: "POST",
                          body: formdata,
                          redirect: "follow",
                        };

                        fetch(
                          `http://back.smartcoach.top/uploadPDF.php?dir=public_html/back/datos/${localStorage.getItem(
                            "equipo"
                          )}/${viewData.title}&filename=${item.category}`,
                          requestOptions
                        )
                          .then((response) => {
                            popoverOpened[item.category] = false;
                            setfile("");
                            handlers.close();
                            return response.text();
                          })
                          .then((result) => console.log(result))
                          .catch((error) => console.log("error", error)); */
                      }}
                    >
                      enviar
                    </Button>
                    <Button
                      color="red"
                      size="sm"
                      onClick={() => {
                        popoverOpened[item.category] = false;
                        setfile("");
                      }}
                    >
                      cancelar
                    </Button>
                  </Group>
                </Popover.Dropdown>
              </Popover>
            </div>
          ))}
        </section>
      </div>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size="lg"
        radius="md"
      >
        <Text size="sm" mb="xs" weight={500}>
          No se pudo cargar el archivo
        </Text>
      </Dialog>
    </>
  );
}

function getButtonContent(url) {
  const path = url.substring(1).split("/");
  const prevPageIdx = path.length - 2; // Retrieve the category of the second to last element of url
  if (prevPageIdx >= 0) {
    return path[prevPageIdx];
  }
  return "menu";
}

export default CategoryView;
