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
  textErrorStyles: {
    color: '#e12d39'
  }
});

interface Props {
  areErrorStylesActive: boolean;
  isErrorValid: boolean;
  fieldName: string;
  fieldValue: string;
  typeOfMethod(text: string): void;
}

/**
 * NameField handles the input for any fields that are strictly names.
 */
export default class NameField extends React.PureComponent<Props> {

  public render() {
    const { areErrorStylesActive, isErrorValid, fieldName, fieldValue, typeOfMethod } = this.props;

    return (
      <View>
        { areErrorStylesActive === true && isErrorValid === false ?
        <View>
        { fieldValue.length === 0 ? <Text style={ styles.textErrorStyles }>Field cannot be left blank.</Text> : <Text style={ styles.textErrorStyles }>Only letters are allowed.</Text> }
        </View>
        :
        undefined
        }
        <Text>{`Enter ${fieldName}`}</Text>
        <TextInput
          style={ styles.textInputStyles }
          onChangeText={ typeOfMethod }
          value={ fieldValue }
        />
      </View>
    );
  }
}
