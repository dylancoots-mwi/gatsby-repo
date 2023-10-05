import * as React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  color: ${props => (props.silent ? 'inherit' : '#000')};
	background-color: ${props => (props.silent ? 'transparent' : 'inherit')};
	box-shadow: ${props => (props.silent ? 'none' : 'inherit')};
	border-color: ${props => (props.silent ? 'transparent' : 'inherit')};
	cursor: pointer;
	font-size: 0.875em;
	font-weight: 700;
	height: 2.5em;
	justify-content: center;
	letter-spacing: 0.2px;
	padding: 0 0.875em;
	border-radius: 2em;
	text-transform: uppercase;
	&:hover {
		background-color: rgba(121,98,140,.075)
	}
`

export const PrimaryButton = styled(Button)`
	background-color: #e1567c;
	border-color: transparent;
	box-shadow: 0 2px 0 rgba(54,45,89,.1);
	color: #fff;
	&:hover {
    background-color: #c73852;
  }
`

export default Button

