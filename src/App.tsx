import * as React from 'react';

import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Form from './Form';
import Store from './Store';

import './App.css';

import logo from './logo.svg';

const store = new Store();

@observer
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <DevTools />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-TypeScript-MobX-Antd Demo</h1>
        </header>
        <Form formData={store.formData} fields={store.formData.fields} />
      </div>
    );
  }
}

export default App;
