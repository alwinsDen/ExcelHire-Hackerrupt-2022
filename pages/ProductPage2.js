import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import CCheader from './CCheader';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ProductPage2 = () => {
  return (
    <ScrollView style={{backgroundColor: '#F0F0F0'}}>
      <CCheader />
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          marginLeft: 14,
          marginTop: 9,
        }}>
        Jobs that you have saved for
      </Text>
      <View>
        <ScrollView
          horizontal={true}
          style={{
            marginTop: 13,
            width: '100%',
          }}>
          {[1, 2, 4].map((val, index) => {
            return (
              <View
                style={{
                  height: 100,
                  width: 236,
                  backgroundColor: '#ffffff',
                  borderRadius: 15,
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: 13,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000000',
                    marginLeft: 13,
                    marginTop: 6,
                  }}>
                  Intern at ExcelSoft
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 13,
                  }}>
                  <FontAwesome5
                    name={'briefcase'}
                    color={'#AAAAAA'}
                    size={20}
                  />
                  <Text style={{paddingLeft: 5, color: '#000000'}}>
                    Mysore / Bangalore
                  </Text>
                </View>
                <Text
                  style={{
                    background: '#94CD67',
                    letterSpacing: 0.24,
                    position: 'absolute',
                    right: 12,
                    top: 50,
                    backgroundColor: '#94CD67',
                    paddingLeft: 8,
                    paddingRight: 8,
                    borderRadius: 14,
                    color: '#ffffff',
                  }}>
                  APPLIED
                </Text>
                <Text
                  style={{
                    background: '#94CD67',
                    color: 'black',
                    position: 'absolute',
                    right: 12,
                    top: 70,
                  }}>
                  Applied on 23 Dec 2021
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          marginLeft: 13,
          marginTop: 9,
        }}>
        Recommended jobs for you!
      </Text>
      <View
        style={{
          width: '95%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginLeft: 12,
          marginTop: 6,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 16,
          }}>
          Tags:{' '}
        </Text>
        {[1, 2, 344, 5].map((val, index) => {
          return (
            <View
              style={{
                height: 21,
                width: 120,
                borderRadius: 10,
                backgroundColor: '#6B9FEE',
                paddingLeft: 13,
                paddingRight: 13,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 3,
                marginTop: 5,
              }}>
              <Text style={{color: '#fff'}}>#Mechanical</Text>
            </View>
          );
        })}
        <Text
          style={{
            marginLeft: 5,
            color: '#5A82CE',
          }}>
          Edit the tags
        </Text>
      </View>
      {/*<ScrollView*/}
      {/*  style={{*/}
      {/*    display: 'flex',*/}
      {/*    flexDirection: 'column',*/}
      {/*    marginTop: 10,*/}
      {/*  }}>*/}

      {[1, 2, 4, 5].map((val, index) => {
        return (
          <View
            style={{
              backgroundColor: '#ffffff',
              width: '95%',
              height: 225,
              borderRadius: 22,
              paddingTop: 5,
              marginLeft: 9,
              marginTop: 10,
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View
                style={{
                  color: '#000',
                  backgroundColor: '#e55252',
                  width: 40,
                  height: 40,
                  marginLeft: 9,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <Text style={{color: '#fff'}}>AM</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: 10,
                }}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Software engineer
                </Text>
                <Text style={{color: '#000', textDecorationLine: 'underline'}}>
                  Amazon India
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '80%',
                marginLeft: 60,
              }}>
              <Text style={{color: '#000'}}>
                We are looking for a React Native developer interested in
                building performant mobile apps on both the iOS and Android
                platforms. You will be responsible for architecting and building
                these more...
              </Text>
            </View>
            {/*  this here is the component*/}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginLeft: 44,
              }}>
              {[1, 3, 4, 5].map((val, index) => {
                return (
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginLeft: 14,
                      marginTop: 3,
                    }}>
                    <FontAwesome5 name={'globe'} color={'#000'} size={20} />
                    <Text style={{marginLeft: 4, color: '#000'}}>
                      203 applicants
                    </Text>
                  </View>
                );
              })}
            </View>
            <TouchableOpacity
              style={{
                marginLeft: 56,
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
          </View>
        );
      })}

      {/*</ScrollView>*/}
    </ScrollView>
  );
};
export default ProductPage2;
