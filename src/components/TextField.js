import React, {PureComponent} from 'react';

import {Input, Label, ListItem, InputGroup, Icon} from 'native-base';
import {PropTypes} from 'prop-types';

export default class TextField extends PureComponent{
  render(){
    const {placeholder, icon, secureTextEntry, autoCapitalize, keyboardType} = this.props;
    return(
      <ListItem>
        <InputGroup>
          <Icon name={icon} />
          <Input autoCapitalize={autoCapitalize} keyboardType={keyboardType} placeholder={placeholder}
            secureTextEntry={secureTextEntry}/>
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
  keyboardType:PropTypes.string
}

TextField.defaultPropTypes = {
  secureTextEntry:false,
  autoCapitalize:'none',
  keyboardType:'default'
}
