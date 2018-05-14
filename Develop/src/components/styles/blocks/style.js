import {StyleSheet} from 'react-native';

let style = StyleSheet.create({
  dateTouch: {
    width:142
  },
  dateTouchBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateInput: {
    flex: 1
  },
  datePickerMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077'
  },
  datePickerCon: {
    backgroundColor: '#ffffff',
    height: 0,
    overflow: 'hidden'
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor:'red',
    justifyContent: 'center'
  },
  btnConfirm: {
    right: 0
  },
  datePicker: {
    marginTop: 42,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  },
  disabled: {
    backgroundColor: '#eee'
  }

});

export default style;
