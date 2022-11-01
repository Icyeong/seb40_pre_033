import './App.css';
import 'jquery';
import ReactSummernoteLite from '@easylogic/react-summernote';
import './summernote.css';

function App() {
  return (
    <div className="App">
      <h1>summernote</h1>
      <ReactSummernoteLite
        id="sample"
        initInvoke={(invoke) => {
          invoke(
            'pasteHTML',
            '<span style="font-size:30px">Hello, world for 30px</span>'
          );
        }}
      />
    </div>
  );
}

export default App;
