import React, { useEffect }  from 'react';
import Prism from 'prismjs';

import Fetch from './components/Fetch/Fetch';
import MultipleFetches from './components/MultipleFetches.js/MultipleFetches';
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
                component={<Fetch />}
                title="Testing a Fetched API"
            />

            <Scenario
                component={<MultipleFetches />}
                title="Testing for a Fetched API Multiple Times"
            />

        </div>
    );
}

export default App;
