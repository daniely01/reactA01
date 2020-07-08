import React, { FunctionComponent } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {WrapperComponent} from './wrapper.component';
import ChildComponent from './child.component';

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
          <header>
            <h1>React/Typescript Example 1</h1>
            <h4>Show/Hide a sibling overlay/spinner component using context without re-rendering</h4>
          </header>
          <WrapperComponent>
            <main>
              <hr></hr>
              <ChildComponent name="child 1"></ChildComponent>
              <hr></hr>
              <ChildComponent name="child 2"></ChildComponent>
            </main>
          </WrapperComponent>
    </ThemeProvider>
  );
}

export default App;
