import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider, useQuery, useMutation } from 'react-apollo-hooks'
import gql from 'graphql-tag'
import './App.css';

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjv5gk6pi75rk01eth0gr5vq1/master'
})

const GET_POINTS = gql`
{
  points {
    x
    y
    z
  }
}
`

const GENERATE_POINTS = gql`
 mutation AddPoint($x: Float, $y: Float, $z: Float) {
  createPoint(data:{
    x: $x,
    y: $y,
    z: $z,
  }) {
    x,
    y,
    z
  }
}
`

const random = () => ({
  variables: {
    x: Math.round(Math.random() * 500),
    y: Math.round(Math.random() * 500),
    z: Math.round(Math.random() * 500),
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Fun />
    </ApolloProvider>
  );
}

const Fun = props => {
  const { data, error, loading } = useQuery(GET_POINTS)
  const generatePoints = useMutation(GENERATE_POINTS)
  if (loading) return <p>loading</p>
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {data.points.map(point => <li>{point.x} {point.y} {point.z}</li>)}
        </ul>
        <button onClick={generatePoints(random())}>Generate Point</button>
      </header>
    </div>
  )
}

export default App;
