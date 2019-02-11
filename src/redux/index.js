import { createStore as reduxCreateStore, compose } from "redux"

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const initialState = { count: 0 }

const windowGlobal = typeof window !== 'undefined' && window

const devtools = process.env.NODE_ENV === 'development' && windowGlobal.devToolsExtension
  ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;

export const createStore = () => reduxCreateStore(reducer, initialState, compose(devtools));
