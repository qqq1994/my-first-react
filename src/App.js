import { Fragment } from "react/cjs/react.development";

// import logo from './logo.svg';
// import './App.css';

/**
 * 1.在react中最外层不能存在并列的标签
 * 2.如果不想再添加一个父级标签，可以使用Fragment作为最外层，且在页面中不做任何渲染
 * 
 */
function App() {
  return (
    <Fragment>
      <div className="App">
        <h1>This is React App</h1>
      </div>
      <div>
        <h1>曾思怡静然么</h1>
      </div>
    </Fragment>

  );
}

export default App;
