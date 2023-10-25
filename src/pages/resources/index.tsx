import * as React from 'react';
import styled from "@emotion/styled";
import Layout from "../../components/layout";
import {graphql, StaticQuery, StaticQueryProps} from "gatsby";
import Card from "../../components/resources/card";
import Filter from "../../components/resources/filter";
import {useEffect} from "react";
import Seo from "../../components/seo";

export type Node = {
	id: string,
	childMdx: {
		frontmatter: {
			date: string,
			title: string,
			imageUrl: string
			topics: string[]
		},
		id: string,
	}
}

type Shape = {
	allFile: {
		nodes: Array<Node>
	}
}

const Resources = ({ nodes }) => {
	const resources = nodes.map(({childMdx: {frontmatter}}) => ({...frontmatter}))
	return <ul>
		{resources.map(resource => <Card {...resource}/>)}
	</ul>
}

const ResourcesWrapper = styled.div`
	list-style: none;
	padding: 0;
	margin: 0;
	display: grid;
	grid-row-gap: 2rem;
	grid-column-gap: 2rem;
	grid-auto-flow: dense;
`

const FilterWrapper = styled.div`

`

const Wrapper = styled.div`
	display: flex;
  flex-direction: row;
`

export const query = graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "resources"}, extension: {eq: "mdx"}}) {
    nodes {
      childMdx {
        frontmatter {
          date
          title
          imageUrl
          type
          topics
        }
      }
    }
  }
}
`

const ResourcesPage = ({ data  }) => {
	const {allFile: { nodes }} = data;
	const [filteredNodes, setFilteredNodes] = React.useState(nodes);

	useEffect(() => {
		const tag = (new URLSearchParams(location.search))?.get('tag');
		if (tag) {
			setFilteredNodes(
				nodes.filter(({ childMdx: { frontmatter: { topics, type }}}) => topics.includes(tag) || type === tag)
			)
		} else {
			setFilteredNodes(nodes);
		}
	}, [])

	return (
    <Layout pageTitle="Resourcey Resource Library">
			<Wrapper>
				<FilterWrapper>
					<Filter/>
				</FilterWrapper>
				<ResourcesWrapper>
					<Resources nodes={filteredNodes}/>
				</ResourcesWrapper>
			</Wrapper>
    </Layout>
  )
}

export const Head = () => <Seo title={'Resourcey Resource Library'}/>

export default ResourcesPage
