import React from 'react';

const Scenario = props => (
  <div className="scenario-container">
    <h2>{props.title}</h2>
    <div>{props.description}</div>
    <div className="code-container">
      {props.component}
    </div>
    {/* <div className="code-link">
      <a href={props.codeURL}>Check the code in GitHub</a>
    </div> */}
    {props.snippet}
  </div>
);

export default Scenario;