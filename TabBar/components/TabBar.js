import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Notification from '../../Notification';

export default class TabBar extends Component {

  constructor(props) {
    super(props);
    const { state: { index, routes } } = props.navigation;
    this.state = {
      currentTab: routes[index]
    }
    this.renderSignedInBar = this.renderSignedInBar.bind(this);
    this.renderSignedOutBar = this.renderSignedOutBar.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { state: { index, routes } } = newProps.navigation;
    this.setState({ currentTab: routes[index] });
  }

  render() {
    const { isSignedIn } = this.props;
    return isSignedIn ? this.renderSignedInBar() : this.renderSignedOutBar();
  }

  renderIcon(iconStyles) {
    return (
      <Image style={[styles.tabImage, iconStyles]} source={require('./../../assets/sprite.png')}/>
    );
  }

  renderSignedInBar() {
    const { currentTab } = this.state;
    const { navigation: { navigate }, actions } = this.props;
    return (
      <View>
        <Notification/>
        <View style={ styles.wrapper }>
          <TouchableOpacity style={[ styles.tab, currentTab.key === 'SportingGoods' && styles.disabled ]} onPress={ () => navigate('SportingGoods') }>
            { this.renderIcon(styles.findImage) }
            <Text style={[styles.text, styles.smallTab]}>Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.tab, currentTab.key === 'Rentals' && styles.disabled ]} onPress={ () => navigate('Rentals') }>
            { this.renderIcon(styles.schedule) }
            <Text style={[styles.text, styles.smallTab]}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.tab, currentTab.key === 'OwnedGoods' && styles.disabled ]} onPress={ () => navigate('OwnedGoods') }>
            { this.renderIcon() }
            <Text style={[styles.text, styles.smallTab]}>My Items</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.tab, currentTab.key === 'Profile' && styles.disabled ]} onPress={ () => navigate('Profile') }>
            { this.renderIcon() }
            <Text style={[styles.text, styles.smallTab]}>Profile</Text>
          </TouchableOpacity>
s        </View>
      </View>
    )
  }

  renderSignedOutBar() {
    const { currentTab } = this.state;
    const { navigation: { navigate } } = this.props;
    return (
      <View>
        <Notification/>
        <View style={ styles.wrapper }>
          <TouchableOpacity style={[ styles.tab, currentTab.key === 'Login' && styles.disabled ]} onPress={ () => navigate('Login') }>
            <Text style={ styles.text }>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.tab, currentTab.key === 'Register' && styles.disabled ]} onPress={ () => navigate('Register') }>
            <Text style={ styles.text }>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: -1,
    marginRight: -1,
  },
  tabImage: {
    width: 30,
    height: 30
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    padding: 15,
    backgroundColor: '#5C9059',
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD',
    borderLeftWidth: 1,
    borderLeftColor: '#DDDDDD'
  },
  smallTab: {
    fontSize: 12,
    marginTop: 5
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  disabledBtn: {
    opacity: 0.5
  }
});
