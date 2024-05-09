import "./EventosAlmacenados.css"
import { useLocation } from "react-router-dom";

const EventosAlmacenados = () => {
    const location = useLocation();
    const eventos = location.state ? location.state.eventos : [];

    return (
        <div className="card">
            <h3>Eventos Registrados</h3>
            {eventos.map((evento, index) => (
                <div key={index} className="tarjetaEvento">
                    <h4>{evento.getNombreEvento}</h4>
                    <p>
                        <b>Fecha del Evento:</b> {evento.getFecha}
                    </p>
                    <p>
                        <b>Ubicacion del Evento:</b> {evento.getUbicacion}
                    </p>
                    <p>
                        <b>Descripcion: </b>
                        {evento.getDescripcion}
                    </p>
                </div>
            ))}
        
        </div>
    )
}
export default EventosAlmacenados;