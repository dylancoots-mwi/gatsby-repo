import * as React from 'react';
import styled from '@emotion/styled'

const Button = styled.button`
  color: ${props => (props.primary ? '#fff' : '#000')};
	background-color: ${props => (props.primary ? '#e1567c' : 'transparent')};
	cursor: pointer;
	font-size: 0.875em;
	font-weight: 700;
	height: 2.5em;
	justify-content: center;
	letter-spacing: 0.2px;
	padding: 0 0.875em;
	border-radius: 2em;
`

export default Button

