import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Users from './Users';
import Landing from './Landing';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });
const authLink = setContext(async (req, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/login'>
            <Login />
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
