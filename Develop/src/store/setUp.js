// import node modules
import { Platform } from 'react-native';
// import project files
// dev
import devBase from '../settings/dev/base';
import deviOS from '../settings/dev/ios';
import devAndroid from '../settings/dev/android';
// prod
import prodBase from '../settings/prod/base';
import prodiOS from '../settings/prod/ios';
import prodAndroid from '../settings/prod/android';

export default {
    load() {
      if (__DEV__) {
        // var obj = Object.assign({},devBase, deviOS);
        // return obj  (OR)  We can do in both the ways
        return Object.assign({}, devBase, Platform.select({
          ios: deviOS,
          android: devAndroid,
        }));
      }

      return Object.assign({}, prodBase, Platform.select({
        ios: prodiOS,
        android: prodAndroid,
      }));
    }
};
