import * as React from 'react'
import {graphql, Link, PageProps} from 'gatsby';
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type DataProps = {
	allMdx: {
		nodes: Array<{
			frontmatter: {
				title: string,
				date: string,
				slug: string
			},
			id: string,
			excerpt: string
		}>
	}
}
const BlogPage : React.FC<PageProps<DataProps>> = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<ul>
				{
					data.allMdx.nodes.map((node) => (
						<article key={node.id}>
							<h2>
								<Link to={`/blog/${node.frontmatter.slug}`}>
									{node.frontmatter.title}
								</Link>
							</h2>
							<p>Posted: {node.frontmatter.date}</p>
							<p>Posted: {node.excerpt}</p>
						</article>
					))
				}
			</ul>
		</Layout>
	)
}
// page query -> if it has exported 'query' then we will have a data prop passed in
export const query = graphql`
	query {
  	allMdx(sort: {frontmatter: {date: DESC}}) {
    	nodes {
      	frontmatter {
        	date(formatString: "MMMM, D YYYY")
        	title
        	slug
      	}
      	id
      	excerpt(pruneLength: 20)
    	}
  	}
	}
`

export const Head : React.FC = () => <Seo title="My Blog Posts" />

export default BlogPage
