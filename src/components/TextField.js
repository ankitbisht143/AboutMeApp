import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native'

import {Input, Label, ListItem, InputGroup, Icon} from 'native-base';
import {PropTypes} from 'prop-types';
import * as fontFamily from '../constants/fontFamily';

export default class TextField extends PureComponent{
  render(){
    const {placeholder, icon, secureTextEntry, autoCapitalize, keyboardType, onChangeText} = this.props;
    const {textStyle, iconStyle} = styles;
    return(
      <ListItem>
        <InputGroup>
          <Icon type="FontAwesome" name={icon} style={iconStyle}/>
          <Input style={textStyle} autoCapitalize={autoCapitalize} keyboardType={keyboardType} placeholder={placeholder}
            secureTextEntry={secureTextEntry} onChangeText={onChangeText}/>
        </InputGroup>
      </ListItem>
    )
  }
}

TextField.propTypes = {
  placeholder:PropTypes.string.isRequired,
  secureTextEntry:PropTypes.bool,
  icon:PropTypes.string,
  autoCapitalize:PropTypes.string,
  keyboardType:PropTypes.string,
  onChangeText:PropTypes.func
}

TextField.defaultPropTypes = {
  secureTextEntry:false,
  autoCapitalize:'none',
  keyboardType:'default'
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize:16,
    fontFamily:fontFamily.ARGENTCF_REGULAR
  },
  iconStyle:{
    fontSize:16,
    color:'gray'
  }
})
