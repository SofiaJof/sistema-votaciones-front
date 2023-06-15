import React from 'react';
import Logonaranja from '../assets/Logonaranja.png'
import './Footer.css'

function Footer(){
    return (
        <React.Fragment>
			<footer className="footer">
				<div className="container my-auto">
					<div className='footer-copyright'>
                        <img alt='logonaranja'src={Logonaranja}></img>
                        <div className="copyright">
                            <h4>Lira Gestión</h4>
						    <span>Copyright &copy; 2021</span>
                        </div>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;