import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Colors from '../../../../Themes/Colors/colors.json';

class SearchForm extends React.Component {
  render() {
    return (
      <View style={styles.viewForm}>
        <TextInput placeholder="Recherche" style={styles.FieldInput} />
        <TouchableOpacity style={styles.searchBtn}>
          <Text style={styles.FieldText}>Recherche</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewForm: {
    flex: 5,
    flexDirection: 'row',
  },
  FieldInput: {
    flex: 3,
    backgroundColor: Colors.GREY_INPUT,
    marginRight: 5,
    borderRadius: 5,
    paddingLeft: 15,
  },
  searchBtn: {
    flex: 2,
    backgroundColor: Colors.BLUE_PRIMARY,
    //padding: ,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    //marginTop: 30,
  },
  FieldText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default SearchForm;
