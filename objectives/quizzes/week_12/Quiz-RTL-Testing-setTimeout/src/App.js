import React, { useEffect }  from 'react';
import Prism from 'prismjs';

import Scenario from './components/Scenario';
import Timeout from './components/Timeout/Timeout';

import './prism.css';
import './App.css';

function App() {

    useEffect(() => {
        Prism.highlightAll();
      }, []);

    return (
        <div className="App">

            <Scenario
                component={<Timeout />}
                title="Testing a setTimeout"
            />

        </div>
    );
}

export default App;
