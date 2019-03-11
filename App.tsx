import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import AddReservation from './screens/AddReservation';
import ViewReservations from './screens/ViewReservations';
import Confirmation from './screens/Confirmation';

const AppNavigator = createStackNavigator(
  {
    View: ViewReservations,
    Add: AddReservation,
    Confirm: Confirmation
  },
  {
    initialRouteName: 'View'
  });

export const AppContainer = createAppContainer(AppNavigator);

export interface ViewReservationsScreenProps {
  navigation: {
    navigate(screen: string): void;
  };
}

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev' }),
  cache: new InMemoryCache()
});

/**
 * App is the entry point for the application.
 */
export default class App extends React.PureComponent {
  public render() {
    return (
      <ApolloProvider client={ client }>
        <AppContainer />
      </ApolloProvider>
    );
  }
}
