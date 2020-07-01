import React, { Component } from 'react';

class ClientsList extends Component {
    
    state = {
        clients: [
            {id: 1, nom: "Jean Marc"},
            {id: 2, nom: "William James"},
            {id: 3, nom: "Tom Alain" },
            {id: 4, nom: "Jamel Debouz"}
        ],
        nouveauClient: ''
    };

    handleDelete = id => {
        const clients = this.state.clients.slice();
        const index = clients.findIndex((client) => client.id === id);
        clients.splice(index, 1);
        this.setState({ clients })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime();
        const nom = this.state.nouveauClient;
        const clients = this.state.clients.slice();
        clients.push({id, nom});
        this.setState({clients, nouveauClient: ''})
    }

    handleChange = (event) => {
        this.setState({ nouveauClient: event.currentTarget.value });
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.clients.map((client) => <li className="li">{ client.nom }
                        <button className="sup" onClick={() => this.handleDelete(client.id)}>Supprimer</button>
                    </li>)}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input className="input" value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="Ajouter un client" />
                    <button>Confirmer</button>
                </form>
            </div>
        )
    }
}

export default ClientsList;