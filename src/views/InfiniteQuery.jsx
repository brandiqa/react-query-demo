import React from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

function InfiniteQuery() {
  const pageLimit = 5

  const fetchUsers = ({ pageParam = 1 }) =>
    axios.get(
      `http://localhost:3004/users?_page=${pageParam}&_limit=${pageLimit}`
    )

  const parseLinkHeader = (linkHeader) => {
    const linkHeadersArray = linkHeader
      .split(', ')
      .map((header) => header.split('; '))
    const linkHeadersMap = linkHeadersArray.map((header) => {
      const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '')
      const thisHeaderUrl = header[0].slice(1, -1)
      return [thisHeaderRel, thisHeaderUrl]
    })
    return Object.fromEntries(linkHeadersMap)
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery('infiniteUsers', fetchUsers, {
    getNextPageParam: (lastPage) => {
      // The following code block is specific to json-server api
      const nextPageUrl = parseLinkHeader(lastPage.headers.link)['next']
      if (nextPageUrl) {
        const queryString = nextPageUrl.substring(
          nextPageUrl.indexOf('?'),
          nextPageUrl.length
        )
        const urlParams = new URLSearchParams(queryString)
        const nextPage = urlParams.get('_page')
        return nextPage
      } else {
        return undefined
      }
    },
  })

  let userList

  if (data) {
    userList = data.pages.map((page, index) => (
      <React.Fragment key={index}>
        {page.data.map((user) => (
          <li key={user.id}>
            {user.id}. {user.first_name} {user.last_name}
          </li>
        ))}
      </React.Fragment>
    ))
  }

  return (
    <div>
      <h2>Infinite Query</h2>
      <div>
        {error && <div>An error occurred: {error.message}</div>}

        {isFetchingNextPage && <div>Fetching Next Page...</div>}

        {status === 'success' && <ul className="my-4 ml-4">{userList}</ul>}
      </div>
      <div>
        <button
          className="btn btn-load"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          Load More...
        </button>
      </div>
    </div>
  )
}

export default InfiniteQuery
