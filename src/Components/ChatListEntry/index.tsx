import {Component} from 'react'
import {Avatar} from '@chakra-ui/react'

type Props = {
	className?: string,
	avatar?: string,
	firstName: string,
	lastName: string
	key: number,
	lastMessage: string,
	onClick?: any,
}

class ChatListEntry extends Component<Props>
{
	render() {
		return(
			<div className={`${this.props.className ?? ""} ml-1 align-middle h-10 flex items-center cursor-pointer transition duration-100 hover:bg-red-100`} onClick={this.props.onClick}>
				<Avatar size="xs" src={require(`../../Assets/Images/${this.props.avatar}`)} className="h-full"/>
				<div className="flex flex-col ml-2 text-sm">
					<span className="name font-bold">
						{this.props.firstName} {this.props.lastName}
					</span>
					<span className="msg mb-1 truncate max-w-[12rem]">
						{this.props.lastMessage}
					</span>
				</div>
			</div>
		);
	}
}

export default ChatListEntry
