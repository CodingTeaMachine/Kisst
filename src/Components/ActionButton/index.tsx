import {Component} from 'react'
import {AddIcon} from '@chakra-ui/icons';
import {Center} from '@chakra-ui/react';

type Props = {
	title: string,
	className?: string,
	onClick?: any,
}

class ActionButton extends Component<Props>
{
	render() {
		return(
			<Center className={`${this.props.className ?? ""} bg-red-200 h-[6%] select-none`}>
				<span className="text-white cursor-pointer flex items-center">
					<AddIcon w={5} className="mx-1"/>
					{this.props.title}
				</span>
			</Center>
		);
	}
}

export default ActionButton
