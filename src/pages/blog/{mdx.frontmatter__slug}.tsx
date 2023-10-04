import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {graphql, PageProps} from "gatsby";

type Data = {
	mdx: {
		frontmatter: {
			title: string,
			date: string,
		}
	}
}

const BlogPost : React.FC<PageProps<Data, React.ReactNode>> = ({ data, children }) => {
	return (
		<Layout pageTitle={data?.mdx?.frontmatter?.title}>
			<p>{data?.mdx?.frontmatter?.date}</p>
			{children}
		</Layout>
	)
}

export const query = graphql`
	query ($id: String) {
		mdx(id: {eq: $id}) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
			}
		}
	}
`

export const Head : React.FC<PageProps<Data>> = ({ data }) => <Seo title={data?.mdx?.frontmatter?.title} />

export default BlogPost
