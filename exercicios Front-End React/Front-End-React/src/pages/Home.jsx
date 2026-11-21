
import styled from 'styled-components';

const HomeContainer = styled.section`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
    background-color: #f1f5f9;
`;

const HomeTitle = styled.h1`
    color: #334155;
    font-size: 36px;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        font-size: 28px;
    }
`;

const HomeDescription = styled.p`
    color: #64748b;
    font-size: 18px;
    line-height: 1.6;
    max-width: 600px;
`;

const HomeButton = styled.button`
    margin-top: 25px;
    padding: 12px 25px;
    background-color: #4f6c91;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #354d6c;
    }
`;

const Home = () => {

    return (
        <HomeContainer>

            <HomeTitle>
                Bem-vindo à nossa aplicação!
            </HomeTitle>

            <HomeDescription>
                Este é um espaço dedicado aos meus exercícios
                de Front-End com React. Aqui estou colocando
                em prática meus conhecimentos e evoluindo
                no desenvolvimento web.
            </HomeDescription>

            <HomeButton>
                Começar a explorar
            </HomeButton>

        </HomeContainer>
    );
};

export default Home;
