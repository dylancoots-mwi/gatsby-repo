import * as React from 'react';
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {ReactNode} from "react";
import topics from "./topics";

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const ChipWrapper = styled.div``

const TopicWrapper = styled.div``

const chipCss = css`
  margin: 0 0.125em 0 0;
  list-style: none;
  a {
    background: #f6f6f6;
    border-radius: 0.125em;
    line-height: 1.5em;
    color: #8c5393;
    font-size: 0.875em;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
		text-transform: capitalize;
  }
`

const BaseChip = (props: {type: string, color?: string, children: ReactNode, onClick?: Function}) =>
	<li css={chipCss}>
		<a href={`?tag=${props.type}`} css={{borderLeft: props.color && `0.5rem solid ${props.color}`}}>
			{props.children}
		</a>
	</li>

const types = [
	['video', '#584674'], ['demo', '#f4834f'], ['audio', '#e1567c'], ['pdf', '#8c5393'], ['event', '#f2b712']
]

const Filter = () =>
	<Container>
		<input type="text" placeholder="Search"/>
		<ChipWrapper>
			{types.map(([type, color]) =>
				<BaseChip
					key={type}
					color={color}
					type={type}
				>
					{type}
				</BaseChip>)
			}
		</ChipWrapper>
		<TopicWrapper>
			<h4>Topics</h4>
			{topics.map(topic =>
				<BaseChip
					key={topic}
					type={topic}
				>
					{topic}
				</BaseChip>)
			}
		</TopicWrapper>
	</Container>

export default Filter
