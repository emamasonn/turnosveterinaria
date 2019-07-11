import React, {Component} from 'react';
import Header from './componentes/Header'
import AgregarCita from './componentes/AgregarCita'
import ListaCita from './componentes/ListaCitas';

class App extends Component {


  state = {
    citas: []
  }

  //el componente ya cargo
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
        this.setState({citas: JSON.parse(citasLS)});
    }
  }

  //el componente cambio
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita]

    this.setState({
      citas: citas
    });
    console.log(citas);
    
  }

  borrarCita = (id) => {
      //leer el state
      const citasActuales = [...this.state.citas]
      //borrar el elemento del state
      const citas = citasActuales.filter(cita => cita.id !== id);
      //Actualizar el state

      this.setState({ citas: citas});
  }

  render(){
    return (
      <div className="container">
        <Header
          titulo ={'Administrador de Pacientes de Veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
              crearCita = {this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCita 
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
