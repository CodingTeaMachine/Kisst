import {Component} from 'react'
import {Avatar} from '@chakra-ui/react';

type Props = {
	className?: string,
	avatar?: string,
	firstName: string,
	lastName: string
	key: number,
}

class FriendListEntry extends Component<Props>
{
	render() {
		return(
			<div className={`${this.props.className ?? ""} ml-1 align-middle h-8 flex items-center cursor-pointer transition duration-100 hover:bg-red-100`}>
				<Avatar size="xs" src={require(`../../Assets/Images/${this.props.avatar}`)}/>
				<span className="name ml-2 content-center truncate">
					{this.props.firstName} {this.props.lastName}
				</span>
			</div>
		);
	}
}

export default FriendListEntry
