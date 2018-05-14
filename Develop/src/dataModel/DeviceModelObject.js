export function getDevices(devices){

  var devicesArray = []


  for(var key in devices){

  const deviceType  = devices[key].type
  const deviceState = devices[key].state
      if(deviceState == 'active'){
      switch (deviceType){

        case 'gateway':
        case 'weatherstation':

            this.deviceProperties = {
              name:devices[key].name,
              type:devices[key].type,
              id:devices[key].id,
              serialNumber:devices[key].serialNumber,
              model:'N/A',
              manufacturer:'N/A',
              image:'N/A',
              state: devices[key].state,
              edited:devices[key].edited,
              location:{
                  latitude:devices[key].location.latitude,
                  longitude:devices[key].location.longitude,
                  elevation:devices[key].location.elevation,
              },
              ancestor:(devices[key].ancestor == null)?devices[key].ancestor:getAncestors(devices[key].ancestor),
              attributes:(devices[key].attributes == null)?devices[key].attributes:getAttributes(devices[key].attributes),
              measuredEntity:getMeasuredEntity(devices[key].measuredEntity)
            }


           devicesArray.push(this.deviceProperties)
           break;

        case 'flowmeter':

            this.deviceProperties = {
              name:devices[key].name,
              type:devices[key].type,
              id:devices[key].id,
              serialNumber:devices[key].serialNumber,
              model:'N/A',
              manufacturer:'N/A',
              image:'N/A',
              state: devices[key].state,
              edited:devices[key].edited,
              location:{
                  latitude:devices[key].location.latitude,
                  longitude:devices[key].location.longitude,
                  elevation:devices[key].location.elevation,
              },
              ancestorPath:devices[key].ancestorPath,
              ancestor:getAncestors(devices[key].ancestor),
              attributes:getAttributes(devices[key].attributes),
              measuredEntity:getMeasuredEntity(devices[key].measuredEntity)

            }
            //console.log("this.properties",this.properties);

            devicesArray.push(this.deviceProperties)
           break;

           default:

      }
    }

}
//console.log("Devices Array with active devices",devicesArray);

return devicesArray;

}



export function getDevicesCount(devicesCount){


  var gateway = 0;
  var weatherstation = 0;
  var flowmeter = 0;


     for(var key in devicesCount){

       const deviceType  = devicesCount[key].type
       const deviceState = devicesCount[key].state
           if(deviceState == 'active'){
           switch (deviceType){


             case 'gateway':
                gateway = gateway+1;
                break;
             case 'weatherstation':
                weatherstation = weatherstation+1;
                break;
             case 'flowmeter':
                flowmeter = flowmeter+1;
                break;
              default:

           }
     }

    }
        var devicesCount = {
          "gateway":gateway,
          "weatherstation":weatherstation,
          "flowmeter":flowmeter
        }

      //console.log("devicesCount",devicesCount);
    return devicesCount;
    }

//common function for anscestors
function getAncestors(ancestors){
    var deviceAncestors = []
    for(var i in ancestors){
      this.ancestorProperties = {
        id:ancestors[i].id,
        name:ancestors[i].name,
        type:ancestors[i].type,
        level:ancestors[i].level
      }
      deviceAncestors.push(this.ancestorProperties)
    }
    return deviceAncestors
}


//Measured enitiies common function
function getMeasuredEntity(measuredEntities){

  var devicemeasuredEntities = []
  for(var i in measuredEntities){

    this.measuredProperties = {
      id:measuredEntities[i].id,
      name:measuredEntities[i].name,
      type:measuredEntities[i].type,
      level:measuredEntities[i].level
    }
    devicemeasuredEntities.push(this.measuredProperties)
  }
  return devicemeasuredEntities
}

//get the attributes common function
function getAttributes(attributes){

  var deviceattributes = []
  for(var i in attributes){

    this.attributesProperties = {
      name:attributes[i].name,
      value:attributes[i].value,
    }

    deviceattributes.push(this.attributesProperties)
  }
  return deviceattributes
}
