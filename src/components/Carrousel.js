import React from 'react'
import Logo from '../img/video-player.svg'
import './Carrousel.css'
const Carrousel = () => {
    console.log('Carrousel')
    return (
        <div className="carousel">
			<div className="carousel__contenedor">
				<button aria-label="Anterior" className="carousel__anterior">
					<i className="fas fa-chevron-left"></i>
				</button>

				<div className="carousel__lista">
					<div className="carousel__elemento">
						<img src={Logo} alt="Rock and Roll Hall of Fame" width='50%'/>
						<p>Rock and Roll Hall of Fame</p>
					</div>
					<div className="carousel__elemento">
						<img src={Logo} alt="Rock and Roll Hall of Fame" width='50%'/>
						<p>Rock and Roll Hall of Fame</p>
					</div>
					<div className="carousel__elemento">
						<img src={Logo} alt="Rock and Roll Hall of Fame" width='50%'/>
						<p>Rock and Roll Hall of Fame</p>
					</div>
					<div className="carousel__elemento">
						<img src={Logo} alt="Rock and Roll Hall of Fame" width='50%'/>
						<p>Rock and Roll Hall of Fame</p>
					</div>
	
					<div className="carousel__elemento">
						<img src={Logo} alt="Rock and Roll Hall of Fame" width='50%'/>
						<p>Rock and Roll Hall of Fame</p>
					</div>
					<div className="carousel__elemento">
						<img src={Logo} alt="Rock and Roll Hall of Fame" width='50%'/>
						<p>Rock and Roll Hall of Fame</p>
					</div>
					<div className="carousel__elemento">
						<img src={Logo} alt="Rock and Roll Hall of Fame" width='50%'/>
						<p>Rock and Roll Hall of Fame</p>
					</div>
					<div className="carousel__elemento">
						<img src={Logo} alt="Rock and Roll Hall of Fame" width='50%'/>
						<p>Rock and Roll Hall of Fame</p>
					</div>
				</div>

				<button aria-label="Siguiente" className="carousel__siguiente">
					<i className="fas fa-chevron-right"></i>
				</button>
			</div>

			<div role="tablist" className="carousel__indicadores"></div>
		</div>
	
    )
}

export default Carrousel
