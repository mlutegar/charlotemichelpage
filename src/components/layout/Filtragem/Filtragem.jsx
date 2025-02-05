// Filtragem.jsx
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import MenuButtom from "../../ui/MenuButtom/MenuButtom";
import {SvgFrio, SvgMicroondas, SvgNovidades, SvgPanela} from "../../Svgs/Svgs";
import {SearchBarStyle, BotaoPesquisarStyle, MenuStyle, ConteudoStyle} from "./Style";

const Filtragem = ({activeFilter, onFilterClick}) => (
    <MenuStyle>
        <ConteudoStyle>
            <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                freeMode={true}
                style={{paddingLeft: "1.25rem"}}
            >
                <SwiperSlide style={{width: "auto"}}>
                    <MenuButtom
                        active={activeFilter === "novidades"}
                        icon={<SvgNovidades active={activeFilter === "novidades"}/>}
                        title="novidades"
                        onClick={() => onFilterClick("novidades")}
                    />
                </SwiperSlide>
                <SwiperSlide style={{width: "auto"}}>
                    <MenuButtom
                        active={activeFilter === "fritura"}
                        icon={<SvgPanela active={activeFilter === "fritura"}/>}
                        title="linha fritura"
                        onClick={() => onFilterClick("fritura")}
                    />
                </SwiperSlide>
                <SwiperSlide style={{width: "auto"}}>
                    <MenuButtom
                        active={activeFilter === "forno"}
                        icon={<SvgMicroondas active={activeFilter === "forno"}/>}
                        title="linha forno"
                        onClick={() => onFilterClick("forno")}
                    />
                </SwiperSlide>
                <SwiperSlide style={{width: "auto"}}>
                    <MenuButtom
                        active={activeFilter === "frito-congelado"}
                        icon={<SvgFrio active={activeFilter === "frito-congelado"}/>}
                        title="linha frito congelado"
                        onClick={() => onFilterClick("frito-congelado")}
                    />
                </SwiperSlide>
                <SwiperSlide style={{opacity: "0", width: "1px"}}>
                    <MenuButtom
                        active={activeFilter === "frito-congelado"}
                        icon={<SvgFrio/>}
                        title="linha frito congelado"
                        onClick={() => onFilterClick("frito-congelado")}
                    />
                </SwiperSlide>
            </Swiper>

            <SearchBarStyle>
                <input type="text" placeholder="Pesquisar"/>
                <BotaoPesquisarStyle>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                    >
                        <path
                            d="M15.8447 15.8111L21.0422 21M18.0462 10.5C18.0462 14.6421 14.6929 18 10.5564 18C6.41994 18 3.06665 14.6421 3.06665 10.5C3.06665 6.35786 6.41994 3 10.5564 3C14.6929 3 18.0462 6.35786 18.0462 10.5Z"
                            stroke="#B0AEA7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </BotaoPesquisarStyle>
            </SearchBarStyle>
        </ConteudoStyle>
    </MenuStyle>
);

export default Filtragem;
