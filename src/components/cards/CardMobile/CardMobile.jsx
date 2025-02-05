import { DescricaoStyle, CardNovidadeStyle, TituloStyle, ImagemStyle, ConteudoStyle } from "./Style";

const CardMobile = ({ imgUrl, titulo, descricao, onClick }) => {
    return (
        <CardNovidadeStyle onClick={onClick}> {/* Adicionando clique ao card */}
            <ImagemStyle>
                <img src={imgUrl} alt={titulo} />
            </ImagemStyle>
            <ConteudoStyle>
                <TituloStyle>{titulo}</TituloStyle>
                <DescricaoStyle>{descricao}</DescricaoStyle>
            </ConteudoStyle>
        </CardNovidadeStyle>
    );
};

export default CardMobile;
