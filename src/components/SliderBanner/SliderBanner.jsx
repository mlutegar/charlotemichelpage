import {Swiper, SwiperSlide} from "swiper/react";
import slides from "../../data/banner.json";
import {Scrollbar, A11y} from "swiper/modules";
import {
    Arte1Desktop,
    Arte2Desktop,
    BarraFundo,
    Botao,
    ElementoFixo,
    ElementosFlutuantes,
    Limao,
    LimaoSegundo,
    SliderStyle
} from "./Style";
import 'swiper/css';
import {useEffect, useState} from "react";

const SliderBanner = () => {
    const [offset, setOffset] = useState({x: 0, y: 0});
    const [offsetLimaoT, setOffsetLimaoT] = useState({x: 0, y: 0});

    const handleMouseMove = (event) => {
        const {clientX, clientY} = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Movimento inverso ao mouse
        const moveX = (centerX - clientX) * 0.02; // Ajuste o fator para intensidade
        const moveY = (centerY - clientY) * 0.02;

        setOffset({x: moveX, y: moveY});
    };

    const resetPosition = () => {
        setOffset({x: 0, y: 0});
    };

    const handleMouseMoveLimaoT = (event) => {
        const {clientX, clientY} = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Movimento inverso ao mouse
        const moveX = (centerX - clientX) * 0.02; // Ajuste o fator para intensidade
        const moveY = (centerY - clientY) * 0.02;

        setOffsetLimaoT({x: moveX, y: moveY});
    };

    const resetPositionLimaoT = () => {
        setOffsetLimaoT({x: 0, y: 0});
    };

    const acessarLink = () => {
        window.location.href = "https://drive.google.com/file/d/1caQSJ4nhu7Gz7VfEUTWsWTtMj7tP4Wcd/view";
    }

    useEffect(() => {
        const handleScroll = () => {
            setOffset({x: window.scrollY * 0.08, y: 0});
            setOffsetLimaoT({x: window.scrollY * 0.08, y: 0});
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <SliderStyle>
            <Swiper
                modules={[Scrollbar, A11y]}
                slidesPerView={1}
                scrollbar={{draggable: true}}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide key={0}>
                    <img src="/imagens/banner/banner.jpg" alt={"Banner1"}/>
                </SwiperSlide>

                {/*<SwiperSlide key={1}>*/}
                {/*    <Arte1Desktop>*/}
                {/*        <ElementosFlutuantes>*/}
                {/*            <LimaoSegundo*/}
                {/*                onMouseMove={handleMouseMoveLimaoT}*/}
                {/*                onMouseLeave={resetPositionLimaoT}*/}
                {/*                style={{transform: `translate(${offsetLimaoT.x}px, ${offsetLimaoT.y}px)`}}*/}
                {/*            >*/}
                {/*                <img id={"limao2"} src="/imagens/banner/desktop/flutuantes/limao2.png" alt="Limão"/>*/}
                {/*            </LimaoSegundo>*/}
                {/*            <Limao*/}
                {/*                onMouseMove={handleMouseMove}*/}
                {/*                onMouseLeave={resetPosition}*/}
                {/*                style={{transform: `translate(${offset.x}px, ${offset.y}px)`}}*/}
                {/*            >*/}
                {/*                <img id={"limao1"} src="/imagens/banner/desktop/flutuantes/limao1.png" alt="Limão"/>*/}
                {/*            </Limao>*/}
                {/*        </ElementosFlutuantes>*/}
                {/*        <ElementoFixo>*/}
                {/*            <img src="/imagens/banner/desktop/fixo/banner1.png" alt={"Banner1"}/>*/}
                {/*        </ElementoFixo>*/}
                {/*        <BarraFundo>*/}
                {/*            <Botao>*/}
                {/*                <button>*/}
                {/*                    FAÇA SEU ORÇAMENTO*/}
                {/*                </button>*/}
                {/*            </Botao>*/}
                {/*        </BarraFundo>*/}
                {/*        <img className={"fundo"} src="/imagens/banner/desktop/background.png" alt={"Banner1"}/>*/}
                {/*    </Arte1Desktop>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide key={2}>*/}
                {/*    <Arte2Desktop>*/}
                {/*        <ElementosFlutuantes>*/}
                {/*            <LimaoSegundo*/}
                {/*                onMouseMove={handleMouseMoveLimaoT}*/}
                {/*                onMouseLeave={resetPositionLimaoT}*/}
                {/*                style={{transform: `translate(${offsetLimaoT.x}px, ${offsetLimaoT.y}px)`}}*/}
                {/*                pimenta={true}*/}
                {/*            >*/}
                {/*                <img id={"pimenta1"} src="/imagens/banner/desktop/flutuantes/pimenta1.png" alt="pimenta1"/>*/}
                {/*            </LimaoSegundo>*/}
                {/*            <Limao*/}
                {/*                onMouseMove={handleMouseMove}*/}
                {/*                onMouseLeave={resetPosition}*/}
                {/*                style={{transform: `translate(${offset.x}px, ${offset.y}px)`}}*/}
                {/*            >*/}
                {/*                <img id={"pimenta2"} src="/imagens/banner/desktop/flutuantes/pimenta2.png" alt="pimenta2"/>*/}
                {/*            </Limao>*/}
                {/*        </ElementosFlutuantes>*/}
                {/*        <ElementoFixo>*/}
                {/*            <img src="/imagens/banner/desktop/fixo/banner2.png" alt={"Banner2"}/>*/}
                {/*        </ElementoFixo>*/}
                {/*        <BarraFundo>*/}
                {/*            <Botao>*/}
                {/*                <button onClick={acessarLink}>*/}
                {/*                    ACESSAR*/}
                {/*                </button>*/}
                {/*            </Botao>*/}
                {/*        </BarraFundo>*/}
                {/*        <img className={"fundo2"} src="/imagens/banner/desktop/background2.png" alt={"Banner2"}/>*/}
                {/*    </Arte2Desktop>*/}
                {/*</SwiperSlide>*/}
            </Swiper>
        </SliderStyle>
    )
};

export default SliderBanner;


