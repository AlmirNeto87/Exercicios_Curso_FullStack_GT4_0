
import { NavLink } from 'react-router-dom';

const Header = () => {

    const links = [
        { path: '/', label: 'Início', icon: 'pi pi-home', end: true },
        { path: '/contatos', label: 'Contatos', icon: 'pi pi-phone' },
        { path: '/sobre', label: 'Sobre', icon: 'pi pi-info-circle' },
        { path: '/loja', label: 'Loja Virtual', icon: 'pi pi-shopping-bag' },
        { path: '/feedbackform', label: 'Feedback', icon: 'pi pi-comments' }
    ];

    return (

        <header className="surface-card shadow-2">

            <div className="flex flex-wrap justify-content-between align-items-center gap-3 p-3 md:px-5">

                {/* Logo / Título */}
                <NavLink
                    to="/"
                    className="flex align-items-center gap-2 no-underline"
                >
                    <i className="pi pi-desktop text-primary text-2xl" />

                    <span className="text-xl font-bold text-900">
                        Front-End React
                    </span>
                </NavLink>

                {/* Navegação */}
                <nav>

                    <ul className="flex flex-wrap align-items-center gap-2 md:gap-3 list-none m-0 p-0">

                        {links.map((link) => (

                            <li key={link.path}>

                                <NavLink
                                    to={link.path}
                                    end={link.end}
                                    className={({ isActive }) =>
                                        `flex align-items-center gap-2 no-underline border-round px-3 py-2 transition-colors transition-duration-200 ${
                                            isActive
                                                ? 'bg-primary text-white font-bold'
                                                : 'text-700 hover:bg-primary-50 hover:text-primary'
                                        }`
                                    }
                                >

                                    <i className={link.icon} />

                                    <span>{link.label}</span>

                                </NavLink>

                            </li>

                        ))}

                    </ul>

                </nav>

            </div>

        </header>

    );

};

export default Header;
