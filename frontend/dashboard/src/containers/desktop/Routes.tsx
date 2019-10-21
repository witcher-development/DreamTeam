import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthDesktop as Auth } from '@frontend/auth/src'
import { ListDesktop as Users } from '@frontend/users'
import { ProfileDesktop as Profile } from '@frontend/profile'
import App from './App'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <App>
      <Switch>
        <Route path='/' exact component={Users} />
        <Route path='/profile' exact component={Profile} />
      </Switch>
    </App>
  </Switch>
)

export default Routes
