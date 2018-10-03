import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import {updateUser} from './actions/user-actions';

class App extends Component {
  onUpdateUser = () => {
    // this.props.dispatch(updateUser('updated user - ' + Math.floor(Math.random() * 10)));

    this.props.onUpdateUser('updated user');
    /*mapDispatchToProps ile bu şekilde dispatch etmeden kullanmamıza olanak sağlar*/
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>{this.props.user}</p>
          <button onClick={this.onUpdateUser}>Change the user</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {/*storedaki state i comnponent içinde kullanabilmeyi sağlıyoruz */
  /*return {products: state.products};//burada sadece belirli bir state i alarak, diğer state fields i filtreleyebiliriz*/
  return state;
};

const mapDispatchToProps = {
  onUpdateUser: updateUser
};

/*store ile component bağlantısını sağlıyoruz*/
export default connect(mapStateToProps, mapDispatchToProps)(App);