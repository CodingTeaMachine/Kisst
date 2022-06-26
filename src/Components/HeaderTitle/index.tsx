import { Center } from '@chakra-ui/react';
import {Component} from 'react'

type Props = {
	className?: string,
	title: string,
}

class HeaderTitle extends Component<Props>
{
	render(){
		return(
			<Center className={`${this.props.className ?? ""} bg-red-400 text-white`}>
				{this.props.title}
			</Center>
		);
	}
}

export default HeaderTitle
