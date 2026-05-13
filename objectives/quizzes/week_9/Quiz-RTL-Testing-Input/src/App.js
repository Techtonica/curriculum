import React, { useEffect }  from 'react';
import Prism from 'prismjs';

import ChangeInput from './components/ChangeInput/ChangeInput';
import FocusInput from './components/FocusInput/FocusInput';
import Scenario from './components/Scenario';

import './prism.css';
import './App.css';

function App() {

    useEffect(() => {
        Prism.highlightAll();
      }, []);

    return (
        <div className="App">

            <Scenario
                component={<ChangeInput />}
                title="Testing for an Input Change"
            />

            <Scenario
                component={<FocusInput />}
                title="Testing a Focused Element"
            />

        </div>
    );
}

export default App;
