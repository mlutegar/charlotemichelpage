// Home.jsx
import React, { useRef, useState, useEffect } from "react";
import Base from "./Base";
import Banner from "../components/layout/Banner/Banner";
import Filtragem from "../components/layout/Filtragem/Filtragem";
import Novidades from "../components/layout/Novidades/Novidades";
import ListaSalgadinhos from "../components/ListaSalgadinhos/ListaSalgadinhos";

const Home = () => {
    // Cria refs para cada seção
    const novidadesRef = useRef(null);
    const frituraRef = useRef(null);
    const fornoRef = useRef(null);
    const fritoCongeladoRef = useRef(null);

    // Estado que guarda o filtro ativo (valor inicial "novidades")
    const [activeFilter, setActiveFilter] = useState("novidades");

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6, // Ajuste esse valor para determinar quando a seção está "ativa"
        };

        // Callback do observer: para cada entrada (seção observada)
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Atualiza o filtro ativo baseado no atributo data-filter da seção
                    setActiveFilter(entry.target.dataset.filter);
                }
            });
        };

        // Cria o observer
        const observer = new IntersectionObserver(observerCallback, options);

        // Observa as seções se as refs estiverem definidas
        if (novidadesRef.current) observer.observe(novidadesRef.current);
        if (frituraRef.current) observer.observe(frituraRef.current);
        if (fornoRef.current) observer.observe(fornoRef.current);
        if (fritoCongeladoRef.current) observer.observe(fritoCongeladoRef.current);

        // Cleanup: desconecta o observer quando o componente desmonta
        return () => observer.disconnect();
    }, []);

    // Função para realizar o scroll até a seção correspondente
    const scrollToSection = (filter) => {
        console.log(filter);
        if (filter === "novidades" && novidadesRef.current) {
            novidadesRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (filter === "fritura" && frituraRef.current) {
            frituraRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (filter === "forno" && fornoRef.current) {
            fornoRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (filter === "frito-congelado" && fritoCongeladoRef.current) {
            fritoCongeladoRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Base>
            <Banner />
            {/* Passa o activeFilter e a função de scroll para o componente de filtragem */}
            <Filtragem activeFilter={activeFilter} onFilterClick={scrollToSection} />

            {/* Envia a ref para Novidades */}
            <Novidades ref={novidadesRef} />

            {/* Envia as refs para ListaSalgadinhos para identificar as seções */}
            <ListaSalgadinhos
                frituraRef={frituraRef}
                fornoRef={fornoRef}
                fritoCongeladoRef={fritoCongeladoRef}
            />
        </Base>
    );
};

export default Home;
