import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import theme from '../../theme.js';

const Profile = ({
  session,
  actions
}) => (
  <View style={ styles.container }>
    <Text>{session.firstname} {session.lastname}</Text>
    <TouchableOpacity onPress={ actions.signOut }>
      <Text>Logout</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  ...theme
});

export default Profile;
