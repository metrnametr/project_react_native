import React, { useRef } from 'react';
import Drawer from 'react-native-drawer';
import { Text } from 'react-native';
import DrawerContext from './DrawerContext';
import { theme } from '../../../theme';

const DrawerProvider = (props) => {
  const drawer = useRef();
  return (
    <DrawerContext.Provider value={ {
      openDrawer: () => drawer.current.open()
    } }
    >
      <Drawer ref={ drawer } 
        type="overlay"
        content={ <Text >qweqwe</Text> }
        tapToClose={ true }
        openDrawerOffset={ .2 } // 20% gap on the right side of drawer
        // panCloseMask={ 0.5 }
        closedDrawerOffset={ -3 }
        styles={ drawerStyles }
        acceptTap={ true }
        // acceptDoubleTap={ true }
        panOpenMask={ 50 }
      >
        {props.children}
      </Drawer>
    </DrawerContext.Provider>
  );
};

const drawerStyles =  { 
  drawerOverlay: {
    backgroundColor: theme.mainColor
  }
};

export {
  DrawerProvider,
  DrawerContext
};