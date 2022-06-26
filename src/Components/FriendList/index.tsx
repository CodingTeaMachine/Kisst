import {Component} from 'react'
import FriendListEntry from '../FriendListEntry'
import HeaderTitle from '../HeaderTitle'
import ActionButton from '../ActionButton';
import FriendSearchField from '../FriendSearchField';

type Props = {
	className?: string
}

type People = {
	firstName: string,
	lastName: string,
}

type State = {
	usedKeys: number[],
	generatedPeople: People[],
	firstNames: string[],
	lastNames: string[],
	friendsToGenerate: number,
	friendList: JSX.Element[],
}

class FriendList extends Component<Props, State>
{
	state: State = {
		usedKeys: [],
		generatedPeople: [],
		firstNames: ['Mark', 'John', 'Eliot', 'Abel', 'Flora', 'Bernadett', 'Kristina'],
		lastNames: ['Smith', 'Johnson', 'Anderson', 'Adams'],
		friendsToGenerate: 40,
		friendList: [],
	}

	avatar:string = 'avatar.jpg'

	getRandomInt(max: number):number {
		return Math.floor(Math.random() * max)
	}

	getRandomKey = ():number => {
		const key:number = this.getRandomInt(1000);

		if(!this.state.usedKeys.includes(key)) {
			this.state.usedKeys.push(key);
			return key;
		}

		return this.getRandomKey();
	}

	searchFriend = (searchText: string):any => {
		console.log(this.state.generatedPeople.filter((person: People) => {
			return (person.firstName + " " + person.lastName).includes(searchText);
		}))
	}

	render() {

		for(let i = 0; i < this.state.friendsToGenerate; i++) {
			const generatedFirstName = this.state.firstNames[this.getRandomInt(7)];
			const generatedLastName = this.state.lastNames[this.getRandomInt(4)];

			this.state.generatedPeople.push({
				firstName: generatedFirstName,
				lastName: generatedLastName
			})

			this.state.friendList.push(
				<FriendListEntry
					avatar={this.avatar}
					firstName={generatedFirstName}
					lastName={generatedLastName}
					key={this.getRandomKey()}
				/>
			)
		}
		return (
			<div className={`${this.props.className ?? ""} flex flex-col select-none`}>
				<HeaderTitle title={"Friend List"} className={"header-title-size"}/>
				<FriendSearchField onSearch={this.searchFriend}/>
				<div className="friend-list-container divide-y flex flex-col overflow-y-scroll h-[84%]">
					{ this.state.friendList }
				</div>
				<ActionButton title={"New Friend"} onClick={() => console.log("adding a friend")}/>
			</div>
		);
	}
}

export default FriendList
