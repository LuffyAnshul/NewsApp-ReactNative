import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	StatusBar,
	ScrollView,
	Image
} from 'react-native';
import CardView from '../components/CardView';

class HomeScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			navigation: props.navigation,
			isLoading: true,
			data: [],
		}
	}

	UNSAFE_componentWillMount() {
		fetch('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&pageSize=20&apiKey=961e5e5f44c7416ebb89268c8668e2f8')
        .then((response) => response.json())
        .then((responseJson) => {
			this.setState({ data: responseJson.articles })
        })
        .catch((error) => {
			console.error(error);
		})
		.finally(() => {
			this.setState({ isLoading: false })
		})
	}

	render() {
		return(
			<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
				<StatusBar backgroundColor={'transparent'} barStyle={"dark-content"} />

				<ScrollView>
					<View style={{ marginLeft: 12, marginVertical: 20 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Breaking News</Text>
					</View>

					{ this.state.isLoading ? 
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
							<Image source={require('../assets/BeanEater.gif')} /> 
							<Text style={{ fontWeight: 'bold', fontSize: 30 }}> Fetching . . . .  </Text>
						</View> : 
						<CardView data={this.state.data} navigation={this.state.navigation} />
					}

				</ScrollView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({

});
export default HomeScreen;