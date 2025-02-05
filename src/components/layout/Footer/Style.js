import styled from "styled-components"

const FooterStyle = styled.header`
    background-color: #EDEADF;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    a {
        color: #000;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    
    p {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
    .logoFooter {
        margin-top: 30px;
        margin-bottom: 20px;
    }
    
    .midiasSociaisIcons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .midiasSociaisIcons svg {
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .infoProdutos {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .endereco {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
    }
    
    .copyRight {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;
        max-width: 313px;
    }
    
    @media (max-width: 768px) {
        .endereco {
            width: 70%;
        }
    }
`
export {FooterStyle}