import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Mateus from '../Pages/Mateus';
import Proverbios from '../Pages/Proverbios';
import Salmos from '../Pages/Salmos';
import Principal from '../Pages/Principal';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/Aviva/mateus" component={Mateus} />
      <Route exact path="/Aviva/Salmos" component={Salmos} />
      <Route exact path="/Aviva/proverbios" component={Proverbios} />
      <Route exact path="/Aviva/" component={Principal} />
      <Route exact path="*" component={Principal} />
    </Switch>
  );
}
