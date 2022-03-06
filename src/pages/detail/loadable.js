import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading () {
    return <div>Loading...</div>
},
});

const App = () => (
  <LoadableComponent/>
)

export default App;
