import React from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CCheader from './CCheader';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ProductPage5 = () => {
  return (
    <View>
      <CCheader />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <FontAwesome5 name={'arrow-left'} color={'#000'} size={25} />
        <Text style={{fontSize: 28, marginLeft: 10}}>Add Company Details</Text>
      </View>
      <ScrollView
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        {[1, 23, 5, 6].map((val, index) => {
          return (
            <View
              style={{
                backgroundColor: '#fff',
                width: '90%',
                borderRadius: 12,
                height: 63.5,
                paddingLeft: 20,
                marginLeft: 18,
                borderBottomWidth: 1,
                borderColor: '#2791B5',
                marginTop: 18,
              }}>
              <Text
                style={{
                  fontStyle: 'italic',
                  marginTop: 3,
                }}>
                Company Name
              </Text>
              <TextInput
                placeholder="Google"
                style={{
                  textDecorationLine: 'underline',
                }}></TextInput>
            </View>
          );
        })}
        <TouchableOpacity
          style={{
            marginLeft: 22,
            marginTop: 15,
          }}>
          <View
            style={{
              width: 104,
              backgroundColor: '#5C84BF',
              height: 23,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              APPLY
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default ProductPage5;
