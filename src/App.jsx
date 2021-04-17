import React from 'react'
import { Route, Switch } from 'react-router'
import BasicQuery from './components/BasicQuery'
import InfinteQuery from './components/InfinteQuery'
import Navbar from './components/Navbar'
import PaginatedQuery from './components/PaginatedQuery'

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <BasicQuery />
          </Route>
          <Route path="/paginated">
            <PaginatedQuery />
          </Route>
          <Route path="/infinite">
            <InfinteQuery />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
