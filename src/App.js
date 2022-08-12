import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './component/header';
import Routing from './routing/routing';


function App() {
  return (
    <>
      <Header />
      <Routing />
    </>
  );
}

export default App;
