
const Footer = () => {

    return (

        <footer className="surface-card border-top-1 surface-border mt-5">

            <div className="flex flex-column align-items-center text-center gap-3 p-4">

                {/* Identidade */}
                <div className="flex align-items-center gap-2">

                    <i className="pi pi-desktop text-primary text-2xl" />

                    <span className="text-xl font-bold text-900">
                        Front-End React
                    </span>

                </div>

                {/* Descrição */}
                <p className="text-600 text-sm">
                    Projeto desenvolvido para praticar conceitos
                    de desenvolvimento Front-End com React.
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap justify-content-center gap-3">

                    <span className="text-600 text-sm">
                        <i className="pi pi-code mr-1 text-primary" />
                        React
                    </span>

                    <span className="text-600 text-sm">
                        <i className="pi pi-palette mr-1 text-primary" />
                        PrimeReact
                    </span>

                    <span className="text-600 text-sm">
                        <i className="pi pi-server mr-1 text-primary" />
                        Axios
                    </span>

                </div>

                <div className="w-full border-top-1 surface-border pt-3">

                    <p className="text-600 text-sm">
                        &copy; 2026 Meu Projeto. Todos os direitos reservados.
                    </p>

                </div>

            </div>

        </footer>

    );

};

export default Footer;
