

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Picker
} from 'react-native';

const Item = Picker.Item;

// var ToolbarAndroid = require('ToolbarAndroid');

// var Globals = require('./app/globals').load()


var toolbarActions = [
  {title: 'Filter', icon: require('./app/images/filterx.png'), show: 'always', showWithText: true},
  // {title: 'Filter', show: 'ifRoom'},
  // {title: 'Settings', icon: require('image!ic_settings_black_48dp'), show: 'always'},
];

class KnownCircle extends Component {

  constructor () {
    super();
    this.state = {
      actionText : "",
      selected_filter: 'sortby',
      color: 'red',
      mode: Picker.MODE_DIALOG,
      isPickerOn: true
    }
  }

  onActionSelected (position) {
    if (position === 0) { // Filter
      this.setState({
        isPickerOn : true
      })
    }
    // this.setState({
    //   actionText: 'Selected ' + toolbarActions[position].title,
    // });
  }
  onIconClicked (value) {
    console.log(value);
  }

  onValueChange (key: string, value: string) {
   const newState = {};
    newState[key] = value;
    this.setState(newState);
  }

  render() {
    return (
      <View>
        
        <ToolbarAndroid
            actions={toolbarActions}
            navIcon={require('./app/images/menuh.png')}
            onActionSelected={this.onActionSelected.bind(this)}
            onIconClicked={this.onIconClicked.bind(this)}
            style={styles.toolbar}
            titleColor = "#fff"
            subtitleColor = "#fff"
            title="KnownCircle">
        </ToolbarAndroid>

        <View style={styles.pickerWrapper}>
           {
            this.state.isPickerOn
             ?
            <Picker
              style={styles.picker}
              selectedValue={this.state.selected_filter}
              onValueChange={this.onValueChange.bind(this, 'selected_filter')}
              mode="dropdown">
              <Item style={styles.pickerItem} label="Sort By" value="sortby" />
              <Item style={styles.pickerItem} label="Name" value="name" />
              <Item style={styles.pickerItem} label="Alerts" value="alerts" />
              <Item style={styles.pickerItem} label="Activity" value="activity" />
            </Picker>
             :
            null
          }
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  filter: {
    textAlign: 'right',
    color: '#fff'
  },
  toolbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 360,
    height: 56,
    marginTop: 10,
    // backgroundColor: '#ccc',
    backgroundColor: '#1C2938',
  },
  pickerWrapper: {
    width: 80,
    marginLeft: 294,
    marginTop: 30,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  picker: {
    color: '#1C2938',
  },
  pickerItem : {
    height: 50,
    width: 20,
    borderWidth: 1,
    borderColor: "#ccc"
  }
});

AppRegistry.registerComponent('KnownCircle', () => KnownCircle);
