import "./Cursos.css"
import { Link } from "react-router-dom";
export default function Cursos() {
    
    const botones = [
    { icono: "💡", categoria: "Todos" },
    { icono: "🎨", categoria: "Arte" },
    { icono: "🧪", categoria: "Ciencia" },
    { icono: "🙏", categoria: "Espiritual" },
    { icono: "📈", categoria: "Negocios" },
    { icono: "💭", categoria: "Idiomas" },
    { icono: "🍽️", categoria: "Cocina" },
    { icono: "🎵", categoria: "Musica" },
    { icono: "🏅", categoria: "Deportes" },
    ]

    const json = [
        {id:1,thumbnail: "https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg",nombre: "Yoga", categoria: "Espiritual",profesor:"Cilca", precio: 14.15},
        {id:2,thumbnail: "https://images.pexels.com/photos/27837704/pexels-photo-27837704/free-photo-of-glaciares.jpeg", nombre: "Matemáticas prueba",categoria: "Ciencia",profesor:"Cilca", precio: 12.24},
        {id:3,thumbnail: "https://images.pexels.com/photos/6325952/pexels-photo-6325952.jpeg", nombre: "Biología",categoria: "Ciencia", profesor:"Cilca", precio: 150.01},
        {id:3,thumbnail: "https://images.pexels.com/photos/6325952/pexels-photo-6325952.jpeg", nombre: "Biología",categoria: "Ciencia", profesor:"Cilca", precio: 150.00},
        {id:3,thumbnail: "https://images.pexels.com/photos/6325952/pexels-photo-6325952.jpeg", nombre: "Biología",categoria: "Ciencia", profesor:"Cilca", precio: 150.00},
        {id:3,thumbnail: "https://images.pexels.com/photos/6325952/pexels-photo-6325952.jpeg", nombre: "Biología",categoria: "Ciencia", profesor:"Cilca", precio: 150.00},
    ]

    return(
        <div id="cursos">
            <div className="helper">
                <h1>Cursos</h1>
                <div className="botones">
                    {botones.map((boton, index) => (
                        <button key={index}>{boton.icono} {boton.categoria}</button>
                    ))}
                </div>
                <div className="contenido">
                    {json.map((curso)=>(
                        <div key={curso.id} className="card">
                            <img src={curso.thumbnail}/>
                            <div id= "card-info">    
                                <Link className= "link" to = {`/cursos/${curso.id}`}>{curso.nombre}</Link>
                                <p className="categoria">{curso.categoria}</p>
                                <div id="profe">
                                    <p className="profesor">{curso.profesor}</p>                                
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="gray" className="size-6" width="1.1rem">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                    </svg>
                                </div>
                                <h2 className="precio">{curso.precio}</h2>
                                <div className="carrito">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"width="1.1rem">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
                                    <button className="add-to-cart">add to cart</button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}