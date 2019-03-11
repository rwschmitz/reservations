import { StyleSheet } from 'react-native';

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  flatListContainerStyle: {
    marginBottom: 160
  },
  introContainer: {
    marginBottom: 64
  },
  loadingContainer: {
    paddingTop: 16
  },
  reservationContainer: {
    paddingBottom: 64,
    width: '100%'
  }
});

export { containerStyles };
