import React from 'react';
import ClientsList from './Components/ClientsList';
import Presentation from './Components/Presentation';
import './App.css';
import Contacts from './Components/Contacts';

class App extends React.Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  render() {
    return(
      <div>
        <Presentation />
        <div className="dive3">
          <div className="div1">
              <h2>Liste des clients</h2>
              <ClientsList />
          </div>
          <div className="div2">
              <div className="divd">
                <Contacts contacts={this.state.contacts} />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
