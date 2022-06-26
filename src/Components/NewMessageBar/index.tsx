import {Component, ChangeEvent} from 'react'
import {InputGroup, Input, InputRightElement} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

type Props = {
	className?: string,
};

type State = {
	message: string
}

class NewMessageBar extends Component<Props, State>
{
	state:State = {
		message: "",
	}

	setMessage = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			message: event.target.value
		});
	}

	submitMessage = () => {
		console.log("Message submited! Your message: " + this.state.message);
		this.setState({
			message: ""
		});
	}

	render() {
		return(
			<div className={`${this.props.className ?? ""} w-11/12 mx-auto mt-3`} >
				<InputGroup>
					<Input type="text" placeholder="New Message..." focusBorderColor="red.200" value={this.state.message} onChange={this.setMessage}/>
					<InputRightElement
						className="cursor-pointer bg-red-200 rounded-r-md transition ease-in-out delay-50 active:bg-red-400 "
						onClick={this.submitMessage}
						children={
							<ArrowForwardIcon />
						}
					/>
				</InputGroup>
			</div>
		);
	}
}

export default NewMessageBar
