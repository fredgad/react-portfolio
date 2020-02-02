import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { useReducer } from 'react'
import reduser from './bll/reducer'    
import { store } from './bll/state' 
import { App } from './App'
import './index.scss' 
import * as serviceWorker from './serviceWorker'

const Whole = () => {
    const [state, dispatch] = useReducer(reduser, store)   

    return ( 
        <BrowserRouter>
            <App state={state} dispatch={dispatch} />
        </BrowserRouter> 
    )
}

ReactDOM.render(<Whole />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister() 
