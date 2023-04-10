import React from 'react';
import Person from './Person';
import './App.css';

class App extends React.Component {
  state = {
    randonPerson: [],
    loading: true,
  }

  async fetchPersons() {
    this.setState(
      { loading: true },
    async () => {
      const request = await fetch('https://randomuser.me/api/?inc=name,email,dob,picture');
      const requestObj = await request.json();
      this.setState({
        loading: false,
        randonPerson: requestObj.results
      })
    });
  }  

  componentDidMount() {
    //requisição fetch
    this.fetchPersons();
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  } // função sugerida no gabarito;

  render() {
    const { randonPerson, loading } = this.state;

    return(
      <>
        <h1>Randon Person</h1>
        <div>
          {loading ? 'Loading...' : <Person randonPerson={this.getUserElements(randonPerson[0])} /> }
        </div>
      </>

    )
  }
}

export default App;
