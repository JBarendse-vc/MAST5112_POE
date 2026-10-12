import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.rowDisplay}>
        <Text>Special</Text>
        <Pressable style={styles.customButton} onPress={() => alert('Specials Page!')}>
        <Text style={{color: '#DFCFAB'}}>See More</Text>
        </Pressable>
      </View>
      <View style={styles.rowDisplay}>
        <img style={styles.previewImg} src="assets/images/special.jpg" alt="Food Image" />
        <img style={styles.previewImg} src="./assets/images/special.jpg" alt="Food Image" />
        <img style={styles.previewImg} src="../assets/images/special.jpg" alt="Food Image" />
      </View>
      <View style={styles.rowDisplay}>
        <View style={styles.displayColumn}>
          <Text>Beverages</Text>
          <img src="" alt="Menu Image" />
        </View>
        <View style={styles.displayColumn}>
          <Text>Starter Menu</Text>
          <img src="" alt="Menu Image" />
        </View>
      </View>
      <View style={styles.rowDisplay}>
        <View>
          <Text>Main Menu</Text>
          <img src="" alt="Menu Image" />
        </View>
        <View>
          <Text>Dessert</Text>
          <img src="" alt="Menu Image" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFCFAB',
    margin: 0,
  },
  rowDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },

  previewImg:{
    width: 110,
    height: 106,
  },

  customButton: {
    backgroundColor: '#162713',
    opacity: 0.76,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 58,
    width: 101,
    height: 35,
    alignItems: 'center',
  },

  displayColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});
