import {Component, ChangeEvent, KeyboardEvent} from 'react'
import {InputGroup, Input, InputRightElement} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons'

type Props = {
	className?: string,
	onSearch: (searchText: string) => any,
}

type State = {
	searchText: string,
}

class FriendSearchField extends Component<Props, State>
{
	state:State = {
		searchText: "",
	}

	onChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			searchText: event.target.value
		})
	}

	searchFriend = (event: KeyboardEvent) => {
		if(event.key === 'Enter'){
			this.props.onSearch(this.state.searchText);
		}
	}

	render() {
		return(
			<InputGroup size="md"  className={`${this.props.className ?? ""}`}>
				<Input
					type="text"
					placeholder="Seacrh..."
					value={this.state.searchText}
					onChange={this.onChange}
					focusBorderColor="red.200"
					onKeyUp={this.searchFriend}
				/>
				<InputRightElement children={<SearchIcon/>}/>
			</InputGroup>
		);
	}
}

export default FriendSearchField
