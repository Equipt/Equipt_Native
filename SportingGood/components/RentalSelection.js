import React, { Component } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import DatePickerRange from 'react-native-calendario';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import theme from '../../theme.js';
import closeIcon from '../../assets/close.png';
import Notification from '../../Notification';

import loadingIcon from '../../assets/loading.gif';

const moment = extendMoment(Moment);

class RentalSelection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dates: null,
      loading: false
    }
    this.hasSelectedDates = this.hasSelectedDates.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ loading: false });
  }

  takenDay(date) {
    const { rentals } = this.props;
    return rentals.filter(rental => {
      const startDate = new Date(rental.startDate);
      const endDate = new Date(rental.endDate);
      const range = moment().range(startDate, endDate);
      return range.contains(date);
    }).length > 0;
  }

  hasSelectedDates() {
    const { dates } = this.state;
    if(!dates || !dates.startDate) {
      return true;
    }
    return false;
  }

  render() {
    const {
      theme,
      sportingGood,
      rentals,
      rental,
      actions: {
        selectRental,
        rent,
        clearRental
      },
      isVisible = false,
      onClose,
      onSelect,
      customNotificationStyles
    } = this.props;

    const { dates, loading } = this.state;

    return (
      <Modal visible={ isVisible } animationType="slide">
        <Notification customStyles={ customNotificationStyles }/>
        <TouchableOpacity style={ styles.closeIconContainer } onPress={ onClose }>
          <Image source={ closeIcon } style={ styles.closeIcon }/>
        </TouchableOpacity>
        <Text style={ styles.total }>{ rental && rental.total && `$${ rental.total }` }</Text>
        <View style={ styles.modalContainer }>
          <DatePickerRange
            startDate={ dates ? dates.startDate : null }
            endDate={ dates ? dates.endDate : null }
            theme={ theme }
            monthHeight={ 470 }
            renderDayContent={ ({ date, active }) => (
              <Text style={[styles.day, this.takenDay(date) && styles.dayTaken, active && styles.dayActive ]}>
                { moment(date).format('D') }
              </Text>
            )}
            onChange={ range => {
              clearRental();
              this.setState({
                dates: range,
                loading: false
              })
            }}
          />
        </View>
        <TouchableOpacity style={[styles.rentBtnContainer, this.hasSelectedDates() && styles.rentDeactiveBtn]} onPress={ () => {
          this.setState({ loading: true });
          rental ? rent(rental, () => onClose()) : selectRental(dates, true);
        }}>
          {
            loading ?
            <Image style={ styles.loading } source={ loadingIcon }/> :
            <Text style={ styles.btnTxt }>{ rental ? 'Rent' : 'Check Availability' }</Text>
          }
        </TouchableOpacity>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  ...theme,
  modalContainer: {
    paddingTop: 90,
    marginBottom: 70
  },
  total: {
    position: 'absolute',
    top: 55,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5C9059'
  },
  day: {
    width: 40,
    textAlign: 'center',
    padding: 10,
    color: '#5C9059',
    fontWeight: 'bold'
  },
  dayTaken: {
    textDecorationLine: 'line-through',
    color: '#82888a'
  },
  closeIconContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 20,
    height: 20,
    zIndex: 2
  },
  closeIcon: {
    marginTop: 20,
    width: 20,
    height: 20,
  },
  rentBtnContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    top: Dimensions.get('window').height - 70,
    width: '100%',
    height: 70,
    zIndex: 10000,
    backgroundColor: '#5C9059'
  },
  rentDeactiveBtn: {
    opacity: 0.7
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    lineHeight: 0
  },
  loading: {
    width: 50,
    height: 50
  }
});

RentalSelection.defaultProps = {
  theme: {
    nonTouchableDayTextStyle: {
      width: 40,
      padding: 10,
      textAlign: 'center'
    },
    activeDayTextStyle: {
      color: '#fff',
    },
    monthTitleStyle: {
      color: '#5C9059'
    }
  },
  customNotificationStyles: {
    wrapper: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: 80,
      marginBottom: 10,
      minHeight: 50,
      padding: 10,
      backgroundColor: '#EFDFDE',
      zIndex: 100
    },
    text: {
      marginTop: 35,
      color: '#a94442',
      textAlign: 'center'
    },
    closeWrapper: {
      position: 'absolute',
      zIndex: 1,
      right: 5,
      top: 45,
      width: 20,
      height: 20
    }
  }
}

export default RentalSelection;
