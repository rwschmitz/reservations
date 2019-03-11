import { StyleSheet } from 'react-native';

const textStyles = StyleSheet.create({
  introHeadlineTextStyle: {
    textAlign: 'center'
  },
  introTextStyle: {
    fontSize: 16,
    paddingBottom: 4
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: '700'
  },
  textStyle: {
    color: '#333'
  },
  textInputStyles: {
    height: 40,
    borderColor: '#5449d2',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 16,
    width: 300
  },
  textInputEmphasisStyles: {
    fontWeight: '700'
  },
  textErrorStyles: {
    color: '#e12d39'
  },
  valueStyle: {
    fontWeight: '300'
  }
});

export { textStyles };
