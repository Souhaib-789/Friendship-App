import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ActivityIndicator, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';


function HomeScreen({ navigation }) {


  return (
    <>

      <View style={styles.container}>
        <ImageBackground source={require('../../assets/Images/iio.jpg')} style={styles.bgimg}>
          <Text style={styles.txt}>
            Calculate your Friendship Bond
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('contact')}>
            <LinearGradient colors={['#FFA69E', '#861657',]} style={styles.btn}>
              <Text style={styles.btntxt}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
}
function Contact() {
  const [name1, setname1] = useState('');
  const [name2, setname2] = useState('');
  const [loading, setloading] = useState(false)

  if (loading) {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: '60%' }}>
          <Text>
            <ActivityIndicator size={60} color={'#e75480'} /> </Text>
          <Text style={{ fontSize: 25, color: 'black', marginTop: '10%' }}>Calculating friendship bond...</Text>
        </View>

      </View>
    );
  }


  const Calculating = () => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
      alert('Your friendship bond is ' + Math.floor(Math.random() * 100) + '% strong')
    }, 3000)
  }
  return (
    <View style={styles.container2}>
      <View style={styles.headview}>
        <Entypo name='menu' color={'black'} size={30} />
        <Text style={styles.small}>Let's check how strong your friendship bond is .</Text>
      </View>
      <View style={styles.subview}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEUgvXzxOBXnjrnsfVRzV--FTj9wPDdTQbw&usqp=CAU',
          }} />
        <View style={{ marginTop: '17%', textAlign: 'center', alignItems: 'center' }}>
          <Text style={styles.inptxt}>Enter your name :</Text>
          <TextInput
            style={styles.input}
            onChangeText={setname1}
            value={name1}
            placeholder=""

          />
          <Text style={styles.inptxt}>Enter your friend's name :</Text>
          <TextInput
            style={styles.input}
            onChangeText={setname2}
            value={name2}
            placeholder=""

          />
        </View>
        <TouchableOpacity onPress={() => { Calculating() }}>
          <LinearGradient colors={['#FFA69E', '#861657',]} style={styles.btnx}>
            <Text style={styles.btntxt}>Calculate %age </Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="contact" component={Contact} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
const styles = StyleSheet.create({
  container: {
    fontFamily: 'Lobster-Regular',
    backgroundColor: 'white',
    flex: 1,
  },
  container2: {
    fontFamily: 'Lobster-Regular',
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center'
  },
  headview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '5%',
    padding: 10
  },
  txt: {
    fontSize: 35,
    color: '#e75480',
    marginTop: '10%',
    marginLeft: '20%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Lobster-Regular',
    fontStyle: 'italic'
  },
  subview: {
    padding: 20,
    backgroundColor: 'white',
    width: '85%',
    height: '70%',
    marginTop: '5%',
    borderRadius: 10,
    elevation: 20,
    shadowColor: 'red',
    alignItems: 'center'
  },
  img: {
    width: 180,
    height: 130,

  },
  bgimg: {
    resizeMode: 'cover',
    flex: 1
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: '#FF6C44',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',

  },
  detailstext: {
    margin: 15,
    lineHeight: 25,
    fontSize: 16,
    color: 'white'
  },
  styler: {
    marginTop: 30,
    marginBottom: 40,
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#e75480',
    borderRadius: 50,
    marginTop: '130%',
    marginLeft: '20%',
    height: 60,
    width: '60%',
    justifyContent: 'center',

  },
  btnx: {
    backgroundColor: '#e75480',
    borderRadius: 10,
    marginTop: '25%',
    height: 60,
    width: 180,
    justifyContent: 'center',

  },
  btntxt: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    color: 'white'
  },
  input: {
    height: 45,
    width: 200,
    margin: '5%',
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
  },
  inptxt: {
    fontSize: 20,
    color: '#e23266',
    fontWeight: 'bold'
  },
  small: {
    fontSize: 18,
    marginLeft: '30%',
    color: 'black'
  }
});
