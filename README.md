# React Query Example

This project is a demonstration of how to use [React Query](https://react-query.tanstack.com) library to perform the following frontend API requests:

- Basic query
- Paginated query
- Infinite query
- Create, Update and Delete requests

This demo project is setup with:

- [Vite](https://vitejs.dev/)
- [WindiCSS](https://windicss.org/)
- [React Hook Form](https://react-hook-form.com/)
- [React Modal](http://reactcommunity.org/react-modal/)
- [Axios](https://github.com/axios/axios)

I've written a breakdown article for this project which is available on [Sitepoint](https://www.sitepoint.com/blog/).

## Run Locally

Clone the project

```bash
  git clone git@github.com:brandiqa/react-query-demo.git
```

Go to the project directory

```bash
  cd react-query-demo
```

Install dependencies

```bash
  pnpm install # you can also use npm or yarn
```

Setup database file

```bash
cp api/sample.db.json api/db.json
```

Start the `json-server`

```bash
  pnpm run json-server
```

Launch another terminal and start the Vite server

```bash
  pnpm run dev
```

Head over to your browser and open the URL `localhost:3000` to access the application

## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2021 Michael Wanyoike

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
