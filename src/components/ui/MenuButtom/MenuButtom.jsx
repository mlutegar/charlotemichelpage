import React from "react";
import { MenuButtomStyle, Icone, Texto } from "./Style";

const MenuButtom = ({ icon, title, active, onClick }) => {
    return (
        <div onClick={onClick}>
        <MenuButtomStyle active={active}>
            <Icone active={active}>{icon}</Icone>
            <Texto active={active}>{title}</Texto>
        </MenuButtomStyle>
        </div>
    );
};

export default MenuButtom;
