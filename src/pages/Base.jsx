import React from "react";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import styled from "styled-components";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

const Container = styled.div`
    margin: 0 auto; /* Centraliza a página */
    max-width: 100%; /* Garante que não ultrapasse telas menores */
`;

const Base = (props) => (
    <>
        <Header />
        <Container>{props.children}</Container>
        <Footer />
        <WhatsAppButton/>
    </>
);

export default Base;
