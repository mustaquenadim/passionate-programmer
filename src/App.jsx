import AppRouter from './AppRouter';
import Header from './components/common/Header';
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
