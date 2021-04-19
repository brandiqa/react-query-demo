import React from 'react'
import { Route, Switch } from 'react-router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Navbar from './layout/Navbar'
import BasicQuery from './views/BasicQuery'
import InfinteQuery from './views/InfinteQuery'
import PaginatedQuery from './views/PaginatedQuery'

function App() {
  // Create a client
  const queryClient = new QueryClient()

  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto mt-8">
        <QueryClientProvider client={queryClient}>
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
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </main>
    </React.Fragment>
  )
}

export default App
