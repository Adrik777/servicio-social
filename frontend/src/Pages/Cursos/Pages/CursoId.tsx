import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactPlayer from 'react-player'
import "./CursoId.css"
import { Interface } from "readline"

export default function CursoId() {    
    
    const { id } = useParams()

    interface CursoId {
        id: number;
        name: string;
        description: string;
        instructor: string;
        price: number;
        urlTrailer: string;
    }
    const [cursoId, setCursoId] = useState<CursoId | null>()

    useEffect(()=>{
        async function getCursoId(id:string|undefined) {
            try {
                const response = await fetch(`http://localhost:3002/cursos/${id}`)
                const data = await response.json()
                setCursoId(data)
                console.log(cursoId)
            }catch (e) {
                console.log("There was an error", e)
            }
        }
        getCursoId(id)
    },[id])

    
    return(
        <div id="curso-id">
                <ReactPlayer
                    id = "curso-id-trailer"
                    url={cursoId?.urlTrailer}
                    controls
                    playing={true}
                    muted={true}
                />
            <div className="informacion">
                <h1>{cursoId?.name}</h1>
                <h1 className="price-cursoid">${cursoId?.price}</h1>
                <p className="descripcion-cursoid">{cursoId?.description}</p>
                <p className="profesor-cursoid">{cursoId?.instructor}</p>
                <hr id="hr-curso-id"/>
                <div className="botones">
                    <button className="comprar">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3" width={"1.1rem"}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>
                        <p>Comprar</p>
                    </button>
                    <button className="carrito">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width={"1.1rem"}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <p>Add to cart</p>
                    </button>  
                </div>
            </div>
        </div>
    )
}