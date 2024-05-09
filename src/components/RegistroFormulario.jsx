import { useNavigate } from "react-router-dom";
import EventosAlmacenados from "./EventosAlmacenados";
import "./RegistroFormulario.css"
import { useState } from "react";

const RegistroFormulario = () => {
    const [getNombreEvento, setNombreEvento] = useState("");
    const [getFecha, setFecha] = useState("");
    const [getUbicacion, setUbicacion] = useState("");
    const [getDescripcion, setDescripcion] = useState("");
    let [eventos, setEventos] = useState([])
    let redireccion = useNavigate()
   
    let agregarEvento = (e) => {
        e.preventDefault();
        const eventoNuevo = {
            getNombreEvento,
            getFecha,
            getUbicacion,
            getDescripcion
        };
        setEventos([...eventos,eventoNuevo])
        console.log(eventos)

        setNombreEvento("");
        setFecha("");
        setUbicacion("");
        setDescripcion("");
    }

    function mostarEventos() {
            redireccion("/EventosAlmacenados", {state:{ eventos: eventos}});
    }

    return (
        <form className="formulario-evento" onSubmit={agregarEvento} >
            <h2>REGISTRAR EVENTO</h2>
            <div className="formulario">
                <input type="text" placeholder="Nombre del evento" value={getNombreEvento} onChange={(e) => setNombreEvento(e.target.value)} required></input>
                <input type="date" placeholder="Fecha" value={getFecha} onChange={(e) => setFecha(e.target.value)} required></input>
                <input type="text" placeholder="Ubicacion" value={getUbicacion} onChange={(e) => setUbicacion(e.target.value)} required></input>
                <input type="text" placeholder="Descripcion" className="descripcion" value={getDescripcion} onChange={(e) => setDescripcion(e.target.value)}></input>
                <div className="botones">
                    <button  type="submit">Agregar evento</button>
                    <button type="button" onClick={mostarEventos}>Mostrar evento</button>
                </div>

            </div>

        </form>
    )
}

export default RegistroFormulario;