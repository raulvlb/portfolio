import { ReactComponent as PerfilIcon } from 'assets/img/perfil.svg';
import "./styles.css";

function Aboutme () {
    return(
        <div className='container'>
            <div className='row'>
                <div className="aboutme col-lg-6">
                    <h1>RAUL BARRA</h1>
                    <h2>Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.</p>
                </div>
                <div className='perfil-img col-lg-6'>
                    <PerfilIcon />
                </div>

            </div>
        </div>
    );
}

export default Aboutme;