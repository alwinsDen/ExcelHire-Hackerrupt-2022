import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const MainPage = ({navigation}) => {
  const [userEmail, setUserEmail] = React.useState(null);
  const [userPassword, setUserPassword] = React.useState(null);
  return (
    <View
      style={{
        backgroundColor: '#1DA1F2',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 40,
          fontFamily: 'Urbanist-ExtraBold',
          color: '#ffffff',
          marginTop: 193,
        }}>
        ExcelHire
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#F2F2F2',
          alignItems: 'center',
          width: '90%',
          borderRadius: 10,
          paddingLeft: 15,
          borderLeftWidth: 2,
          borderRightWidth: 2,
          borderTopWidth: 2,
          borderBottomWidth: 2,
          color: 'AAAAAA',
          marginTop: 80,
        }}>
        <FontAwesome5 name={'user-alt'} color={'#AAAAAA'} size={20} />
        <TextInput
          style={{
            fontSize: 20,
            backgroundColor: '#F2F2F2',
            width: 310,
          }}
          autoCorrect={false}
          onChangeText={nextText => setUserEmail(nextText)}
          placeholder={'Enter the user email address'}></TextInput>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#F2F2F2',
          alignItems: 'center',
          width: '90%',
          borderRadius: 10,
          paddingLeft: 15,
          borderLeftWidth: 2,
          borderRightWidth: 2,
          borderTopWidth: 2,
          borderBottomWidth: 2,
          marginTop: 20,
        }}>
        <FontAwesome5 name={'eye'} color={'#AAAAAA'} size={20} />
        <TextInput
          style={{
            fontSize: 20,
            backgroundColor: '#F2F2F2',
            width: 310,
            color: 'AAAAAA',
          }}
          onChangeText={nextText => {
            console.log(nextText);
            setUserPassword(nextText);
          }}
          secureTextEntry={true}
          placeholder={'Enter the user password'}></TextInput>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: 356,
          justifyContent: 'space-between',
          marginTop: 34,
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log(userEmail, userPassword);
            if (userEmail==="admin" && userPassword==="admin") {
              navigation.navigate("product-page4")
            } else {
              navigation.navigate("product-page")
            }
          }}>
          <View
            style={{
              width: 154,
              height: 50,
              backgroundColor: '#E88F8F',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              ...styles.loginButton,
            }}>
            <Text style={{fontSize: 20}} >Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: 154,
              height: 50,
              backgroundColor: '#73D8DE',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              ...styles.loginButton,
            }}>
            <Text style={{fontSize: 20}}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 32,
            marginTop: 30,
            color: '#fff',
          }}>
          “The app recommended me the job best-fit for my skillset”
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            color: '#fff',
          }}>
          --Vaishnavi Verma, Hr specialist
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
});
export default MainPage;
