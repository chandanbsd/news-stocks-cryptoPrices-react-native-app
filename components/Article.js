import React from 'react';
import { View, Linking, TouchableNativeFeedback, Image } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

function Article(props){
  
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = props.article;
    
    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';
      const image={urie: urlToImage||defaultImg}

    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}
      >

        <Card
          featuredTitle={title}
          featuredTitleStyle={featuredTitleStyle}
          style = {styles.card}
        >

          <Image style={styles.img} source={{uri: image.urie}}/>
          
          <Text style={{ marginBottom: 10 }}>
            {description || 'Read More..'}
          </Text>
          
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>Source: {source.name.toUpperCase()}</Text>
            <Text style={noteStyle}>{time}</Text>
          </View>
        
        </Card>
      </TouchableNativeFeedback>
    );
  
}

const styles = {
  noteStyle: {
    marginTop: 5,
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 14
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  },
  card:{
    backgroundColor: 'white',
    width: '100%',
  },
  img:{
    width: "100%",
    height: 150
  }
};

export default Article