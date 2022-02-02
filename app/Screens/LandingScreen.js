import React,{useEffect} from 'react';
import {SafeAreaView, Button, FlatList, StyleSheet,Text,TouchableOpacity,Alert,View,Image} from 'react-native';
import { getUsers } from '../actions';
import {connect} from 'react-redux';
import UserListItem from '../components/UserListItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';



const LandingScreen = ({users,getUsers,navigation}) => {
  // console.log('gopal123',users)
  useEffect(() => {
    getUsers();
  }, [users]);
  return (
    
    <SafeAreaView style={styles.container}>
      
     
      <FlatList
        data={users}
        keyExtractor={item => item.Id}
        renderItem={({item}) =>  <TouchableOpacity onPress={()=>navigation.navigate('AddFriendsScreen',{data:item})}>
        <View style={styles.container1}>
          <Image source={{url: 'https://randomuser.me/api/portraits/men/61.jpg'}} style={styles.image} />
          <View>
            <Text style={styles.heading}>{item.firstName}{' '}{item.lastName}</Text>
            <Text></Text>
            <Text>{'Age:'}{item.age}</Text>
          </View>
      
      </View>
      </TouchableOpacity>}
        style={styles.list}
        
      />
      <TouchableOpacity onPress={()=>navigation.navigate('AddFriendsScreen')}>
      <Icon name="plus" size={40} color="black" style={{alignSelf:'flex-end',marginRight:20,marginBottom:20}}/>
      </TouchableOpacity>
  
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
  container1: {
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

const mapStateToProps = ({users}) => ({users});

export default connect(mapStateToProps, {getUsers})(LandingScreen);