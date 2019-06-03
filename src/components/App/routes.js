import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Call Pages
import Home from '../../pages/Home'
import Category from '../../pages/Category'
import Search from '../../pages/Search'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categoria/:category" component={Category} />
      <Route path="/busqueda/:query" component={Search} />
    </Switch>
  )
};

export default Routes;
