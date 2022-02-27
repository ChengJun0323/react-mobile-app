import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import renderRoutes from "./utils/renderRoutes";
import routes from './router'
import store from './store'
import './assets/css/border.css';
import './assets/css/reset.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            {
              renderRoutes(routes)
            }
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
