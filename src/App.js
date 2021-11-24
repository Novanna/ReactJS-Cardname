import './App.css';
import "./component/data";
import LayoutData from "./component/data";

function App() {
  return (
    <div className="App">
      <body>
        <LayoutData 
        name="Novanna Rahma Zani" 
        address="Tangerang, Indonesia"
        currentJob="Fullstack Developer"
        email="novannarahmazani@gmail.com"
        github="Novanna"
        linkedIn="novannarhz"
        pict="./component/Novanna2.jpg"
        />
      </body>
    </div>
  );
}

export default App;
