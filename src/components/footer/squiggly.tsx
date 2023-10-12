import * as React from "react";
import styled from "@emotion/styled";

type Props = {
	preFooter?: boolean
}

const Svg = styled.svg<Props>`
  -webkit-transition: -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
  will-change: transform;
  display: block;
  margin: -4px 0;
  color: ${props => props.preFooter ? '#f2b712' : '#ececf1'};
  -ms-transform: rotate(${props => props.preFooter ? '2deg' : '0deg'});
  transform: rotate(${props => props.preFooter ? '2deg' : '0deg'});
	width: 100%
`

const Squiggly = ({ preFooter }: Props) => {
	const id = Math.floor(Math.random() * 100000)
	return <Svg preFooter={preFooter}>
		<defs>
			<pattern id={'line-'+id} x="0" y="0" width="15" height="8" patternUnits="userSpaceOnUse">
				<path d="M15 5.9c-3.8 0-3.8-4.4-7.5-4.4S3.7 5.9 0 5.9" fill="none" stroke="currentColor" strokeMiterlimit="10"
							strokeWidth="3"></path>
			</pattern>
		</defs>
		<rect x="0" y="0" width="100%" height="8" fill={`url(#line-${id})`}></rect>
</Svg>
}

export default Squiggly;
