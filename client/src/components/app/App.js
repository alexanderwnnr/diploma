import React from 'react';
import { Route, Switch } from 'react-router-dom'
import store from '../../store'
import HeadBar from '../header/SecondHeader'
import FirstHeader from '../header/FirstHeader'
import HomePage from '../../pages/HomePage';
import AuthPage from '../../pages/AuthPage'
import RegPage from '../../pages/RegPage'
import CatalogPage from '../../pages/CatalogPage';
import ItemPage from '../../pages/ItemPage'
import { loadUser } from '../../actions/authActions'

class App extends React.Component {

  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <div>
        <HeadBar numItems={5} total={210}/>
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/auth/login' component={AuthPage} exact/>
          <Route path='/auth/register' component={RegPage} exact/>
          <Route path='/catalog' component={CatalogPage} exact/>
          <Route path='/catalog/:id' component={ItemPage}/>
        </Switch>
        </div>
    );
  }
}

export default App;
