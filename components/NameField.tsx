import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { textStyles } from '../styles/text/textStyles';

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
        // If error is active, check which type of error to throw
        <View>
        { fieldValue.length === 0 ? <Text style={ textStyles.textErrorStyles }>Field cannot be left blank.</Text> : <Text style={ textStyles.textErrorStyles }>Only letters are allowed.</Text> }
        </View>
        :
        undefined
        }
        <Text>{`Enter ${fieldName}`}</Text>
        <TextInput
          style={ textStyles.textInputStyles }
          onChangeText={ typeOfMethod }
          value={ fieldValue }
        />
      </View>
    );
  }
}
