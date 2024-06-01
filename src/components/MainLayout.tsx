import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Modal from "react-modal";
import { useContext } from "react";
import MobileNav from "./MobileNav/MobileNav";
import { ModalContext } from "../context/ModalContext/ModalContext";

const customStyles = {
  content: {
    top: "93px",
    left: "0",
    right: "0",
    height: "750px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#modal");

const MainLayout = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useModalContext must be used within a ModalProvider component"
    );
  }
  const { modalIsOpen, closeModal } = context;
  return (
    <>
      <Header />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Mobile menu"
      >
        <MobileNav />
      </Modal>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
