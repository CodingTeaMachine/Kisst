import {Component} from 'react'
import HeaderTitle from '../HeaderTitle'
import ActionButton from '../ActionButton';
import ChatListEntry from '../ChatListEntry';
type Props = {
	className?: string
}

class ChatList extends Component<Props>
{
	usedKeys: number[] = [];
	firstNames: string[] = ['Mark', 'John', 'Eliot', 'Abel', 'Flora', 'Bernadett', 'Kristina'];
	lastNames: string[] = ['Smith', 'Johnson', 'Enderson', 'Adams'];
	avatar:string = 'avatar.jpg';
	chatCount:number = 40;

	chatList: JSX.Element[] = [];

	getRandomInt(max: number):number {
		return Math.floor(Math.random() * max)
	}

	getRandomKey():number {
		const key = this.getRandomInt(1000);

		if(!this.usedKeys.includes(key)) {
			this.usedKeys.push(key);
			return key;
		}

		return this.getRandomKey();
	}


	render() {
		for(let i = 0; i < this.chatCount; i++) {
			const firstName = this.firstNames[this.getRandomInt(7)];
			const lastName = this.lastNames[this.getRandomInt(4)];
			this.chatList.push(
				<ChatListEntry
					avatar={this.avatar}
					firstName={firstName}
					lastName={lastName}
					lastMessage={"Szereti két kövér kakasát"}
					key={this.getRandomKey()}
					onClick={() => console.log(`opening chat with: ${firstName} ${lastName}`)}
				/>
			)
		}


		return(
			<div className={`${this.props.className}`}>
				<HeaderTitle title={"Chat List"} className={"header-title-size"}/>
				<div className="chat-list-container h-[89%] divide-y flex flex-col overflow-y-scroll">
					{this.chatList}
				</div>
				<ActionButton title={"New Chat"} onClick={() => console.log("creating a chat")}/>
			</div>
		);
	}
}

export default ChatList;
