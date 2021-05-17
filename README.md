This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First run
```
yarn install
```
Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Home Page
![image](https://user-images.githubusercontent.com/10894677/118393362-75c96c00-b647-11eb-8094-881cd437cbd9.png)
Profile Page
![image](https://user-images.githubusercontent.com/10894677/118393389-88dc3c00-b647-11eb-864e-03607bffe423.png)

Architecture 
```
 The high level structure
    Components - Store components for pages as well as reusable components
      humanPage - Basic Component to feed the Individual user INFO page
      search - Reusable Components for Search functions
        searchCard - Reusable Card for items in Search List
      userCard - Reusable Card for displaying users
    Pages - Has the pages following next JS structure
      People - Has the Page for indivudial user Info
    Public - Contains favicons and logos (default NEXT JS)
    Redux - All Redux related logic
      Ducks - uses Ducks https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/ methodology
        user - actions and reducer for user functions
      Sagas - sagas watchers api handlers
        handler - generators for saga calls
          user  - user related generators
        requests - external api calls
          user - external api call to fetch users
        rootSaga - watcher for actions
      configureStore - file to set up store
    Styles - default with NEXT JS
    Utilities - Harbour all ulitity and reusable functions
      sort - function to take a list and sort based on key
   ```    

Improvements

1) Add ENV file and support for maintaining things like External URLS
2) Add Pagination for fetched data
3) Move Styled components to a different file style.js
4) Absolute imports to avoid accessing file paths directly
5) composeWithDevTools conditionally by development ENV vs PROD
