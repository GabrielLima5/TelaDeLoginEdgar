import './App.css';
import LeftLogin from './components/LeftLogin/LeftLogin'
import RightLogin from './components/RightLogin/RightLogin';

function App() {
  return (
    <div className="App">
      <div className="main-login">
        <LeftLogin text1="Faça seu login para acompanhar" text2="seus pedidos na" company="Edgar" />
        <RightLogin  />
      </div>
    </div>
  );
}

export default App;
