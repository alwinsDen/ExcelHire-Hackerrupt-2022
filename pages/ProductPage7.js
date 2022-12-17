import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CCheader from './CCheader';
import {TextInput} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native';
const ProductPage7 = ({navigation}) => {
  const [modalState, setModalState] = React.useState(false);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
      }}>
      <CCheader />
      <TextInput
        style={{
          width: '96%',
          height: 44,
          marginTop: 6,
          display: 'flex',
        }}
        placeholder={'search this'}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
          marginTop: 7,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={()=>{
            navigation.goBack()
          }}
        >
          <FontAwesome5 name={'arrow-left'} color={'black'} size={20} />
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text>sort by:&nbsp;&nbsp;</Text>
          <TouchableOpacity
          onPress={()=>{
            setModalState(state=>!state)
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
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginLeft: 4,
                  color: '#6B9FEE',
                }}>
                over-due&nbsp;&nbsp;
              </Text>
              <FontAwesome5 name={!modalState ? 'caret-down' : "caret-up"} color={'#6B9FEE'} size={20} />
            </View>
          </TouchableOpacity>
          {modalState && <View style={{
                  position:"absolute",
                  bottom:-73,
                  right: 0,
                  backgroundColor:"#ffffff",
                  width: 110,
                  zIndex:10,
                  borderWidth:2,
                  borderColor:"#6B9FEE",
                  borderRadius: 5,
                  display:"flex",
                  alignItems:"flex-end",
                  paddingRight: 4,
                  height: 70,
                  justifyContent:"space-between"
                }}>
                  {
                    ["over-due","applied","blocked"].map((val,index)=>{
                      return <TouchableOpacity>
                        <Text style={{color:"#6B9FEE"}}>{val}</Text>
                      </TouchableOpacity>
                    })
                  }
                </View>}
        </View>
      </View>
      <ScrollView
        style={{
          width: '100%',
        }}>
        {user_list.map((val, index) => {
          return (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '90%',
                paddingTop: 10,   
                paddingBottom: 10,
                borderBottomWidth: 1,
                marginLeft: 10,
              }}>
              <View
                style={{
                  color: '#000',
                  backgroundColor: "coral",
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 35, color: '#fff'}}>{val.name.split(" ")[0][0]}{val.name.split(" ")[1][0]}</Text>
              </View>
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#000',
                  }}>
                  {val.name}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#000',
                  }}>
                  {val.desig}
                </Text>
                <Text
                  style={{
                    letterSpacing: 2,
                    fontSize: 14,
                    fontStyle: 'italic',
                    backgroundColor: val.status ? '#A55651' : 'red',
                    borderRadius: 5,
                    color: '#fff',
                    paddingLeft: 5,
                    width: 150,
                    textAlign:"center"
                  }}>
                  {val.status ? 'missed interview' : 'blocked'}
                </Text>
              </View>
              {
                val.status && <>
                <View
                style={{alignItems: 'center', position: 'absolute', right: 10}}>
                <FontAwesome5 name={'ban'} color={'#d32020'} size={20} />
                <Text style={{fontSize: 18, color: '#d32020'}}>block</Text>
              </View>
              <View
                style={{alignItems: 'center', position: 'absolute', right: 70}}>
                <FontAwesome5 name={'question'} color={'#ff8c07'} size={20} />
                <Text style={{fontSize: 18, color: '#ff8c07'}}>query</Text>
              </View></>
              }
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default ProductPage7;
const user_list = [
  {name:"Carl Jackson",desig:"Marketing Manager",status: true},
  {name:"Anirudh K",desig:"Member at PES",status: false},
  {name:"Pranava K",desig:"Member at PES",status: true},
  {name:"Darshan T",desig:"Member at PES",status: false},
  {name:"Alwin T",desig:"Member at PES",status: true},
]
const colors = ["light blue", "light pink","light green"]