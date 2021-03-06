import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, UserHome} from './components'
import {Signup} from './components/auth-form-su'
import {me} from './store'
import HomePage from './Pages/Homepage'
import AllEvents from './components/AllEvents'
import SingleEvent from './components/SingleEvent/SingleEvent'
import Profile from './Pages/Profile'
import AddEvent from './Pages/AddEvent'
import UpdateEvent from './Pages/UpdateEvent'
import EventsByCategory from './components/EventByCategory'
import SearchPage from './Pages/searchPage'
import basicEventForm from './components/basicEventForm'
import EventFormThree from './components/eventFormThree'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/userhome" component={UserHome} />
        <Route exact path="/profile" component={UserHome} />
        <Route exact path="/events" component={AllEvents} />
        <Route exact path="/events/:eventId" component={SingleEvent} />
        <Route exact path="/home" component={Profile} />
        <Route
          exact
          path="/events/category/:eventCategory"
          component={EventsByCategory}
        />
        <Route exact path="/search" component={SearchPage} />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/addEvent" component={AddEvent} />
        <Route exact path="/updateEvent/:eventId" component={UpdateEvent} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired
  // isLoggedIn: PropTypes.bool.isRequired
}
