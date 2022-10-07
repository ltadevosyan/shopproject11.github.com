import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { useRoutes } from "react-router-dom";
import {Routes} from "./helping/routes";

function App() {
  const routes = useRoutes(Routes);
  return (
    <>
      <Header/>
        <main className="main">
          <div className="container">
            {routes}
          </div>
        </main>
      <Footer/>
    </>
  );
}

export default App;
