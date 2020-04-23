import {createStore} from "redux"

const reducer = (state={
    showDoom: true
  }, action) => {
  switch(action.type) {
    case "PRAISE_CROM": {
      return {
        showDoom: action.showDoom
      }
    }
  }
  return state
}

const store = createStore(reducer)

export default store
