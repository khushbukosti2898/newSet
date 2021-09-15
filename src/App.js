import './App.css';
import TheHeader from '../src/containers/TheHeader';
import { CKEditor } from 'ckeditor4-react';
import Banner from './views/Banner';
import Login from './views/login/login';

function App() {
  return (
    <div className="main">
      <div className="w-75 px-3 bg-white m-auto">
        <Banner />
        <TheHeader className="mb-2" />
        <div className="content">
          <Login />
        </div>
        {/* <CKEditor initData={<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>}
        onChange={(val) => console.log(val)}
        onBlur={(val) => console.log(val.editor.getData())}
      /> */}
      </div>
      <div className="w-75 bg-white m-auto">
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
