import React from 'react';
import {Text, View} from 'react-native';
import CCheader from './CCheader';
import {ScrollView} from 'react-native-gesture-handler';
const ProductPage3 = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'F0F0F0',
      }}>
      <CCheader />
      <ScrollView
        style={{
          backgroundColor: '#fff',
          width: '95%',
          marginTop: 13,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderTopWidth: 2,
          borderLeftWidth: 2,
          borderRightWidth: 2,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 12,
            marginLeft: 12,
          }}>
          <View
            style={{
              color: '#000',
              backgroundColor: '#e36464',
              width: 70,
              height: 70,
              borderRadius: 35,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 35, color: '#fff'}}>CJ</Text>
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
              Carl Jaskson
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
              }}>
              Principal Engineer
            </Text>
            <Text
              style={{
                letterSpacing: 2,
                fontSize: 14,
                color: '#000',
                fontStyle: 'italic',
              }}>
              Rust.org
            </Text>
          </View>
        </View>
        {/*  summary section*/}
        <View
          style={{
            marginLeft: 12,
            marginTop: 13,
          }}>
          <Text
            style={{
              fontSize: 18,
              textDecorationLine: 'underline',
              color: '#000',
            }}>
            PROFESSIONAL SUMMARY
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: '#000',
              marginTop: 3,
            }}>
            There are 2 main topics you need to include in your cover letter:
            why you're the perfect candidate for the job & why you're passionate
            about working in the company you're applying to. Most of the content
            of your cover letter should be factual, without any fluff or
            generalizations.
          </Text>
          <View
            style={{
              width: '90%',
              borderTopWidth: 1,
              color: '#AEAEAE',
              marginTop: 5,
            }}
          />
        </View>
        {/*  here is the work experience section*/}
        <View
          style={{
            marginLeft: 12,
            marginTop: 13,
          }}>
          <Text
            style={{
              fontSize: 18,
              textDecorationLine: 'underline',
              color: '#000',
            }}>
            WORK EXPERIENCE
          </Text>
          {[2, 4].map((val, index) => {
            return (
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#000',
                    marginTop: 12,
                  }}>
                  Engineering Team Lead
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#000',
                    fontStyle: 'italic',
                  }}>
                  Indian Software Private Ltd
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#000',
                  }}>
                  Team lead professionals need a balance of soft skills and hard
                  skills combined with the unique ability to motivate their
                  staff.
                </Text>
              </View>
            );
          })}
          <View
            style={{
              width: '90%',
              borderTopWidth: 1,
              color: '#AEAEAE',
              marginTop: 5,
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginLeft: 12,
            paddingTop: 12,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#000',
            }}>
            SKILLS:
          </Text>
          {[14, 5, 6, 7, 7].map((val, index) => {
            return (
              <View
                style={{
                  backgroundColor: '#DA7474',
                  width: 100,
                  alignItems: 'center',
                  borderRadius: 3,
                  marginLeft: 3,
                }}>
                <Text
                  style={{
                    color: '#fff',
                  }}>
                  NodeJS
                </Text>
              </View>
            );
          })}
          <View
            style={{
              width: '90%',
              borderTopWidth: 1,
              color: '#AEAEAE',
              marginTop: 13,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default ProductPage3;
