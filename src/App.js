import Header from "./header/header";
import "./App.css";
import Main from "./main/main";
import Footer from "./footer/footer";
import Modal from "./modal/modal";
import React, { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(false);
  const handleDivClick = (e) => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Header />
      <Main onClick={handleDivClick} />
      <Footer />
      {showModal && <Modal />}
    </>
  );
}

export default App;
