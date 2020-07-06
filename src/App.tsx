import React, { FunctionComponent } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {MyCommonContainer} from './common-container-component';
import ChildComponent from './child-component';

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
          <MyCommonContainer>
            <main>
              <ChildComponent></ChildComponent>
            </main>
          </MyCommonContainer>
    </ThemeProvider>
  );
}

export default App;
