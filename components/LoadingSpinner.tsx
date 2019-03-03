import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  textStyle: {
    color: '#333'
  }
});

/**
 * LoadingSpinner -- Display this component when we're waiting for our GraphQL queries to resolve.
 */
export default class LoadingSpinner extends React.PureComponent {
  public render() {
    return (
      <View style={ styles.container }>
        <ActivityIndicator size='large' color='#5449d2' />
        <View style={ { paddingTop: 16 } }>
          <Text style={ styles.textStyle }>Loading, one moment please!</Text>
        </View>
      </View>
    );
  }
}
