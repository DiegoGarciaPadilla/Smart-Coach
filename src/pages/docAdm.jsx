import { Link } from "react-router-dom"; // React routing module
import { Group, Text, useMantineTheme } from "@mantine/core"; // Mantine components
import { IconUpload, IconFileTypePdf, IconX } from "@tabler/icons-react"; // Tabler icons
import { Dropzone, DropzoneProps, PDF_MIME_TYPE } from "@mantine/dropzone"; // Mantine dropzone component

import "./docAdm.css";  // CSS file

// Defining the DocCoach component
export function DocCoach(props) {
  const theme = useMantineTheme({
    primaryColor: "blue",
    colorScheme: "dark",
    colors: {
      blue: ["#007bff", "#0056b3", "#0089ff"],
      orange: ["#ff9800", "#d77a00", "#ffae33"],
    },
  });
  return (
    <div className="docCoach">
      <Link to="/">
        <button className="backbutton">Volver al Menú</button>
      </Link>
      <img src="logo texto1.png" alt="Mantine logo" className="imgright2" />
      <img src="Logo circular 2.png" alt="Mantine logo" className="imgright1" />
      <h1 className="title">Documentos Administración</h1>
      <div className="pdfcase-container">
        <div className="pdfcase">
          <div className="pdfview">
            <Dropzone
              onDrop={(files) => console.log("accepted files", files)}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={3 * 1024 ** 2}
              accept={PDF_MIME_TYPE}
              {...props}
            >
              <Group position="center" spacing="xl" className="Grupo">
                <Dropzone.Accept>
                  <IconUpload
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors[theme.primaryColor][
                        theme.colorScheme === "dark" ? 4 : 6
                      ]
                    }
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
                    }
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconFileTypePdf size="3.2rem" stroke={1.5} />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Inserta el reglamento
                  </Text>
                </div>
              </Group>
            </Dropzone>
          </div>
          <Link to="/ReglamentosCoaches/pdf">
            <Text className="pdfname">Reglamentos Padres</Text>
          </Link>
        </div>
        <div className="pdfcase">
          <div className="pdfview">
            <Dropzone
              onDrop={(files) => console.log("accepted files", files)}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={3 * 1024 ** 2}
              accept={PDF_MIME_TYPE}
              {...props}
            >
              <Group position="center" spacing="xl" className="Grupo">
                <Dropzone.Accept>
                  <IconUpload
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors[theme.primaryColor][
                        theme.colorScheme === "dark" ? 4 : 6
                      ]
                    }
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
                    }
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconFileTypePdf size="3.2rem" stroke={1.5} />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Inserta el formato
                  </Text>
                </div>
              </Group>
            </Dropzone>
          </div>
          <Link to="/FormatosCoaches/pdf">
            <Text className="pdfname">Formatos Inscripción</Text>
          </Link>
        </div>
        <div className="pdfcase">
          <div className="pdfview">
            <Dropzone
              onDrop={(files) => console.log("accepted files", files)}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={3 * 1024 ** 2}
              accept={PDF_MIME_TYPE}
              {...props}
            >
              <Group position="center" spacing="xl" className="Grupo">
                <Dropzone.Accept>
                  <IconUpload
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors[theme.primaryColor][
                        theme.colorScheme === "dark" ? 4 : 6
                      ]
                    }
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
                    }
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconFileTypePdf size="3.2rem" stroke={1.5} />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Inserta el reglamento
                  </Text>
                </div>
              </Group>
            </Dropzone>
          </div>
          <Link to="/ONEFA/pdf">
            <Text className="pdfname">Reglamento Managers</Text>
          </Link>
        </div>
        <div className="pdfcase">
          <div className="pdfview">
            <Dropzone
              onDrop={(files) => console.log("accepted files", files)}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={3 * 1024 ** 2}
              accept={PDF_MIME_TYPE}
              {...props}
            >
              <Group position="center" spacing="xl" className="Grupo">
                <Dropzone.Accept>
                  <IconUpload
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors[theme.primaryColor][
                        theme.colorScheme === "dark" ? 4 : 6
                      ]
                    }
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
                    }
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconFileTypePdf size="3.2rem" stroke={1.5} />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Inserta el reglamento
                  </Text>
                </div>
              </Group>
            </Dropzone>
          </div>
          <Link to="/OFANO/pdf">
            <Text className="pdfname">Reglamento Jugadores</Text>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DocCoach;
