

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  ToolbarAndroid,
  Picker
} from 'react-native';

const Item = Picker.Item;

// var Globals = require('./app/globals').load()


var toolbarActions = [
  {title: 'Search',icon: require('./app/images/searchx.png'), show: 'always', showWithText: true},
  {title: 'Filter', icon: require('./app/images/filterx.png'), show: 'always', showWithText: true},
];

class KnownCircle extends Component {

  constructor () {
    super();
    this.state = {
      actionText : "",
      selected_filter: 'sortby',
      color: 'red',
      mode: Picker.MODE_DIALOG,
      isPickerOn: false,
      isSearchOn: false,

      //SearchBar
      curText: '<No Event>',
      prevText: '<No Event>',
      prev2Text: '<No Event>',
    }
  }

  onActionSelected (position) { // Toolbar Action Select Event
    switch (position) {
      case 0: // Search
        this.setState({
          isSearchOn : true
        });
        break;
      case 1: // Filter
        this.setState({
          isPickerOn : true
        });
        break;
    }
  }
  onIconClicked (value) { // Toolbar Icon click Event
    console.log(value);
  }

  onValueChange (key: string, value: string) { // Picker Value Change Event
   const newState = {};
    newState[key] = value;
    this.setState(newState);
  }

  updateText (text) { // Updates Text on SearchBar
    this.setState((state) => {
      return {
        curText: text,
        prevText: state.curText,
        prev2Text: state.prevText,
      };
    });
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
            title={this.state.isSearchOn ? '' : 'KnownCircle'}>

            {
              this.state.isSearchOn
               ?
                <TextInput
                  autoCapitalize="none"
                  placeholder="Find by business, name, service, city"
                  placeholderTextColor="#fff"
                  underlineColorAndroid = "#f27052"
                  autoCorrect={true}
                  onFocus={() => this.updateText('onFocus')}
                  onBlur={() => this.updateText('onBlur')}
                  onChange={(event) => this.updateText(
                    'onChange text: ' + event.nativeEvent.text
                  )}
                  onEndEditing={(event) => this.updateText(
                    'onEndEditing text: ' + event.nativeEvent.text
                  )}
                  onSubmitEditing={(event) => this.updateText(
                    'onSubmitEditing text: ' + event.nativeEvent.text
                  )}
                  style={styles.searchbar}
                />
               :
                null
            }
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
  searchbar: {
    fontSize: 12,
    padding: 15,
    color: '#fff',
    textAlign: 'center',
    width: 200
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
