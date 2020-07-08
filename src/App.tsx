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
            Demo A01 |
          </header>
          <WrapperComponent>
            <main>
              <ChildComponent></ChildComponent>
            </main>
          </WrapperComponent>
    </ThemeProvider>
  );
}

export default App;
