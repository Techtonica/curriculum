import React, { useEffect }  from 'react';
import Prism from 'prismjs';

import Button from './components/Button/Button';
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
                component={<Button text="Submit" onClick={() => {}} />}
                title="Testing a Controlled Component"
            />

        </div>
    );
}

export default App;
