import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { agregarCitas } from '../actions/citasActions';
import { mostrarError } from '../actions/errorActions'

class AgregarCita extends Component {

    componentDidMount(){
        this.props.mostrarError(false)
    }
    //ref

    nombreMascotaRef = React.createRef();
    propietarioRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();

    crearNuevaCita = (e) =>{
        e.preventDefault();

        const mascota = this.nombreMascotaRef.current.value;
        const propietario = this.propietarioRef.current.value;
        const fecha = this.fechaRef.current.value;
        const hora = this.horaRef.current.value;
        const sintomas = this.sintomasRef.current.value;
        
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.props.mostrarError(true)
        }else{
            const nuevaCita = {
                id: uuid(),
                mascota: mascota,
                propietario: propietario,
                fecha: fecha,
                hora: hora,
                sintomas: sintomas
            }

            this.props.agregarCitas(nuevaCita);

            e.currentTarget.reset();
            this.props.mostrarError(false)
        }
    }
    render() {
        const existeError = this.props.error;
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las citas</h2>
                    <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    ref = {this.propietarioRef}
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño de la Mascota"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.fechaRef} type="date" className="form-control"/>
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref={this.horaRef} type="time" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.sintomasRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>

                    { existeError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios.</div> : ''}
                </div>

            </div>
        );
    }
}


AgregarCita.propTypes = {
    agregarCitas: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    citas: state.citas.citas,
    error: state.error.error
})

export default connect(mapStateToProps, { agregarCitas, mostrarError }) (AgregarCita);