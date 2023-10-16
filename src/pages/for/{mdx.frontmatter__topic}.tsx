import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {graphql, PageProps} from "gatsby";

type Data = {
	mdx: {
		frontmatter: {
			title: string,
		}
	}
}

const ForPage : React.FC<PageProps<Data, React.ReactNode>> = ({ data, children }) => {
	return (
		<Layout pageTitle={data?.mdx?.frontmatter?.title}>
			{children}
		</Layout>
	)
}

export const query = graphql`
	query ($id: String) {
		mdx(id: {eq: $id}) {
			frontmatter {
				title
			}
		}
	}
`

export const Head : React.FC<PageProps<Data>> = ({ data }) => <Seo title={data?.mdx?.frontmatter?.title} />

export default ForPage
