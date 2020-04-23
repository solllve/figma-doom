import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import ShowDoomComponent from "./components/Hello";
import {connect} from "react-redux"
import './ui.css'

declare function require(path: string): any

class App extends React.Component {

  render() {
    const getit = store.getState()
    const showDoom = getit.showDoom
    if (showDoom) {
      return <ShowDoomComponent  />;
    }
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-page')
)
