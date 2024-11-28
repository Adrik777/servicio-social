import "./Cursos.css"
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
        {id:1,thumbnail: "https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg",nombre: "Yoga", categoria: "Espiritual", precio: 14.00},
        {id:2,thumbnail: "https://images.pexels.com/photos/27837704/pexels-photo-27837704/free-photo-of-glaciares.jpeg", nombre: "Matemáticas",categoria: "Ciencia", precio: 12.24},
        {id:3,thumbnail: "https://images.pexels.com/photos/6325952/pexels-photo-6325952.jpeg", nombre: "Biología",categoria: "Ciencia", precio: 150.00}
    ]

    return(
        <div id="cursos">
            <div>
                <h1>Cursos</h1>
                <div className="botones">
                    {botones.map((boton, index) => (
                        <button key={index}>{boton.icono} {boton.categoria}</button>
                    ))}
                </div>
                <div className="contenido">
                    {json.map((curso)=>(
                        <div key={curso.id} className="card">

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}