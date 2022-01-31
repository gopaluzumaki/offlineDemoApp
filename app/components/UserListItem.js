import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';




const UserListItem = ({item}) => {
  return (

    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={{url: 'https://randomuser.me/api/portraits/men/61.jpg'}} style={styles.image} />
        <View>
          <Text style={styles.heading}>{item.firstName}{' '}{item.lastName}</Text>
          <Text></Text>
          <Text>{'Age:'}{item.age}</Text>
        </View>
    
    </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft:25,
    marginTop:25
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  actionableContainerDivider: {
    borderTopWidth: 0.5,
    marginRight: -20,
    marginLeft:-20,
    marginBottom:10,
    marginTop:-15,
  },
});

export default UserListItem;
