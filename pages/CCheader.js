import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const CCheader = () => {
  return (
    <View
      style={{
        height: 47,
        width: '100%',
        backgroundColor: '#1DA1F2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          left: 8,
          backgroundColor: '#fff',
          padding: 6,
          height: 35,
          width: 35,
          display: 'flex',
          alignItems: 'center',
          borderRadius: 17.5,
        }}>
        <FontAwesome5 name={'bell'} color={'#000'} size={20} />
      </View>
      <Text style={{fontSize: 20, color: '#fff'}}>ExcelHire</Text>
      <View
        style={{
          position: 'absolute',
          right: 0,
          backgroundColor: '#fff',
          width: 50,
          height: 25,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 13,
          borderBottomLeftRadius: 13,
        }}>
        <Text>Carl J</Text>
      </View>
    </View>
  );
};
export default CCheader;
