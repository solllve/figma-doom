import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { CromPraisingComponent } from "./components/Hello";
import {connect} from "react-redux"
import './ui.css'

declare function require(path: string): any

class App extends React.Component {
  textbox: HTMLInputElement
  countRef = (element: HTMLInputElement) => {
    if (element) element.value = '5'
    this.textbox = element
  }

  onCreate = () => {
    const count = parseInt(this.textbox.value, 10)
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
  }

  alertFunction = () => {
    alert('Casey is Awesome')
  }

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

  render() {
    return (
      <div>
      <CromPraisingComponent compiler="TypeScript" framework="React" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-page'))
