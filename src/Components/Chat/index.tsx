import {Component} from 'react'
import HeaderTitle from '../HeaderTitle'
import Message from '../Message';
import {Center, Divider} from '@chakra-ui/react';
import NewMessageBar from '../NewMessageBar';
import MessageType from '../../message.type';

type Props = {
	className?: string
}

type State = {
	messages: MessageType[]
}

class Chat extends  Component<Props, State>
{
	state:State = {
		messages: [
			{
				content: "Szia Mia te cuki kakasos bácsi asdasdasdadasdasdasdasdasdasasdasdasdasdasdasdasdasdasdsa",
				isSender: true,
				id: 1,
			},
			{
				content: "Szia Mia te cuki kakasos bácsi asdasdasdadasdasdasdasdasdasasdasdasdasdasdasdasdasdasdsa",
				isSender: false,
				id: 2,
			},
			{
				content: "Szia Mia te cuki kakasos bácsi asdasdasdadasdasdasdasdasdasasdasdasdasdasdasdasdasdasdsa",
				isSender: true,
				id: 3,
			},
			{
				content: "Szia Mia te cuki kakasos bácsi asdasdasdadasdasdasdasdasdasasdasdasdasdasdasdasdasdasdsa",
				isSender: false,
				id: 4,
			},
			{
				content: "Szia Mia te cuki kakasos bácsi asdasdasdadasdasdasdasdasdasasdasdasdasdasdasdasdasdasdsa",
				isSender: true,
				id: 5,
			},
			{
				content: "Szia Mia te cuki kakasos bácsi asdasdasdadasdasdasdasdasdasasdasdasdasdasdasdasdasdasdsa",
				isSender: false,
				id: 6,
			},
			{
				content: "Szia Mia te cuki kakasos bácsi asdasdasdadasdasdasdasdasdasasdasdasdasdasdasdasdasdasdsa",
				isSender: true,
				id: 7,
			},
			{
				content: "Szia Mia te cuki kakasos bácsi asdasdasdadasdasdasdasdasdasasdasdasdasdasdasdasdasdasdsa",
				isSender: false,
				id: 8,
			},
		]
	}
	render() {
		const messageComponents: JSX.Element[] = [];
		this.state.messages.forEach(message => {
			messageComponents.push(
				<Message isSender={message.isSender} content={message.content} avatar={'avatar.jpg'} key={message.id}/>
			)
		})

		return(
			<div className={`${this.props.className}`}>
				<HeaderTitle title={"Chat"} className={"header-title-size"}/>
				<Center className="h-10">Kiss Tímea</Center>
				<Divider/>
				<div className="text-container  overflow-y-scroll h-[80%]">
					<div className="inner-container mx-4 flex flex-col">
						{messageComponents}
					</div>
				</div>
				<NewMessageBar/>
			</div>
		);
	}
}

export default Chat
