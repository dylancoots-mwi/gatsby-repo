import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {graphql, PageProps} from "gatsby";
import styled from "@emotion/styled";
import Picker from "../../components/picker";

type Data = {
	mdx: {
		frontmatter: {
			title: string,
			images: Array<{
				label: string,
				value: string
				src: File
			}>
		}
	}
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  background-color: rgb(246, 246, 248);
`

const ForPage : React.FC<PageProps<Data, React.ReactNode>> = ({ data, children }) => {
	return (
		<Layout pageTitle={data?.mdx?.frontmatter?.title}>
			<Container>
				<h2>Getting Started is Simple</h2>
				<Picker items={data.mdx.frontmatter.images}/>
				{children}
			</Container>
		</Layout>
	)
}

export const query = graphql`
	query ($id: String) {
		mdx(id: {eq: $id}) {
			frontmatter {
				title
				images {
					label
					value
					src {
            childImageSharp {
              gatsbyImageData
            }
          }
				}
			}
		}
	}
`

export const Head : React.FC<PageProps<Data>> = ({ data }) => <Seo title={data?.mdx?.frontmatter?.title} />

export default ForPage
