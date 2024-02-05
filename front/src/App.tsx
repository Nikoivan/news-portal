import { Provider } from 'react-redux';
import './App.css';
import NewsPortal from './components/NewsPortal/NewsPortal';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <NewsPortal />
    </Provider>
  );
}

export default App;
