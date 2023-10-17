import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {graphql, PageProps} from "gatsby";
import styled from "@emotion/styled";
import Picker from "../../components/picker";
import {TertiaryButton} from "../../components/button";
import {useEffect} from "react";

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

const Header = styled.div`
	text-align: center;
	max-width: 750px;
	margin: 0 auto;
`

const Footer = styled.div`
	text-align: center;
`

const ForPage : React.FC<PageProps<Data, React.ReactNode>> = ({ data, children }) => {

	const [platformFlavor, setPlatformFlavor] = React.useState(null);
	const [subChildren, setSubChildren] = React.useState(null);
	const onPickerChange = ({ target: { value }}) => setPlatformFlavor(value);

	useEffect(() => {
		console.log(platformFlavor);
	}, [platformFlavor]);


	return (
		<Layout pageTitle={data?.mdx?.frontmatter?.title}>
			<Container>
				<Header>
					<h2>Getting Started is Simple</h2>
				</Header>
				{data?.mdx?.frontmatter?.images?.length > 0 && (
					<Picker items={data.mdx.frontmatter.images} onChange={onPickerChange}/>
				)}
				{children}
				<Footer>
					<p>
						Check our <a href="">documentation</a> for the latest instructions.
					</p>
					<TertiaryButton>
						SEE ALL PLATFORMS
					</TertiaryButton>
				</Footer>
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
