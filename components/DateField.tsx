import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { textStyles } from '../styles/text/textStyles';

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
          // If error is active, check which type of error to throw
          <View>
            { fieldValue.length === 0 ? <Text style={ textStyles.textErrorStyles }>Field cannot be left blank.</Text> : <Text style={ textStyles.textErrorStyles }>Format of date is incorrect.</Text> }
          </View>
          :
          undefined
        }

        { areErrorStylesActive === true && isErrorValid === true ?
          // Ensure departure date is after arrival date
          <View>
            { isRangeValid === false && fieldName === 'Arrival Date' ? <Text style={ textStyles.textErrorStyles }>{`${fieldName} cannot be after departure date` }</Text> : undefined }
          </View>
          :
          undefined
        }
        <Text>{ `Enter ${fieldName} ` }<Text style={ textStyles.textInputEmphasisStyles }>(MM/DD/YYYY)</Text></Text>
        <TextInput
          style={ textStyles.textInputStyles }
          onChangeText={ typeOfMethod }
          value={ fieldValue }
        />
      </View>
    );
  }
}
