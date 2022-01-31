import React,{useEffect} from 'react';
import {SafeAreaView, Button, FlatList, StyleSheet,Text,TouchableOpacity,Alert} from 'react-native';
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
        renderItem={({item}) => <UserListItem item={item} />}
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
});

const mapStateToProps = ({users}) => ({users});

export default connect(mapStateToProps, {getUsers})(LandingScreen);