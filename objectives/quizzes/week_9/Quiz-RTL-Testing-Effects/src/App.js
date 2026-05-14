import React, { useEffect }  from 'react';
import Prism from 'prismjs';

import Counter from './components/Counter/Counter';
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
                component={<Counter />}
                title="Testing Effects"
            />
            You are a boss!
        </div>
    );
}

export default App;
