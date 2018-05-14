import * as actionTypes from '../constants/actionTypes';

export const actionSignInRoute = {
    index: 0,
    key: 'root',
    showNavHeader: true,
    routes: [{
        key: 'signin',
        title: 'Sign In'
    }]
};

export const  actionHomeRoute = {
    type: 'search',
    route: {
        key: 'search',
        title: 'Search'
    }
};

export const actionPushDeviceListDemo = {
    type: 'pushDeviceListDemo',
    route: {
      key: 'pushDeviceListDemo',
      title: 'List View Devices'
    },
    data:{}
};

export const actionShowMap = {
    type: 'MapHome',
    route: {
      key: 'displayMap',
      title: 'DESIGN',
      renderMode: 'map'
    },
    data:{},
    deviceDataModal: {},
    selectedAccount: {}
};

export const actionSavedVineyard = {
    type: 'SavedVineyard',
    route: {
      key: 'savedMap',
      title: 'DESIGN'
    },
    data:{}
};

export const  actionVineyardRoute = {
    type: 'pushVineyard',
    route: {
        key: 'pushVineyard',
        title: 'DESIGN'
    },
    data:{}
};

export const  actionBlockRoute = {
    type: 'pushBlockMap',
    route: {
        key: 'pushBlockMap',
        title: 'New Block'
    },
    data:{}
};

//search route
export const actionSearch = {
    type: 'searchResults',
    data:{
      searchText:''
    }
};

export const actionGetDevices = {
    type: 'getDevices',
    route: {
      key: 'getDevices',
      title: 'DEVICES'
    }
};


export const actionPushAddDevice = {
    type: 'pushAddDevice',
    route: {
      key: 'pushAddDevice',
      title: 'ADD DEVICE'
    },
    data:{}
};

export const actionPushGateWeather = {
    type: 'pushGateWeather',
    route: {
      key: 'pushGateWeather',
      title: 'DEVICE'
    },
    data:{}
};

export const actionPushFlowmeter = {
    type: 'pushFlowmeter',
    route: {
      key: 'pushFlowmeter',
      title: 'FLOWMETER'
    },
    data:{}
};

export const actionPushDeviceList = {
    type: 'pushDeviceList',
    route: {
      key: 'pushDeviceList',
      title: 'Show Devices'
    },
    data:{}
};

export const actionPushBlocksProperty = {
    type: 'pushBlockProperty',
    route: {
      key: 'pushBlockProperty',
      title: 'Block',
      blockID:"",
      blockparammeterSaved:false,
      blockproductionSaved:false,
      blockSoilSaved:false,
      blockAnnualSaved:false,
      blockKeyDatesSaved:false,
    },
    data:{},

};

export const actionPushBlockDetails = {
    type: 'pushBlockDetails',
    route: {
      key: 'pushBlockDetails',
      title: 'Block'
    },
    data:{},
    actionType:''
};

export const actionPushShowBlocks = {
    type: 'pushBlocksList',
    route: {
      key: 'pushBlocksList',
      title: 'Show Blocks',
      selectedAccount:{}
    },
    data:{},

};

export const actionPushAccountDetail = {
    type: 'pushAccountDetail',
    route: {
      key: 'pushAccountDetail',
      title: 'ACCOUNT INFO'
    },
    data:{}
};


//delete the deviceName
export const actionDelete = {
    type: 'deleteDevice',
    data:{
      deviceInfo:''
    }
};
