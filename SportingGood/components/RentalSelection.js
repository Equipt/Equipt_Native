import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import DatePickerRange from 'react-native-calendario';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import theme from '../../theme.js';
import closeIcon from '../../assets/close.png';
import Notification from '../../Notification';

const moment = extendMoment(Moment);

const RentalSelection = ({
  theme,
  sportingGood,
  rentals,
  rental,
  actions,
  isVisible = false,
  onClose,
  onSelect,
  customNotificationStyles
}) => (
  <Modal visible={ isVisible }>
    <Notification customStyles={ customNotificationStyles }/>
    <TouchableOpacity style={ styles.closeIconContainer } onPress={ onClose }>
      <Image source={ closeIcon } style={ styles.closeIcon }/>
    </TouchableOpacity>
    <View style={ styles.modalContainer }>
      <DatePickerRange
        startDate={ rental ? rental.startDate : null }
        endDate={ rental ? rental.endDate : null }
        theme={ theme }
        renderDayContent={ ({ date, active }) => (
          <Text style={[styles.day, takenDay(rentals, date) && styles.dayTaken, active && styles.dayActive ]}>
            { moment(date).format('D') }
          </Text>
        )}
        onChange={ range => actions.selectRental(range, sportingGood, true) }
      />
    </View>
    <TouchableOpacity style={ styles.rentBtnContainer } onPress={ () => actions.rent(rental) }>
      <Text style={[ styles.successBtn, !rental && styles.deactiveBtn ]}>Rent</Text>
    </TouchableOpacity>
  </Modal>
)

const takenDay = (rentals, date) => {
  return rentals.filter(rental => {
    const startDate = new Date(rental.startDate);
    const endDate = new Date(rental.endDate);
    const range = moment().range(startDate, endDate);
    return range.contains(date);
  }).length > 0;
}

const styles = StyleSheet.create({
  ...theme,
  modalContainer: {
    paddingTop: 90,
    marginBottom: 70
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
    left: 0,
    top: Dimensions.get('window').height - 64,
    width: '100%',
    zIndex: 10000
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
