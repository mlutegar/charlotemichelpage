// src/componente/Style.js
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const WhatsAppIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export default {
    ButtonContainer,
    WhatsAppIcon
};
