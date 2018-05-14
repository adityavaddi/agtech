import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  DatePickerAndroid,
  DatePickerIOS,
  Platform,
  Animated
} from 'react-native';
import Style from '../styles/blocks/style';
import Moment from 'moment';

const FORMATS = {
  'date': 'YYYY-MM-DD'
};

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.getDate(),
      modalVisible: false,
      animatedHeight: new Animated.Value(0)
    };

    this.datePicked = this.datePicked.bind(this);
    this.onPressDate = this.onPressDate.bind(this);
    this.onPressCancel = this.onPressCancel.bind(this);
    this.onPressConfirm = this.onPressConfirm.bind(this);
    this.onDatePicked = this.onDatePicked.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    const {height} = this.props;
    this.setState({modalVisible: visible});

    if (visible) {
      Animated.timing(
        this.state.animatedHeight,
        {
          toValue: height
        }
      ).start();
    } else {
      this.setState({
        animatedHeight: new Animated.Value(0)
      });
    }
  }

  onPressCancel() {
    this.setModalVisible(false);
  }

  onPressConfirm() {
    this.datePicked();
    this.setModalVisible(false);
  }

  getDate(date = this.props.date) {
    const {mode, minDate, format = FORMATS[mode]} = this.props;

    if (!date) {
      let now = new Date();
      if (minDate) {
        let _minDate = this.getDate(minDate);
        if (now < _minDate) {
          return _minDate;
        }
      }
      return now;
    }

    if (date instanceof Date) {
      return date;
    }

    return Moment(date, format).toDate();
  }

  getDateStr(date = this.props.date) {
    const {mode, format = FORMATS[mode]} = this.props;

    if (date instanceof Date) {
      return Moment(date).format(format);
    } else {
      return Moment(this.getDate(date)).format(format);
    }
  }

  datePicked() {
    if (typeof this.props.onDateChange === 'function') {
      this.props.onDateChange(this.getDateStr(this.state.date), this.state.date);
    }
  }

  getTitleElement() {
    const {date, placeholder} = this.props;

    if (!date && placeholder) {
      return (<Text> {placeholder} </Text>);
    }
    return (<Text> {this.getDateStr()} </Text>);
  }

  onDatePicked({action, year, month, day}) {
    if (action !== DatePickerAndroid.dismissedAction) {
      this.setState({
        date: new Date(year, month, day)
      });
      this.datePicked();
    }
  }

  onPressDate() {
    if (this.props.disabled) {
      return true;
    }

    this.setState({
      date: this.getDate()
    });

    if (Platform.OS === 'ios') {
      this.setModalVisible(true);
    } else {

      const {mode, format = FORMATS[mode], minDate, is24Hour = !format.match(/h|a/)} = this.props;

      if (mode === 'date') {
        DatePickerAndroid.open({
          date: this.state.date,
          minDate: minDate && this.getDate(minDate)
        }).then(this.onDatePicked);
      }
    }
  }

  render() {
    const {
      mode,
      style,
      disabled,
      minDate
    } = this.props;

    const dateInputStyle = [
      Style.dateInput,
      disabled && Style.disabled
    ];

    return (
      <TouchableOpacity
        style={[Style.dateTouch, style]}
        onPress={this.onPressDate}
      >
        <View style={Style.dateTouchBody}>
          <View style={dateInputStyle}>
            {this.getTitleElement()}
          </View>

          {Platform.OS === 'ios' && <Modal
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {this.setModalVisible(false);}}
          >
            <View style={{flex: 1}} >
              <TouchableOpacity
                style={Style.datePickerMask}
                onPress={this.onPressCancel}
              >
                <TouchableOpacity style={{flex: 1}} >
                  <Animated.View
                    style={[Style.datePickerCon, {height: this.state.animatedHeight} ]}
                  >
                    <DatePickerIOS
                      date={this.state.date}
                      mode={mode}
                      minimumDate={minDate && this.getDate(minDate)}
                      onDateChange={(date) => this.setState({date: date})}
                      style={Style.datePicker}
                    />

                    <TouchableOpacity onPress={this.onPressCancel} style={Style.btnText} >
                      <Text> CANCEL </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.onPressConfirm} style={[Style.btnText, Style.btnConfirm ]} >
                      <Text style={Style.btnTextText}> CONFIRM </Text>
                    </TouchableOpacity>

                  </Animated.View>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </Modal>}
        </View>
      </TouchableOpacity>
    );
  }
}

DatePicker.defaultProps = {
  mode: 'date',
  date: '',
  height: 240,
  disabled: false,
  placeholder: ''
 };

DatePicker.propTypes = {
  mode: React.PropTypes.oneOf(['date']),
  date: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.instanceOf(Date)]),
  format: React.PropTypes.string,
  minDate: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.instanceOf(Date)]),
  height: React.PropTypes.number,
  disabled: React.PropTypes.bool,
  onDateChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  is24Hour: React.PropTypes.bool
};

export default DatePicker;
