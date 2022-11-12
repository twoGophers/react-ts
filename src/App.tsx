import React from 'react';
import Card, { CardVariant } from './components/Card';

function App() {
  return (
    <>
      <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Button</button>
      </Card>
    </>
  );
}

export default App;
