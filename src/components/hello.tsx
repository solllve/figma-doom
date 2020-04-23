import React, { Component } from 'react'
import {connect,useSelector, useDispatch} from 'react-redux'
import Conan from '../conan.gif'
import {praiseCrom} from "../store/actions"
import Iframe from 'react-iframe'
import '../ui.css'

class ShowDoomComponent extends Component {

  render() {

    return (
      <div className="iframe_window">
        <Iframe url="https://js-dos.com/games/doom.exe.html" width="700px" height="450px" />
      </div>
    )
  }
}
export default ShowDoomComponent
