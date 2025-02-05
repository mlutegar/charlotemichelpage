import React from "react";
import styles from "./Style";
import {SvgWhatsapp} from "../Svgs/Svgs";

const WhatsAppButton = () => {
    const phoneNumber = "5521995719914"; // Substitua pelo seu número de WhatsApp no formato internacional

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };

    return (
        <styles.ButtonContainer onClick={handleClick}>
            <SvgWhatsapp/>
        </styles.ButtonContainer>
    );
};

export default WhatsAppButton;
