import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import store from './redux/store'

import Interviews from './components/interviews/Interviews'
import InterviewShow from './components/interviews/InterviewShow'
import InterviewsNew from './components/interviews/InterviewsNew'
import InterviewEdit from './components/interviews/InterviewEdit'
import InterviewDelete from './components/interviews/InterviewDelete'

function App(){
  return(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            exact path = '/interviews/new'
            component = {InterviewsNew}
          />
          <Route
            exact path = '/interviews/:interviewId/edit'
            component = {InterviewEdit}
          />
          <Route
            exact path = '/interviews/:interviewId/delete'
            component = {InterviewDelete}
          />
          <Route
            exact path = '/interviews/:interviewId'
            component = {InterviewShow}
          />
          <Route 
            exact path = '/interviews' 
            component = {Interviews}
          />
          
          <Redirect to = '/interviews' />
        </Switch>
      </Router>
    </Provider> 

  )
}
export default App