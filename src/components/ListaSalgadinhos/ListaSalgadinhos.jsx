import React, { useState } from "react";
import { ListaSalgadinhosStyle, Titulo, Grid, Container } from "./Style";
import dados from "../../data/salgadinhos.json";
import CardDesktop from "../cards/CardDesktop/CardDesktop";
import ModalSalgadinho from "../ui/ModalSalgadinho/ModalSalgadinho";

const ListaSalgadinhos = ({ frituraRef, fornoRef, fritoCongeladoRef }) => {
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

    const getSalgadinhosByCategoria = (categoria) =>
        dados.filter((salgadinho) => salgadinho.categoria === categoria);

    return (
        <ListaSalgadinhosStyle>
            <Container>
                {/* Seção Linha Fritura */}
                <div ref={frituraRef} data-filter="fritura">
                    <Titulo>linha fritura</Titulo>
                    <Grid>
                        {getSalgadinhosByCategoria("fritura").map((salgadinho, index) => (
                            <CardDesktop
                                key={index}
                                imgUrl={salgadinho.urlfoto}
                                titulo={salgadinho.nome}
                                descricao={salgadinho.descricao}
                                onClick={() => abrirModal(salgadinho)}
                            />
                        ))}
                    </Grid>
                </div>

                {/* Seção Linha Forno */}
                <div ref={fornoRef} data-filter="forno">
                    <Titulo>linha forno</Titulo>
                    <Grid>
                        {getSalgadinhosByCategoria("forno").map((salgadinho, index) => (
                            <CardDesktop
                                key={index}
                                imgUrl={salgadinho.urlfoto}
                                titulo={salgadinho.nome}
                                descricao={salgadinho.descricao}
                                onClick={() => abrirModal(salgadinho)}
                            />
                        ))}
                    </Grid>
                </div>

                {/* Seção Linha Frito Congelado */}
                <div ref={fritoCongeladoRef} data-filter="frito-congelado">
                    <Titulo>linha frito congelado</Titulo>
                    <Grid>
                        {getSalgadinhosByCategoria("frito-congelado").map((salgadinho, index) => (
                            <CardDesktop
                                key={index}
                                imgUrl={salgadinho.urlfoto}
                                titulo={salgadinho.nome}
                                descricao={salgadinho.descricao}
                                onClick={() => abrirModal(salgadinho)}
                            />
                        ))}
                    </Grid>
                </div>

                {/* Modal */}
                <ModalSalgadinho
                    isOpen={modalOpen}
                    onClose={fecharModal}
                    salgadinho={selectedSalgadinho}
                />
            </Container>
        </ListaSalgadinhosStyle>
    );
};

export default ListaSalgadinhos;
