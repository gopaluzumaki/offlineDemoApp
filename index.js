 import React from 'react';
 import {AppRegistry} from 'react-native';
 import {Provider} from 'react-redux';
 
 import App from './app/App';
 import {name as appName} from './app.json';
 import {store,persistor} from './app/store';
 import {PersistGate} from 'redux-persist/integration/react';
 
 const connectedApp = () => {
   return (
     <Provider store={store}>
         {/* <PersistGate persistor={persistor} loading={null}> */}
       <App />
       {/* </PersistGate> */}
     </Provider>
   );
 };
 
 AppRegistry.registerComponent('main', () => connectedApp);
 