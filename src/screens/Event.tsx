import * as React from 'react';
import { Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

interface EventScreenProps extends NavigationScreenProps {
	/**
	 * Event id
	 */
	id: string;
}

export default class EventScreen extends React.Component<EventScreenProps> {

	static navigationOptions = {
		title: 'Event',
	};

	render() {
		const {
			id,
			navigation: { navigate },
		} = this.props;
		return (
			<React.Fragment>
				Event ID: {id}
				<Button
					title="Go to Events"
					onPress={() =>
						navigate('Events')
					}
				/>
			</React.Fragment>
		);
	}
}
