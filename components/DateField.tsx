import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
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
  }
});

interface Props {
  areErrorStylesActive: boolean;
  isErrorValid: boolean;
  isRangeValid: boolean;
  fieldName: string;
  fieldValue: string;
  typeOfMethod(text: string): void;
}

/**
 * DateField handles the input for any fields that are dates.
 */
export default class DateField extends React.PureComponent<Props> {

  public render() {
    const { areErrorStylesActive, isErrorValid, fieldName, isRangeValid, fieldValue, typeOfMethod } = this.props;

    return (
      <View>
        { areErrorStylesActive === true && isErrorValid === false ?
          <View>
            { fieldValue.length === 0 ? <Text style={ styles.textErrorStyles }>Field cannot be left blank.</Text> : <Text style={ styles.textErrorStyles }>Format of date is incorrect.</Text> }
          </View>
          :
          undefined
        }

        { areErrorStylesActive === true && isErrorValid === true ?
          <View>
            { isRangeValid === false ? <Text style={ styles.textErrorStyles }>{`${fieldName} cannot be after departure date` }</Text> : undefined }
          </View>
          :
          undefined
        }
        <Text>{ `Enter ${fieldName} ` }<Text style={ styles.textInputEmphasisStyles }>(YYYY/MM/DD)</Text></Text>
        <TextInput
          style={ styles.textInputStyles }
          onChangeText={ typeOfMethod }
          value={ fieldValue }
        />
      </View>
    );
  }
}
