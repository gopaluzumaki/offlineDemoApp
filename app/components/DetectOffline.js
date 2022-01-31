// import { View, Text, ScrollView, NetInfo } from 'react-native';
// import { requestPerson, connectionState } from '../actions';

// class DetectOffline extends Component {
//   componentDidMount() {
//     NetInfo.isConnected.addEventListener('change', this._handleConnectionChange);
//   }

//   componentWillUnmount() {
//     NetInfo.isConnected.removeEventListener('change', this._handleConnectionChange);
//   }

//   _handleConnectionChange = (isConnected) => {
//     this.props.dispatch(connectionState({ status: isConnected }));
//   };

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         {/* ... */}
//         <Icon
//           raised
//           name={this.props.isConnected ? 'add' : 'alarm-add'}
//           color='#51b9d3'
//           reverse
//           onPress={() => this.props.dispatch(requestPerson({ index: this.props.personIndex }))}
//           containerStyle={{ position: 'absolute', right: 20, bottom: 20 }}
//         />
//       </View>
//     );
// }
// }
// const mapStateToProps = (state) => {
//   return {
//     people: state.people,
//     personIndex: state.personIndex,
//     actionQueue: state.actionQueue,
//     isConnected: state.isConnected,
//   };
// };

// export default connect(mapStateToProps)(DetectOffline);



import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const DetectOffline = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    zIndex: 2,
  },
  text: {
    fontSize: 25,
  },
});

export default DetectOffline;
