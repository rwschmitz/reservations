import gql from 'graphql-tag';
import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider, graphql } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StyleSheet, Text, View } from 'react-native';
import TestView from './components/TestView';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev' }),
  cache: new InMemoryCache()
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

/**
 * App is the entry point for the application.
 */
export default class App extends React.PureComponent {
  public render() {
    return (
      <ApolloProvider client={ client }>
        <View style={ styles.container }>
          <TestView />
        </View>
      </ApolloProvider>
    );
  }
}
