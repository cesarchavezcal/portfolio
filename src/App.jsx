import React from 'react';
import ImageDesigner from 'react-image-designer';

const App = () => {
  return (
    <div className="App">
      <h1>The spectacle before us was indeed sublime.</h1>
      <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
      <ImageDesigner
        src="https://images.unsplash.com/photo-1582195088824-739075721136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=100"
        placeholder="https://via.placeholder.com/300x300?text=Image"
        alt="Hello"
        lazy
        style={{
          width: '300px',
          objectFit: 'cover',
          height: '300px',
        }}
      />
    </div>
  );
}

export default App;
