import React, {Component} from 'react';
import Header from './componentes/Header'
import AgregarCita from './componentes/AgregarCita'
import ListaCita from './componentes/ListaCitas';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {


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

  

  render(){
    return (
      <Provider store={store}>
      <div className="container">
        <Header
          titulo ={'Administrador de Pacientes de Veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita />
          </div>
          <div className="col-md-6">
            <ListaCita 
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
      </Provider>
    );
  }
}
export default App;
