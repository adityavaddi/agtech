
import { getRanchProperties } from './RanchModelObject';
import { getDevices,getDevicesCount } from './DeviceModelObject'

var DeviceModel = function(accountsData) {
  // base model
  this.accountName   =  accountsData.accountName,
  this.accountNumber =  accountsData.accountNumber,
  this.contact       =  accountsData.contact,
  this.email         =  accountsData.email,
  this.phone         =  accountsData.phone,
  this.address       = {
    street:accountsData.address.street||'N/A',
    city:accountsData.address.city||'N/A',
    state:accountsData.address.state||'N/A',
    zip:accountsData.address.zip||'N/A',
    country:accountsData.address.country||'N/A'
  },
  this.ranchId       = accountsData.ranchId,
  this.ranchAddress  = {
    street:accountsData.ranchAddress.street||'N/A',
    city:accountsData.ranchAddress.city||'N/A',
    state:accountsData.ranchAddress.state||'N/A',
    zip:accountsData.ranchAddress.zip||'N/A',
    country:accountsData.ranchAddress.country||'N/A'
  },
  this.devices       = getDevices(accountsData.devices)
  this.devicesCount  = getDevicesCount(accountsData.devicesCount)
  this.ranch         = getRanchProperties(accountsData.ranch)
};

module.exports = DeviceModel;
