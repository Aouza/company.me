import React from "react";

import { Container } from "./styles";

const Modal = ({ children, modalActive }) => {
  return <Container modalActive={modalActive}>{children}</Container>;
};

export default Modal;
