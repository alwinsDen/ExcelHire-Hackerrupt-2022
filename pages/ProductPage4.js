import React from 'react';
import {Text, TouchableOpacity, View, Alert} from 'react-native';
import CCheader from './CCheader';
import {TextInput} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native';
const ProductPage4 = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
      }}>
      <CCheader navigation={navigation}/>
      <TextInput
        style={{
          width: '96%',
          height: 44,
          marginTop: 6,
          display: 'flex',
        }}
        placeholder={'search for jobs by id, tags or title'}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
          marginTop: 7,
        }}>
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate("product-page6",{state:"Create"})
        }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 4,
              borderColor: '#6B9FEE',
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderTopWidth: 2,
              borderBottomWidth: 2,
              backgroundColor: '#fff',
              borderRadius: 5,
            }}>
            <FontAwesome5 name={'plus'} color={'black'} size={20} />
            <Text
              style={{
                marginLeft: 4,
                color: '#6B9FEE',
              }}>
              add new posting
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text>sort by:&nbsp;&nbsp;</Text>
          <TouchableOpacity>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: 4,
                borderColor: '#6B9FEE',
                borderLeftWidth: 2,
                borderRightWidth: 2,
                borderTopWidth: 2,
                borderBottomWidth: 2,
                backgroundColor: '#fff',
                borderRadius: 5,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginLeft: 4,
                  color: '#6B9FEE',
                }}>
                latest&nbsp;&nbsp;
              </Text>
              <FontAwesome5 name={'caret-down'} color={'#6B9FEE'} size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{
          width: '95%',
          paddingTop: 15,
        }}>
        {[1, 32, 2, 2, 4].map((val, index) => {
          return (
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#000',
                    }}>
                    Bachelors Intern Software engineer
                  </Text>
                  <Text
                    style={{
                      color: '#5292DD',
                      fontStyle: 'italic',
                      textDecorationLine: 'underline',
                    }}>
                    Amazon India
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                    }}>
                    Oct 22 2022
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '95%',
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'center',
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
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <TouchableOpacity
                  onPress={()=>{
                    const createTwoButtonAlert = () =>
                    Alert.alert(
                      "Delete job vacancy?",
                      "Are you sure? This can't undone.",
                      [
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                        },
                        { text: "Confirm", onPress: () => console.log("OK Pressed") }
                      ]
                    );
                    createTwoButtonAlert(); 
                  }}
                  >
                    <View
                      style={{
                        width: 75,
                        height: 29,
                        backgroundColor: '#FC3C47',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        borderWidth: 1,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                        }}>
                        delete
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>{
                    navigation.navigate("product-page6",{state:"Edit"})
                  }}
                  >
                    <View
                      style={{
                        width: 75,
                        height: 29,
                        backgroundColor: '#379FB6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        borderWidth: 1,
                        marginLeft: 4,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                        }}>
                        edit
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>{
                    navigation.navigate("product-page7")
                  }}
                  >
                    <View
                      style={{
                        width: 75,
                        height: 29,
                        backgroundColor: '#5A8FC0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        borderWidth: 1,
                        marginLeft: 4,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                        }}>
                        listing
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <FontAwesome5 name={'globe'} color={'#979994'} size={20} />
                  <Text style={{marginLeft: 4, color: '#979994'}}>
                    203 applicants
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '90%',
                  borderTopWidth: 1,
                  color: '#AEAEAE',
                  marginTop: 13,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default ProductPage4;
