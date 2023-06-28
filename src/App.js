import React from 'react'
import Header from './components/Header'
import Products from './pages/productos/Producto'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={ store }>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Products} />
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App