
import styled from 'styled-components';

const AboutContainer = styled.section`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
    background-color: #f1f5f9;
`;

const AboutTitle = styled.h1`
    color: #334155;
    font-size: 36px;
    margin-bottom: 20px;
`;

const AboutDescription = styled.p`
    color: #64748b;
    font-size: 18px;
    line-height: 1.8;
    max-width: 650px;
`;

const About = () => {
    return (
        <AboutContainer>

            <AboutTitle>
                Sobre Nós
            </AboutTitle>

            <AboutDescription>
                Este projeto foi desenvolvido com React
                com o objetivo de praticar conceitos importantes
                do desenvolvimento Front-End.

                Aqui estou aprendendo sobre componentes,
                estados, navegação entre páginas e estilização
                , entre outros conceitos do react e suas bibliotecas.
            </AboutDescription>

        </AboutContainer>
    );
};

export default About;
