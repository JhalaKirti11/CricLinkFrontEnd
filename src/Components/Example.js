import React, { useState, useRef } from 'react';
import Player from './Player/Players.js';

function ParentComponent() {
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const secondComponentRef = useRef(null);

  const handleStateUpdate = () => {
    setShowFirstComponent(false);
    if (secondComponentRef.current) {
      secondComponentRef.current.focus();
    }
  };

  return (
    <div>
      {/* {showFirstComponent ? (
        <FirstComponent handleStateUpdate={handleStateUpdate} />
      ) : (
        <SecondComponent ref={secondComponentRef} />
      )} */}
    </div>
  );
}

export default ParentComponent;
