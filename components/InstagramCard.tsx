import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function InstagramCard({uri, index}: {uri: string, index:number}) {
  const clickHandler = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.card} key={index}>
      <View style={styles.cardHeader}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/280x280_RS/a7/76/c0/a776c052edc8f3da2b8ab3243f889286.jpg',
          }}
          style={styles.profilePic}
        />
        <Text style={styles.profileName}>Christopher Exben 😻</Text>
      </View>
      <Image
        source={{
          uri: uri,
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardFooter}>
        <Text style={styles.footerText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus
          similique distinctio quas unde impedit labore cumque sit magnam ea
          odit cupiditate accusamus ad, quidem eveniet iusto? Nesciunt, sit
          error.
        </Text>
        <TouchableOpacity
          onPress={() => clickHandler('https://in.pinterest.com/glacealeau_/')}>
          <View style={{borderRadius: 16, backgroundColor: 'black'}}>
            <Text style={styles.link}>View More</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderColor: '#dfdfdf',
    borderWidth: 1,
    elevation: 4,
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 100,
    objectFit: 'fill',
  },
  profileName: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#113140',
  },
  cardHeader: {
    flexDirection: 'row',
    gap: 8,
    padding: 8,
  },
  cardImage: {
    height: 350,
    objectFit: 'cover',
    resizeMode: 'center',
  },
  cardFooter: {padding: 8, marginBottom: 8},
  footerText: {fontSize: 12, color: '#113140', marginBottom: 16},
  link: {
    color: 'white',
    backgroundColor: 'black',
    padding: 16,
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
