import React from 'react';
import { Route, Switch } from 'react-router-dom'
import store from '../../store'
import HeadBar from '../header/SecondHeader'
import FirstHeader from '../header/FirstHeader'
import AuthPage from '../../pages/AuthPage'
import RegPage from '../../pages/RegPage'
import CatalogPage from '../../pages/CatalogPage';
import ItemPage from '../../pages/ItemPage'
import AdminPage from '../../pages/AdminPage'
import { loadUser } from '../../actions/authActions'
import Footer from '../footer/Footer'

class App extends React.Component {

  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <div>
        <HeadBar numItems={5} total={210}/>
        <Switch>
          <Route path='/' component={CatalogPage} exact/>
          <Route path='/auth/login' component={AuthPage} exact/>
          <Route path='/auth/register' component={RegPage} exact/>
          <Route path='/catalog' component={CatalogPage} exact/>
          <Route path='/admin' component={AdminPage} exact/>
          <Route path='/catalog/:id' component={ItemPage}/>
          
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
