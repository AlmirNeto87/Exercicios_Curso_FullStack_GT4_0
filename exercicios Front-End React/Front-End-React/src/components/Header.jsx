
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #4f6c91;
    color: white;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
`;

const Title = styled.h1`
    font-size: 24px;
    margin: 0;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 25px;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const StyledLink = styled(NavLink)`
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
        color: #ffd1d1;
    }

    &.active {
        color: #ffffff;
        font-weight: bold;
        border-bottom: 2px solid #e07d7d;
        padding-bottom: 5px;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>

            <Title>Front-End React</Title>

            <Nav>
                <NavList>
                    <li>
                        <StyledLink to="/">
                            Página Inicial
                        </StyledLink>
                    </li>
                
                    <li>
                        <StyledLink to="/contatos">
                            Contatos
                        </StyledLink>
                    </li>

                    <li>
                        <StyledLink to="/sobre">
                            Sobre
                        </StyledLink>
                    </li>

                    <li>
                        <StyledLink to="/loja">
                            Loja Virtual
                        </StyledLink>
                    </li>


                </NavList>
            </Nav>

        </HeaderContainer>
    );
};

export default Header;
