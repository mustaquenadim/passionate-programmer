import AppRouter from './AppRouter';
import Header from './components/partials/Header';
import './styles/App.scss';

const App = () => {
  return (
    <>
      <AppRouter>
        <Header />
      </AppRouter>
    </>
  );
};

export default App;
