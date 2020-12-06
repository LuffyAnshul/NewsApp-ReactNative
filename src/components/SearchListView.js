import React from 'react';
import {
	FlatList,
	View,
	TouchableOpacity,
	Image,
	Text,
	StyleSheet,
} from 'react-native';

const SearchListView = ({ data, navigation }) => {
	const ItemView = ({ item }) => {
		var resTitle = item.title.substring(0, 50);
		var resDesc = item.description.substring(0, 90) ;
		
        return (
			<TouchableOpacity 
				style={styles.cardView}
				activeOpacity={0.7} 
				onPress={() => {
					navigation.navigate('Details', {
						newsData: item
					})
				}}>
				<View style={styles.cardContent}>
					<View style={{ flex: 4 }}>
						<Image source={{ uri: item.urlToImage }} style={styles.cardImage} />
					</View>
					<View style={{ flex: 6, justifyContent: 'center' }}>
						<Text style={styles.title}>{resTitle}</Text>
						<Text style={styles.description}>{resDesc}</Text>
					</View>
				</View>
			</TouchableOpacity>
        );
    };

	return (
		<FlatList
			data={data}
			keyExtractor={(item, index) => index.toString()}
			renderItem={ItemView}
		/>
	);
};

const styles = StyleSheet.create({
	cardView: { 
		borderRadius: 20, 
		justifyContent: 'center', 
		borderColor: '#000', 
		margin: 10 
	},
	cardContent: { 
		flexDirection: 'row', 
		borderRadius: 10, 
		borderColor: 'grey', 
		borderWidth: 1 
	},
	cardImage: { 
		width: 130, 
		height: 130, 
		resizeMode: 'cover', 
		borderTopLeftRadius: 10, 
		borderBottomLeftRadius: 10 
	},
	title: { 
		fontSize: 17, 
		fontWeight: 'bold' 
	},
	description: {
		fontSize: 13, 
		paddingTop: 15
	}
})

export default SearchListView;