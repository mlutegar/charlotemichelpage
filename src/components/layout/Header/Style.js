import styled from "styled-components"

export const Top = styled.header`
    padding: 15px 200px;
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    max-height: 70px;
    
    @media (max-width: 768px) {
        padding: 25px 20px;
    }
`
export const Container = styled.div`
    background-color: white;
`