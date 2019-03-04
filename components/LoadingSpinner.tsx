import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  loadingContainer: {
    paddingTop: 16
  },
  textStyle: {
    color: '#333'
  }
});

const primaryColor: string = '#5449d2';

/**
 * LoadingSpinner -- Display this component when we're waiting for our GraphQL queries/mutations to resolve.
 */
export default class LoadingSpinner extends React.PureComponent {
  public render() {
    return (
      <View style={ styles.container }>
        <ActivityIndicator size='large' color={`${primaryColor}`} />
        <View style={ styles.loadingContainer }>
          <Text style={ styles.textStyle }>Loading, one moment please!</Text>
        </View>
      </View>
    );
  }
}
