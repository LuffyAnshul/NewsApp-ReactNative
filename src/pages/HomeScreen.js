import React from 'react';
import {
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
			business: [],
			entertainment: [],
			general: [],
			health: [],
			science: [],
			sports: [],
			technology: []
		}
	}

	UNSAFE_componentWillMount() {
		fetch('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&pageSize=20&apiKey=ba872f0227944000ad56bc2f96855b54')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ data: responseJson.articles })
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				this.setState({ isLoading: false })
			});

		fetch('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&category=business&pageSize=20&apiKey=ba872f0227944000ad56bc2f96855b54')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ business: responseJson.articles })
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				this.setState({ isLoading: false })
			});
			
		fetch('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&category=entertainment&pageSize=20&apiKey=ba872f0227944000ad56bc2f96855b54')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ entertainment: responseJson.articles })
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				this.setState({ isLoading: false })
			});
			
		fetch('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&category=general&pageSize=20&apiKey=ba872f0227944000ad56bc2f96855b54')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ general: responseJson.articles })
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				this.setState({ isLoading: false })
			});
			
		fetch('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&category=health&pageSize=20&apiKey=ba872f0227944000ad56bc2f96855b54')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ health: responseJson.articles })
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				this.setState({ isLoading: false })
			});
			
		fetch('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&category=science&pageSize=20&apiKey=ba872f0227944000ad56bc2f96855b54')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ science: responseJson.articles })
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				this.setState({ isLoading: false })
			});
			
		fetch('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&category=sports&pageSize=20&apiKey=ba872f0227944000ad56bc2f96855b54')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ sports: responseJson.articles })
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				this.setState({ isLoading: false })
			});
		
		fetch('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&category=technology&pageSize=20&apiKey=ba872f0227944000ad56bc2f96855b54')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ technology: responseJson.articles })
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				this.setState({ isLoading: false })
			});
	}

	render() {
		return(
			<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
				<StatusBar backgroundColor={'transparent'} barStyle={"dark-content"} />

				<ScrollView>
					<View style={{ marginLeft: 12, marginVertical: 20 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Breaking News</Text>
						<View style={{ width: 50, backgroundColor: 'red', height: 5 }} />
					</View>

					{ this.state.isLoading ? 
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
							<Image source={require('../assets/BeanEater.gif')} /> 
							<Text style={{ fontWeight: 'bold', fontSize: 30 }}> Fetching . . . .  </Text>
						</View> : 
						<CardView data={this.state.data} navigation={this.state.navigation} />
					}

					<View style={{ marginLeft: 12, marginVertical: 20 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Business</Text>
						<View style={{ width: 50, backgroundColor: 'red', height: 5 }} />
					</View>

					{ this.state.isLoading ? 
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
							<Image source={require('../assets/BeanEater.gif')} /> 
							<Text style={{ fontWeight: 'bold', fontSize: 30 }}> Fetching . . . .  </Text>
						</View> : 
						<CardView data={this.state.business} navigation={this.state.navigation} />
					}

					<View style={{ marginLeft: 12, marginVertical: 20 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Entertainment</Text>
						<View style={{ width: 50, backgroundColor: 'red', height: 5 }} />
					</View>

					{ this.state.isLoading ? 
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
							<Image source={require('../assets/BeanEater.gif')} /> 
							<Text style={{ fontWeight: 'bold', fontSize: 30 }}> Fetching . . . .  </Text>
						</View> : 
						<CardView data={this.state.entertainment} navigation={this.state.navigation} />
					}

					<View style={{ marginLeft: 12, marginVertical: 20 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 30 }}>General</Text>
						<View style={{ width: 50, backgroundColor: 'red', height: 5 }} />
					</View>

					{ this.state.isLoading ? 
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
							<Image source={require('../assets/BeanEater.gif')} /> 
							<Text style={{ fontWeight: 'bold', fontSize: 30 }}> Fetching . . . .  </Text>
						</View> : 
						<CardView data={this.state.general} navigation={this.state.navigation} />
					}

					<View style={{ marginLeft: 12, marginVertical: 20 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Health</Text>
						<View style={{ width: 50, backgroundColor: 'red', height: 5 }} />
					</View>

					{ this.state.isLoading ? 
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
							<Image source={require('../assets/BeanEater.gif')} /> 
							<Text style={{ fontWeight: 'bold', fontSize: 30 }}> Fetching . . . .  </Text>
						</View> : 
						<CardView data={this.state.health} navigation={this.state.navigation} />
					}

					<View style={{ marginLeft: 12, marginVertical: 20 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Science</Text>
						<View style={{ width: 50, backgroundColor: 'red', height: 5 }} />
					</View>

					{ this.state.isLoading ? 
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
							<Image source={require('../assets/BeanEater.gif')} /> 
							<Text style={{ fontWeight: 'bold', fontSize: 30 }}> Fetching . . . .  </Text>
						</View> : 
						<CardView data={this.state.science} navigation={this.state.navigation} />
					}

					<View style={{ marginLeft: 12, marginVertical: 20 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Sports</Text>
						<View style={{ width: 50, backgroundColor: 'red', height: 5 }} />
					</View>

					{ this.state.isLoading ? 
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
							<Image source={require('../assets/BeanEater.gif')} /> 
							<Text style={{ fontWeight: 'bold', fontSize: 30 }}> Fetching . . . .  </Text>
						</View> : 
						<CardView data={this.state.sports} navigation={this.state.navigation} />
					}

					<View style={{ marginLeft: 12, marginVertical: 20 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Technology</Text>
						<View style={{ width: 50, backgroundColor: 'red', height: 5 }} />
					</View>

					{ this.state.isLoading ? 
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
							<Image source={require('../assets/BeanEater.gif')} /> 
							<Text style={{ fontWeight: 'bold', fontSize: 30 }}> Fetching . . . .  </Text>
						</View> : 
						<CardView data={this.state.technology} navigation={this.state.navigation} />
					}

					<View style={{ paddingVertical: 10 }} />

				</ScrollView>
			</SafeAreaView>
		);
	}
}
export default HomeScreen;
