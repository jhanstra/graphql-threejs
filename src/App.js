import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjv5gk6pi75rk01eth0gr5vq1/master'
})

const testQuery = gql`
{
  points {
    x
    y
    z
  }
}
`

client.query({
  query: testQuery
}).then(res => console.log(res))

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
