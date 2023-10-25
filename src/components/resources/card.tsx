import * as React from "react"
import styled from "@emotion/styled";

const Base = styled.li`
	list-style-type: none;
	background-color: #fff;
	box-shadow: 0 2px 0 rgba(54, 45, 89, 0.15);
	transition: box-shadow 0.3s;
	will-change: box-shadow;
	border-radius: 0.375rem;
	flex-direction: column;
	position: relative;
	&:hover, &:focus {
    text-decoration: none;
    box-shadow: 0 2px 0 rgba(54, 45, 89, 0.15), -0.1875rem -0.1875rem 0 0.1875rem #f2b712, 0 0 0 0.375rem #e1567c;
	}
`

const Link = styled.a`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: transparent;
	color: #e1567c;
	text-decoration: none;
`

const InfoContainer = styled.div`
	width: 100%;
	padding: 1rem;
	display: flex;
	flex: 1 0;
	flex-direction: column;
`

const ImageContainer = styled.div`
	width: 100%;
  height: 100%;
	background-style: var(--background-style);
`

type Resource = {
	id: string,
  title: string,
  imageUrl: string,
	type: string,
	topics: string[],
	date: string
}

const Card = (props: Resource) => {
	return (
    <Base>
			<Link as={'a'} href={'/'}/>
			<div style={{ ['--background-style' as any]: props.imageUrl }}/>
			<InfoContainer>
				<h3>{props.title}</h3>
				<p>{props.date}</p>
			</InfoContainer>
    </Base>
  )
}

export default Card
