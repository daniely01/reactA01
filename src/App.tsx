import React, { FunctionComponent } from 'react';
import { WrapperComponent } from './wrapper.component';
import ChildComponent from './child.component';

interface AppContextType {
  showSpinner?: () => void,
  hideSpinner?: () => void
}

export const AppContext = React.createContext<AppContextType>({});

const App: FunctionComponent = () => {
  return (
    <AppContext.Provider value={{}}>
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
    </AppContext.Provider>
  );
}

export default App;
