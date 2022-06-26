import {Component} from 'react'
import {Box, Avatar} from '@chakra-ui/react'

import './index.scss'

type Props = {
	className?: string,
	isSender: boolean,
	content: string,
	avatar: string,
}

class Message extends Component<Props>
{
	render() {
		return(
			<div className={`${this.props.className ?? ""}`}>
				<span className={`${this.props.isSender ? "float-right left-1" : "float-left right-1"} relative top-20`}>
					<Avatar size="2xs" src={require(`../../Assets/Images/${this.props.avatar}`)}/>
				</span>
				<Box className={`${this.props.isSender ? "sender" : "receiver"} rounded-3xl text-[15px] max-w-[45%] my-1`}>
					<p className="message-content p-2 m-2">
						{this.props.content}
					</p>
				</Box>
			</div>
		);
	}
}


export default Message
