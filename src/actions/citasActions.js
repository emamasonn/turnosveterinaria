import { MOSTRAR_CITAS, BORRAR_CITA, AGREGAR_CITA } from './type'

export const obtenerCitas = () => {
    return {
        type: MOSTRAR_CITAS
    }
}

export const agregarCitas = (cita) => {
    return {
        type: AGREGAR_CITA,
        payload: cita
    }
}

export const borrarCita = (id) => {
    return {
        type: BORRAR_CITA,
        payload: id
    }
}