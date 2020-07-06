import React, { FunctionComponent } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Test1Component from './test1-component';
import Test2Component from './test2-compnent';
import {SpinnerComponent} from './spinner-component';

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
    }
  }
});

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <header>
            Demo A01 |
          <Link to="/Test1"> Test 1 </Link> |
          <Link to="/Test2"> Test 2 </Link>
          </header>
          <SpinnerComponent>
            <main>
              <Switch>
                <Route exact path="/Test1">
                  <Test1Component></Test1Component>
                </Route>
                <Route exact path="/Test2">
                  <Test2Component></Test2Component>
                </Route>
              </Switch>
            </main>
          </SpinnerComponent>
        </Router>
    </ThemeProvider>
  );
}

export default App;
