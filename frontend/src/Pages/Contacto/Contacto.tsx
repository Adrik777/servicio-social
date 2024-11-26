import './Contacto.css'
import ReactPlayer from 'react-player'

export default function Contacto() {
    return (
        <div className='nosotros'>
            <div className='descripcion'>
                <h1>Luz, Ciencia y Arte</h1>
                <p>
                    Luz, Ciencia y Arte es una organización sin fines de lucro, formada con la finalidad de contribuir al desarrollo integral
                    y sostenible de la sociedad, así como positivamente en el desarrollo integral de la infancia en México, fomentando el
                    conocimiento de la ciencia, el arte y la cultura además de formación basada en la responsabilidad y sustentabilidad del
                    medio ambiente.
                </p>
            </div>
            <div className='video'>
                <ReactPlayer
                    className='reactPlayer'
                    url="https://www.youtube.com/watch?v=ryUXJ1jCdL4&t=2s"
                    controls
                    width="100%"
                    height="100%"
                    playing={true}
                    muted={true}
                />
            </div>
        </div>
    );
}
