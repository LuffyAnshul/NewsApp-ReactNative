import React from 'react';
import {
	FlatList,
	View,
	TouchableOpacity,
	ImageBackground,
	Text,
	StyleSheet,
	Dimensions,
	Linking
} from 'react-native';

const windowHeight = Dimensions.get('window').height / 1.8;
const windowWidth = Dimensions.get('window').width / 1.4;

const CardView = ({ data, navigation }) => {

	const ItemView = ({ item }) => {
		var resTitle = item.title.substring(0, 50) + '. . .';
		var resDesc = item.description.substring(0, 150) + ' | Read More';

		// console.log("CardView")
		// console.log(navigation);
		
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => {
				navigation.navigate('Details', {
					newsData: item
				})
			}}>
				<View style={styles.mainCard}>
					<ImageBackground 
						source={{ uri: item.urlToImage }}
						imageStyle={{ borderRadius: 15 }}
						style={styles.cardBGImage}
					>
						<View style={{ flex: 4}} />
						<View style={styles.cardContent}>
							<View style={{ flex: 1 }}>
								<Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold' }}>{resTitle}</Text>
								<Text style={{ color: '#fff', fontSize: 15, marginTop: 15 }}>{resDesc}</Text>
							</View>
							<View style={{ flex: 1, justifyContent: 'flex-end' }}>
								<Text 
									style={{ color: '#fff', fontSize: 15, paddingTop: 10, fontWeight: 'bold' }}
									onPress={() => {
										Linking.openURL(item.url);
									}}
								>
									{item.author === null ? 'Legit Source' : item.author}
								</Text>
								<Text style={{ color: '#fff', fontSize: 15, marginTop: 10 }}>{item.publishedAt.substring(0,10)}</Text>
							</View>
						</View>
					</ImageBackground>
				</View>
			</TouchableOpacity>
        );
    };

	return (
		<FlatList
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			data={data}
			keyExtractor={(item, index) => index.toString()}
			renderItem={ItemView}
		/>
	);
};

const styles = StyleSheet.create({
	mainCard: {
		height: windowHeight, 
		width: windowWidth, 
		marginHorizontal: 10
	},
	cardBGImage: { 
		flex: 1, 
		resizeMode: 'cover', 
	},
	cardContent: { 
		flex: 5, 
		backgroundColor: 'rgba(0, 0, 0, 0.6)', 
		borderBottomLeftRadius: 15, 
		borderBottomRightRadius: 15, 
		padding: 20, 
	}
})

export default CardView;