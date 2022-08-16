import { useState } from 'react';
import ReactChildComponent from 'child/RemoteEntry';

export function App() {
  const [title, setTitle] = useState('child');
  const [show, setShow] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  return (
    <div className="react-root">
      <h1>root</h1>
      <input onChange={handleChange} /><button onClick={() => setShow(!show)}>Mostrar</button>
      {show && <ReactChildComponent title={title} />}
    </div>
  );
}

export default App;
