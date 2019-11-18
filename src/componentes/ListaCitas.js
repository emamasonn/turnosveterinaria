import React, {Component} from 'react'
import Cita from './Cita'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { obtenerCitas } from '../actions/citasActions'

import store from '../store'
store.subscribe(() => {
    localStorage.setItem('citas', JSON.stringify(store.getState()))
})

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
                        />      
                    ))}
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}

ListaCita.propTypes = {
    citas: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    citas: state.citas.citas
})

export default connect(mapStateToProps, { obtenerCitas }) (ListaCita);