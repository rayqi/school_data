// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import createLogger from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// import student from './students_reducer'
// import grade from './grades_reducer'

// const reducer = combineReducers({ student, grade })
// const middleware = composeWithDevTools(
//     applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
// )
// const initialState = localStorage.state ? JSON.parse(localStorage.state) : undefined
// const store = createStore(reducer, initialState, middleware)

// store.subscribe(() => {
//     localStorage.state = JSON.stringify(store.getState())
// })

// export default store
