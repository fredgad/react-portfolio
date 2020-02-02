import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import { Navigation } from './components/navigation/Navigation'
import { Timer } from './components/Timer/Timer'
import { Main } from './components/main/Main'

export const App = ({state, dispatch}) => {

  const { field: { fieldArr }, navigation } = state

  return (
    <div className="App">
      <Switch>
      {/* {...props} */}
        <Route exact path='/' render={() => <Main />} />
        <Route exact path='/timer' render={() => <Timer />} />
      </Switch>

      <Navigation navigation={navigation}
       // props={navArr,
        //   navClass,
        //   navbarClass,
        //   hideCircleClass,
        //   circleClass,
        //   navCheck,
        //   navWall}
        />
    </div>
  )
}
