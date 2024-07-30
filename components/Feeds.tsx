import {StyleSheet, Text, View} from 'react-native';
import InstagramCard from './InstagramCard';

const FeedCard = () => {
  const urls=['https://i.pinimg.com/474x/7d/57/ed/7d57edd481dce75a78e4edb1939aac4a.jpg',
    'https://i.pinimg.com/474x/79/b6/9d/79b69d9f9c6d01407421688e01d579dd.jpg',
    'https://i.pinimg.com/474x/f1/ac/28/f1ac28340412dd771db6dbcc13eb1ae3.jpg'
  ];

  const feeds =()=>{
    return urls.map((uri:string,index:number)=><InstagramCard uri={uri} index={index} />)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Posts</Text>
      {feeds()}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{gap:16, marginVertical:16},
  heading: {fontSize: 24},
});

export default FeedCard;
