import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class MyScreen extends React.Component {
	static navigationOptions = {
		title: 'My screen',
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.defaultText}>this is my screen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#ff0000',
		justifyContent: 'center',
		alignItems: 'center',
	},
	defaultText: {
		color: '#fff'
	}
});
