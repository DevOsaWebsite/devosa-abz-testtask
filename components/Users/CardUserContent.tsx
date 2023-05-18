import React from "react"
import { Text } from "../Text"


export const CardUserContent: React.FC<CardContentProps> = (props) => {
	const { name, position, phone, email } = props;
	return (
		<div>
			<CardUserName name={name} />
			<div>
				<CardUserData text={position} />
				<CardUserData text={phone} />
				<CardUserData text={email} />
			</div>
		</div>
	)
}
const CardUserName: React.FC<UserCardName> = ({ name }) => {

	return (
		<Text type="p2">{name}</Text>
	)
}
const CardUserData: React.FC<CardUserData> = ({ text }) => {

	return (
		<Text type="p2">{text}</Text>
	)
}