import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import CromPraisingComponent from "./components/Hello";
import {connect} from "react-redux"
import './ui.css'

declare function require(path: string): any

class App extends React.Component {
  textbox: HTMLInputElement


  alertFunction = () => {
    alert('Casey is Awesome')
  }

  render() {
    return (
      <div>
      <CromPraisingComponent  />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-page')
)
