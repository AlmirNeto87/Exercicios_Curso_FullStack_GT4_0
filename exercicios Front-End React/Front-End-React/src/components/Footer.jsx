
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #4f6c91;
    color: white;
    padding: 25px 20px;
    text-align: center;
    margin-top: 40px;
`;

const FooterText = styled.p`
    margin: 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.85);
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
                &copy; 2026 Meu Projeto. Todos os direitos reservados.
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;
