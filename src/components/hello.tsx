import React, { Component } from 'react'
import {connect} from 'react-redux'
import Conan from '../conan.gif'
import {praiseCrom} from "../store/actions"
import Iframe from 'react-iframe'
import '../ui.css'
const mapStateToProps = (state) => ({
  letsPraiseCrom: state.cromPraised ? '--showArnold' : '--hideArnold'
})

class CromPraisingComponent extends Component {

  render() {
    return (
      <div className="iframe_window">
        <Iframe url="https://js-dos.com/games/doom.exe.html" width="700px" height="450px" />
      </div>
    )
  }
}
export default connect(mapStateToProps)(CromPraisingComponent)
