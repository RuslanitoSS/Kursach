import './styles/App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <main>
        <Footer/>
      </main>
    </>

  );
}

export default App;
