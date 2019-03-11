import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { containerStyles } from '../styles/containers/containerStyles';
import { textStyles } from '../styles/text/textStyles';
import { colorStyles } from '../styles/colors/colorStyles';

interface Props {
  copy: string;
}

/**
 * LoadingSpinner -- Display this component when we're waiting for our GraphQL queries/mutations to resolve.
 */
export default class LoadingSpinner extends React.PureComponent<Props> {
  public render() {
    const { copy } = this.props;

    return (
      <View style={ containerStyles.container }>
        <ActivityIndicator size='large' color={`${colorStyles.primaryColor.color}`} />
        <View style={ containerStyles.loadingContainer }>
          <Text style={ textStyles.textStyle }>{ copy }</Text>
        </View>
      </View>
    );
  }
}
