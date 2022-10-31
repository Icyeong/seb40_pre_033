import React from 'react';
import MyEditor from './Editor';
import LabTest from './LabTest';

export default function App() {
  const [edit, setEdit] = React.useState(true);
  React.useEffect(() => {
    fetch('https://api.github.com/emojis')
      .then((res) => res.json())
      .then((data) => {
        window.data = data;
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <button
        id="save"
        className="btn btn-primary"
        onClick={() => setEdit(!edit)}
        type="button"
      >
        Save
      </button>
      <LabTest />
      <MyEditor edit={edit} />
    </div>
  );
}
