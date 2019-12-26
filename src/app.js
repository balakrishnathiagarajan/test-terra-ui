import React from 'react';
import Base from 'terra-base';
import ActionHeader from 'terra-action-header';

const App = () => (
  <Base className="custom-App" locale="en">
    <ActionHeader
      title="Hello world"
      onBack={() => alert('You clicked back!')}
      onClose={() => alert('You clicked close!')}
    />
  </Base>
);

export default App;