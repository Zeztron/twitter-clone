import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Users from './Users';
import Landing from './Landing';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Users />
          </Route>
          <Route path='/landing'>
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
