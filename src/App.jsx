import React from 'react'
import { Route, Switch } from 'react-router'
import BasicQuery from './components/BasicQuery'
import InfinteQuery from './components/InfinteQuery'
import Navbar from './layout/Navbar'
import PaginatedQuery from './components/PaginatedQuery'

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto mt-8">
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
    </React.Fragment>
  )
}

export default App
