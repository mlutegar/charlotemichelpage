import React, {useState} from "react";
import dados from "../../../data/salgadinhos.json";
import {ContainerStyle, DotsStyle, NovidadesStyle, TituloStyle} from "./Style";
import CardMobile from "../../cards/CardMobile/CardMobile";
import ModalSalgadinho from "../../ui/ModalSalgadinho/ModalSalgadinho";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper/modules";

const Novidades = React.forwardRef((props, ref) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedSalgadinho, setSelectedSalgadinho] = useState(null);

    const abrirModal = (salgadinho) => {
        setSelectedSalgadinho(salgadinho);
        setModalOpen(true);
    };

    const fecharModal = () => {
        setModalOpen(false);
        setSelectedSalgadinho(null);
    };

    return (
        <section ref={ref} data-filter="novidades">
            <NovidadesStyle>
                <ContainerStyle>
                    <TituloStyle>
                        novidades
                    </TituloStyle>
                    <DotsStyle>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            centeredSlides={true}
                            loop={true}
                            pagination={{clickable: true}} // Pontos de navegação abaixo dos slides
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                    centeredSlides: true
                                },
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                    centeredSlides: true
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                    centeredSlides: true
                                },
                                768: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 15,
                                    centeredSlides: true
                                },
                                1024: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 40,
                                    centeredSlides: true
                                },
                                1441: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                    centeredSlides: true
                                },
                            }}
                        >
                            {dados
                                .filter((salgadinho) => salgadinho.novidade).map((salgadinho, index) => (
                                    <SwiperSlide key={index}>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <CardMobile
                                                imgUrl={salgadinho.urlfoto}
                                                titulo={salgadinho.nome}
                                                descricao={salgadinho.descricao}
                                                onClick={() => abrirModal(salgadinho)} // Adiciona clique no card
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </DotsStyle>

                    <ModalSalgadinho isOpen={modalOpen} onClose={fecharModal} salgadinho={selectedSalgadinho}/>
                </ContainerStyle>
            </NovidadesStyle>
        </section>
    );
});

export default Novidades;
