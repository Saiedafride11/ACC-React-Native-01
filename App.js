import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [count, setCount] = useState(0);
  return (
    // <View style={styles.container}>
    //   <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hello World</Text>
    //   <Text>Hello World</Text>
    //   <StatusBar style="auto" />
    // </View>

    // <SafeAreaView>
    //   <View style={{ height: 50, width: 50, backgroundColor: 'red'}}>
    //     <Text>This is text</Text>
    //   </View>
    // </SafeAreaView>

    <SafeAreaView>
      <ScrollView>
        <View style={{ height: 60, backgroundColor: 'blue'}}>
          <Text>This is text</Text>
          <Text>This is text</Text>
          <Text>This is text</Text>
        </View>
        <View style={{ height: 60, backgroundColor: 'green'}}>
          <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', padding: 10}}>This is another text</Text>
        </View>

        <View style={{ height: 180, backgroundColor: 'red', marginTop: 50, marginLeft: 50}}>
          <Image resizeMode="contain" style={{height: 180, width: 200}} source={require('./assets/favicon.png')}/>
        </View>
        <View style={{ height: 180, backgroundColor: 'blue', marginTop: 50, marginLeft: 50}}>
          <Image resizeMode="cover" style={{height: 180, width: 200}} source={{uri : 'https://picsum.photos/200'}}/>
        </View>
        <Pressable onPress={ () => alert('Press')}>
          <View style={{height: 50, width: 200, backgroundColor: 'red'}}>
            <Text>I'm pressable button</Text>
          </View>
        </Pressable>

        <View>
          <Text>Count: {count}</Text>
        </View>
        <TouchableOpacity onPress={() => setCount(prevCount => prevCount + 1)}>
          <View style={{height: 50, width: 200, backgroundColor: 'blue'}}>
            <Text>Press Here</Text>
          </View>
        </TouchableOpacity>

        <View>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>

        <CustomButton title="Press X, another CustomButton"></CustomButton>
        <CustomButton title="222 Press X, another CustomButton"></CustomButton>
      </ScrollView>


    {/* <View style={{flex: 1}}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
    </View> */}

    {/* <View style={{flex: 1}}>
      <View style={{ flexDirection: "row", flex: 1}}>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>
      </View>
    </View> */}

    <View style={{flex: 1}}>
      <View style={{ flex: 1, justifyContent: "center"}}>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>
      </View>
    </View>

    </SafeAreaView>
  );
}


export const CustomButton = ({title}) => {
  return(
        <Pressable onPress={ () => alert('Press WWW')}>
          <View style={{ backgroundColor: 'red', padding: 10, marginTop: 20, alignItems: 'center'}}>
            <Text style={{color: 'white'}}>{title}</Text>
          </View>
        </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  // view1: {
  //   flex: 1,
  //   backgroundColor: 'red'
  // },
  // view2: {
  //   flex: 1,
  //   backgroundColor: 'blue'
  // },
  // view3: {
  //   flex: 1,
  //   backgroundColor: 'green'
  // },
  view1: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  view2: {
    height: 100,
    width: 100,
    backgroundColor: 'blue'
  },
  view3: {
    height: 100,
    width: 100,
    backgroundColor: 'green'
  },
});
