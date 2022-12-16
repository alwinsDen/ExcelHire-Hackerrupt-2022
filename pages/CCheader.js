import React from 'react';
import {Text, View} from 'react-native';
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
      <Text style={{fontSize: 20, color: '#fff'}}>ExcelHire</Text>
      <Text style={{position: 'absolute', right: 10}}>JC</Text>
    </View>
  );
};
export default CCheader;
