import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Mateus from '../Pages/Mateus';
//import Proverbios from '../Pages/Proverbios';
//import Salmos from '../Pages/Salmos';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/mateus" component={Mateus} />
    </Switch>
  );
}
