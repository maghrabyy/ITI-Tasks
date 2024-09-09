import {
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const images = [
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3',
    'https://images.unsplash.com/photo-1516962126636-27ad087061cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1467991521834-fb8e202c7074?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1649675211216-bf4b26942b88?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1612102741137-471f0ce55852?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const [shownImageIndex, setShowImageIndex] = useState(0);
  return (
    <View style={{ marginTop: 30 }}>
      {/* <ScrollView horizontal>
        {images.map((image) => (
          <Image
            key={image}
            source={{ uri: image }}
            style={{
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height - 100,
            }}
          />
        ))}
      </ScrollView> */}
      <View>
        <Image
          source={{ uri: images[shownImageIndex] }}
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height - 100,
          }}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        {images.map((image, index) => (
          <TouchableOpacity onPress={() => setShowImageIndex(index)}>
            <Image
              key={image}
              source={{ uri: image }}
              style={{
                width: 50,
                height: 50,
                borderWidth: 1,
                borderColor:
                  index === shownImageIndex ? 'white' : 'transparent',
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>

    // <ScrollView style={{ marginTop: 30, marginHorizontal: 10, gap: 4 }}>
    //   <View style={{ flexDirection: 'row', gap: 4, marginBottom: 4 }}>
    //     <Image
    //       style={{ flex: 1, height: 200 }}
    //       source={{
    //         uri: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //       }}
    //     />
    //     <Image
    //       style={{ flex: 1, height: 200 }}
    //       source={{
    //         uri: 'https://images.unsplash.com/photo-1516962126636-27ad087061cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //       }}
    //     />
    //   </View>
    //   <View style={{ flexDirection: 'row', gap: 4, marginBottom: 4 }}>
    //     <Image
    //       style={{ flex: 1, height: 200 }}
    //       source={{
    //         uri: 'https://images.unsplash.com/photo-1467991521834-fb8e202c7074?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //       }}
    //     />
    //     <Image
    //       style={{ flex: 1, height: 200 }}
    //       source={{
    //         uri: 'https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //       }}
    //     />
    //   </View>
    //   <View style={{ flexDirection: 'row', gap: 4, marginBottom: 4 }}>
    //     <Image
    //       style={{ flex: 1, height: 200 }}
    //       source={{
    //         uri: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //       }}
    //     />
    //     <Image
    //       style={{ flex: 1, height: 200 }}
    //       source={{
    //         uri: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //       }}
    //     />
    //   </View>
    //   <View style={{ flexDirection: 'row', gap: 4 }}>
    //     <Image
    //       style={{ flex: 1, height: 200 }}
    //       source={{
    //         uri: 'https://images.unsplash.com/photo-1649675211216-bf4b26942b88?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //       }}
    //     />
    //     <Image
    //       style={{ flex: 1, height: 200 }}
    //       source={{
    //         uri: 'https://images.unsplash.com/photo-1612102741137-471f0ce55852?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //       }}
    //     />
    //   </View>
    // </ScrollView>
  );
}
