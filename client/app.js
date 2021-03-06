import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Navbar} from './components'
import NavMobile from './components/navbarMobile'
import Routes from './routes'

const App = () => {
  let mobile

  if (window.matchMedia('(display-mode: standalone)').matches) {
    mobile = false
  } else {
    mobile = true
  }

  return (
    <BrowserRouter>
      <div className="main-app">
        {mobile ? null : (
          <button id="btnAdd">
            <strong>Install Picket!</strong>
          </button>
        )}
        {mobile ? (
          <Route path="/" component={NavMobile} />
        ) : (
          <Route path="/" component={Navbar} />
        )}

        <Route path="/" component={Routes} />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </BrowserRouter>
  )
}

export default App
