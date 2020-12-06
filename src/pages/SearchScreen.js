import React from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	StatusBar,
	Button,
	Alert
} from 'react-native';
import { Searchbar, Chip, Subheading } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-datepicker';

import SearchListView from '../components/SearchListView';


class SearchScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			navigation: props.navigation,
			data: [],
			searchQuery: '',
			iconFilter: 'filter',
			showFilter: true,
			isLoading: true,
			rel: false,
			pop: false,
			pub: true,
			color: 'blue',
			fromDate: (new Date).toISOString().substring(0,10),
			toDate: (new Date).toISOString().substring(0,10),
			itemsFetched: 20,
			totalResults: 0,
		}
	}

 	sortBySelected (string) {
		// this.setState({ rel: true });
		if (string === 'rel'){
			this.setState({ rel: !this.state.rel, pop: false, pub: false })
		} else if (string === 'pop') {
			this.setState({ pop: !this.state.pop, rel: false, pub: false })
		} else {
			this.setState({ pub: !this.state.pub, pop: false, rel: false })
		}
	}

	getData() {

		let sortBy = 'publishedAt';
		let itemsFetched = this.state.itemsFetched;
		if (this.state.rel === true) {
			sortBy = 'relevancy'
		} else if (this.state.pop === true) {
			sortBy = 'popularity'
		}

		this.setState({ isLoading: true });

		let q = encodeURIComponent(this.state.searchQuery);

		let uri = `https://newsapi.org/v2/everything?q=${q}&language=en&sortBy=${sortBy}&pageSize=${itemsFetched}&from=${this.state.fromDate}&to=${this.state.toDate}&apiKey=961e5e5f44c7416ebb89268c8668e2f8`

		fetch(uri)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ data: responseJson.articles, totalResults: responseJson.totalResults })
				console.log(this.state.data);
			})
			.catch((error) => {
				console.error(error);
			}).
			finally(() => {
				this.setState({ isLoading: false })
			})
	}

	render() {
		return(
			<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
				<StatusBar backgroundColor={'transparent'} barStyle={"dark-content"} />
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
					<Searchbar
						placeholder="Search, Filter & Read"
						onChangeText={(searchQuery) => {
							this.setState({ searchQuery, showFilter: false, isLoading: true })
						}}
						value={this.state.searchQuery}
						icon={() => <MaterialCommunityIcons name={this.state.iconFilter} size={26} /> }
						onIconPress={() => {
							if (this.state.iconFilter === 'filter') {
								this.setState({ iconFilter: 'filter-outline' })
							} else {
								this.setState({ iconFilter: 'filter' })
							}
							this.setState({ showFilter: !this.state.showFilter })
						}}
						style={{ flex: 8 }}
					/>
					<Button style={{ flex: 4 }} color='#000' title="Search" onPress={() => this.getData()} />
				</View>
				
				{ !this.state.showFilter ? null :
					<View style={{ paddingHorizontal: 10 }}>
						<Subheading style={{ marginLeft: 30, paddingVertical: 10, fontWeight: 'bold' }}>Sort By: </Subheading>
						<View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
							<Chip mode="outlined" selected={this.state.rel} selectedColor={this.state.color} onPress={() => this.sortBySelected("rel")} children="Relevance" />
							<Chip mode="outlined" selected={this.state.pop} selectedColor={this.state.color} onPress={() => this.sortBySelected("pop")} children="Popularity" />
							<Chip mode="outlined" selected={this.state.pub} selectedColor={this.state.color} onPress={() => this.sortBySelected("pub")} children="publishedAt" />
						</View>

						<Subheading style={{ marginLeft: 30, paddingVertical: 10, fontWeight: 'bold', marginTop: 10 }}>From Date: </Subheading>
						<DatePicker
							style={styles.datePickerStyle}
							date={this.state.fromDate} 
							mode="date"
							placeholder="Select Date"
							format="YYYY-MM-DD"
							maxDate={new Date()}
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
								dateIcon: {
									position: 'absolute',
									left: 0,
									top: 4,
									marginLeft: 0,
								},
								dateInput: {
									marginLeft: 36,
								},
							}}
							onDateChange={(fromDate) => {
								this.setState({ fromDate });
								console.log(this.state.fromDate)
							}}
						/>

						<Subheading style={{ marginLeft: 30, paddingVertical: 10, fontWeight: 'bold', marginTop: 10 }}>To Date: </Subheading>
						<DatePicker
							style={styles.datePickerStyle}
							date={this.state.toDate} 
							mode="date"
							placeholder="Select Date"
							format="YYYY-MM-DD"
							maxDate={new Date()}
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
								dateIcon: {
									position: 'absolute',
									left: 0,
									top: 4,
									marginLeft: 0,
								},
								dateInput: {
									marginLeft: 36,
								},
							}}
							onDateChange={(toDate) => {
								this.setState({ toDate });
								console.log(this.state.toDate)
							}}
						/>
					</View>
				}

				{
					this.state.isLoading ? null : <SearchListView data={this.state.data} navigation={this.state.navigation} />
				}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	datePickerStyle: {
		width: 200,
	},
});
export default SearchScreen;