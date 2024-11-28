import './Membresia.css';
export default function Membresia() {
    
    const inicial = ["1 curso al mes", "Ventaja 2", "Ventaja 3"]
    const estandar = ["3 cursos al mes", "Ventaja 2", "Ventaja 3", "Ventaja 4"]
    const premium = ["Cursos ilimitados", "Hasta 5 cuentas familiares", "Ventaja 3", "Ventaja 4"]
    
    return( 
        <div id="membresia">
            <h1>Diferentes modalidades de membresía</h1>
            <p>Selecciona el plan ideal para ti.</p>
            <div id= "planes">
                <div className='card'>
                    <h2>Inicial</h2>
                    <p>Buena opción para para comenzar a aprender un curso a la vez.</p>
                    <div className="precios">
                        <h1>$49</h1>
                        <p>/mes</p>
                    </div>
                    <ul>
                        {inicial.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <button>seleccionar</button>
                </div>
                <div className='card'>
                    <h2>Estándar</h2>
                    <p>Excelente para aprender de distintos cursos al mes.</p>
                    <div className="precios">
                        <h1>$99</h1>
                        <p>/mes</p>
                    </div>
                    <ul>
                        {estandar.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <button>seleccionar</button>
                </div>
                <div className='card'>
                    <h2>Premium</h2>
                    <p>La mejor para aprender sin límites con toda tu familia.</p>
                    <div className="precios">
                        <h1>$199</h1>
                        <p>/mes</p>
                    </div>
                    <ul>
                        {premium.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <button>seleccionar</button>
                </div>
            </div>
        </div>
    )
}