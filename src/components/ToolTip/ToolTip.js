import React from 'react';
import './ToolTip.css';

function ToolTip({ toolInfo }) {
  return (
    <div className="tooltip">
      <p>{toolInfo}</p>
    </div>
  );
}

export default ToolTip;
