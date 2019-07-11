import React, {Component} from 'react'
import Cita from './Cita'
import PropTypes from 'prop-types'

class ListaCita extends Component{
    render(){
        const citas = this.props.citas;
        const mensaje = (Object.keys(citas).length === 0) ? 'No hay citas' : 'Administra tus citas';
        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                    {Object.keys(this.props.citas).map(cita => (
                        <Cita
                            key = {cita}
                            info = {this.props.citas[cita]}
                            borrarCita = {this.props.borrarCita}
                        />      
                    ))}
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}

ListaCita.propTypes = {
    citas: PropTypes.array.isRequired,
    borrarCita: PropTypes.func.isRequired
}

export default ListaCita;