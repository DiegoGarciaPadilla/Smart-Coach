import { Link } from "react-router-dom";
import { Container, SimpleGrid, Button, Modal } from "@mantine/core";
import Cuenta from "./Card";
import addw from "./../../Assets/add_yellow.svg";
import { useHover } from "@mantine/hooks";
import { useDisclosure } from "@mantine/hooks";
//import addFTP from "./addFTP";

function Admin() {
  const { hovered, ref } = useHover();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal size="xl" opened={opened} onClose={close} title="Authentication">
        <Button>aads</Button>
      </Modal>
      <Container size="90rem" p="xl" id="AdminBG" style={{ color: "#2e3092" }}>
        <Link to="/home">
          <button>BACK</button>
        </Link>
        <h1>Documentación Administrativa</h1>
        <SimpleGrid
          aligment="Center"
          cols={3}
          breakpoints={[
            { maxWidth: "79rem", cols: 2, spacing: "sm" },
            { maxWidth: "53rem", cols: 1, spacing: "sm" },
          ]}
        >
          <Cuenta />
          <Cuenta />
          <Cuenta />
          <div
            style={{
              maxWidth: "25.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={open}
              ref={ref}
              size="xl"
              variant="filled"
              m={20}
              style={{ backgroundColor: "#2e3092", opacity: hovered ? 0.9 : 1 }}
            >
              <img
                src={addw}
                alt="Agregar"
                style={{
                  width: "2rem",
                  padding: ".1rem",
                }}
              />
            </Button>
          </div>
        </SimpleGrid>
      </Container>
      <addFTP open={opened} close={close} />
    </>
  );
}

export default Admin;
