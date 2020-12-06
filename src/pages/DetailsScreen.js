import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, ImageBackground, ScrollView, Linking, StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailsScreen = ({ route, navigation }) => {

	const item = route.params.newsData;
	// console.log(navigation)

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<StatusBar translucent={true} backgroundColor={'transparent'} barStyle={"light-content"} />

			<ImageBackground
				source={{ uri: item.urlToImage }}
				imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
				style={{
					flex: 1, 
					resizeMode: 'stretch', 
				}}
			>
				<View style={styles.backIconStyle}>
					<MaterialCommunityIcons name="chevron-left" color='#fff' size={40} onPress={() => navigation.goBack()} />
				</View>
				<SafeAreaView style={{ flex: 1 }}>
					<View style={{ flex: 1 }} />
					<ScrollView style={styles.newsContent}>
						<View style={styles.newsInfoBar}>
							<View style={styles.newsInfo}>
								<Text>Source: {item.source.name}</Text>
							</View>
							<View style={styles.newsInfo}>
								<Text 
									style={{ textDecorationLine: 'underline', textDecorationColor: 'blue' }}
									onPress={() => {
										Linking.openURL(item.url)
									}}>Read Details@</Text>
							</View>
						</View>

						<View>
							<Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30 }}>{item.title}</Text>
							<Text style={{ fontSize: 18, paddingVertical: 20 }}>{item.description}</Text>
							<Text style={{ fontSize: 19, paddingVertical: 20 }}>{item.content}</Text>
						</View>
					</ScrollView>
				</SafeAreaView>
			</ImageBackground>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	backIconStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.3)', 
		position: 'absolute', 
		top: 60, 
		left: 20, 
		borderRadius: 10, 
		padding: 5
	},
	newsContent: { 
		flex: 5, 
		backgroundColor: '#fff', 
		borderTopLeftRadius: 20, 
		borderTopRightRadius: 20, 
		padding: 20 
	},
	newsInfoBar: { 
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'space-between' 
	},
	newsInfo: { 
		paddingHorizontal: 10, 
		paddingVertical: 5, 
		backgroundColor: '#A9D4FD', 
		borderRadius: 10 
	}
})
export default DetailsScreen;