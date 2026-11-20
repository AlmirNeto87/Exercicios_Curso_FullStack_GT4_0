import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #4f6c91;
    color: white;
    padding: 20px;
    text-align: center;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

// Estilizando o componente NavLink importado do React Router
const StyledLink = styled(NavLink)`
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    &:hover, &.active {
        color: #e07d7d;
        text-decoration: underline;
    }
`;




const Header = () => { 
    return ( 
        <HeaderContainer> 
            <h1>Navegacao</h1> 
            <Nav>
                <ul> 
                    <li><StyledLink to="/">Página Inicial</StyledLink></li> 
                    
                </ul> 
            </Nav>
        </HeaderContainer> 
    ); 
}; 
export default Header; // Torna o componente visível e importável por outros arquivos