
export function getRanchProperties(blocks){
var blocksArray = []

for(var key in blocks){

 const ranchState = blocks[key].state
    if(ranchState == 'active'){

          this.ranchProperties = {
            name:blocks[key].name,
            type:blocks[key].type,
            id:blocks[key].id,
            edited:blocks[key].edited,
            state:blocks[key].state,
            description:blocks[key].description,
            image:'N/A',
            measuredEntityLocation:{
                latitude:blocks[key].measuredEntityLocation.latitude,
                longitude:blocks[key].measuredEntityLocation.longitude,
                elevation:blocks[key].measuredEntityLocation.elevation,
            },
            ancestor:(blocks[key].ancestor == null)?blocks[key].ancestor:getAncestors(blocks[key].ancestor),
            measuredEntityProperties:(blocks[key].measuredEntityProperties == null)?blocks[key].measuredEntityProperties:getMeasuredEntityProps(blocks[key].measuredEntityProperties),
            measuringDevices:(blocks[key].measuringDevices == null)?blocks[key].measuringDevices:getMeasuringDevices(blocks[key].measuringDevices),
            annual:(blocks[key].annual == null)?blocks[key].annual:getAnnual(blocks[key].annual),
            keyDates:(blocks[key].keyDates == null)?blocks[key].keyDates:getkeyDates(blocks[key].keyDates),
            measuredEntityBoundaries:(blocks[key].measuredEntityBoundaries == null)?blocks[key].measuredEntityBoundaries:getMeasuredBound(blocks[key].measuredEntityBoundaries),
            information:(blocks[key].information == null)?blocks[key].information:getSoilInfo(blocks[key].information),
            measuredEntityObjectives:(blocks[key].measuredEntityObjectives == null)?blocks[key].measuredEntityObjectives:getMeasuredEntityObjs(blocks[key].measuredEntityObjectives)
          }
         blocksArray.push(this.ranchProperties)
    }
}
return blocksArray
}

//Measuring Devices
function getMeasuringDevices(measuringDevices){
  var  measuringDevicesArray = []
  for(var i in measuringDevices){
    this.measuredDeviceProps = {
      deviceId:measuringDevices[i].deviceId,
      deviceType:measuringDevices[i].deviceType,
    }
    measuringDevicesArray.push(this.measuredDeviceProps)
  }
  return measuringDevicesArray
}

//Measured Entity properties
function getMeasuredEntityProps(measuredEntityProperties){
  var  measuringEntityArray = []
  for(var i in measuredEntityProperties){
    this.measuredEntityProps = {
      name:measuredEntityProperties[i].name,
      value:measuredEntityProperties[i].value,
    }
    measuringEntityArray.push(this.measuredEntityProps)
  }
  return measuringEntityArray
}

//get Measured Objectives
function getMeasuredEntityObjs(measuredEntityObjectives){
  var  measuringEntityObjArray = []
  for(var i in measuredEntityObjectives){
    this.measuredEntityObjs = {
      name:measuredEntityObjectives[i].name,
      value:measuredEntityObjectives[i].value,
    }
    measuringEntityObjArray.push(this.measuredEntityObjs)
  }
  return measuringEntityObjArray
}

//get MeasuredEnitty Boundaries

function getMeasuredBound(measuredEntityBoundaries){

  var  measuringEntityBoundArray = []
  for(var i in measuredEntityBoundaries){
    this.measuredEntityBoundsObj = {
      latitude:measuredEntityBoundaries[i].latitude,
      longitude:measuredEntityBoundaries[i].longitude,
      elevation:measuredEntityBoundaries[i].elevation
    }
    measuringEntityBoundArray.push(this.measuredEntityBoundsObj)
  }
  return measuringEntityBoundArray
}

//Get Ancesstors
function getAncestors(ancestors){
    var ranchAncestors = []
    for(var i in ancestors){
      this.ancestorProperties = {
        id:ancestors[i].id,
        name:ancestors[i].name,
        type:ancestors[i].type,
        level:ancestors[i].level
      }
      ranchAncestors.push(this.ancestorProperties)
    }
    return ranchAncestors
}

//get annual
function getAnnual(annual){
  var  annualArray = []
  for(var i in annual){
    this.annualProps = {
      germinationDate:annual[i].germinationDate,
      canopyHeight:annual[i].canopyHeight,
      canopyWidth:annual[i].canopyWidth,
      canopyPorosity:annual[i].canopyPorosity,
      coverCrop:annual[i].coverCrop,
      coverCropWidthStrip:annual[i].coverCropWidthStrip,
      weedingOrSeneSceneDate:annual[i].weedingOrSeneSceneDate,
    }
    annualArray.push(this.annualProps)
  }
  return annualArray
}

//get keyDates
function getkeyDates(keyDates){
  var  keyDatesArray = []
  for(var i in keyDates){
    this.keyDatesProps = {
      name:keyDates[i].name,
      value:keyDates[i].value,
    }
    keyDatesArray.push(this.keyDatesProps)
  }
  return keyDatesArray
}


//get Soil information
function getSoilInfo(information){
  var  informationArray = []
  for(var i in information){
    this.soilInfoProps = {
      soilAt:information[i].soilAt,
      clay:information[i].clay,
      sand:information[i].sand,
      stone:information[i].stone,
    }
    informationArray.push(this.soilInfoProps)
  }
  return informationArray
}
