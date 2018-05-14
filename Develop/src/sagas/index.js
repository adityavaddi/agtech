import { authenticate } from './authenticate';
//import { listOfDevices } from './getDeviceSaga';
import {listOfAccounts}  from './searchAccountsSaga'
import {deviceToDelete} from './deleteDeviceSaga'
import {saveVineyardData} from './saveVineyardSaga'
import {saveVineyardDeviceData} from './saveVinDeviceSaga'
import {updateVineyardDeviceData} from './updateVinDeviceSaga'
import {saveBlockData} from './createBlockSaga'
import {saveBlockParameterData} from './createBlockParameterSaga'
import {saveBlockProductionData} from './createBlockProductionSaga'
import {saveBlockSoilInfoData} from './createBlockSoilInfoSaga'
import {saveBlockAnnualData} from './createBlockAnnualSaga'
import {saveBlockKeyDatesData} from './createBlockkeyDatesSaga'
import {updateBlockParameterData} from './updateBlockParameterSaga'
import {updateBlockProductionData} from './updateBlockProductionSaga'
import {updateBlockSoilInfoData} from './updateBlockSoilInfoSaga'
import {updateBlockAnnualData} from './updateBlockAnnualSaga'
import {updateBlockkeyDatesData} from './updateBlockkeyDatesSaga'
import {saveBlockDeviceData} from './saveBlockDeviceSaga'
import {updateBlockDeviceData} from './updateBlockDeviceSaga'
import {deleteBlockData} from './deleteBlockSaga'



export default [
  authenticate,
  //listOfDevices,
  listOfAccounts,
  deviceToDelete,
  saveVineyardData,
  saveVineyardDeviceData,
  updateVineyardDeviceData,
  saveBlockData,
  saveBlockParameterData,
  saveBlockProductionData,
  saveBlockSoilInfoData,
  saveBlockAnnualData,
  saveBlockKeyDatesData,
  updateBlockParameterData,
  updateBlockProductionData,
  updateBlockSoilInfoData,
  updateBlockAnnualData,
  updateBlockkeyDatesData,
  updateBlockDeviceData,
  saveBlockDeviceData,
  deleteBlockData


];
