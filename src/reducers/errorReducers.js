import { VALIDAR_FORMULARIO, MOSTRAR_ERROR } from '../actions/type'

const initialState = {
    error: false
}

export default function (state = initialState, action){
    switch(action.type){
        case VALIDAR_FORMULARIO: 
            return{
                error: action.payload
            }
        case MOSTRAR_ERROR: 
            return{
                error: action.payload
            }
        default:
            return state;
    }
}