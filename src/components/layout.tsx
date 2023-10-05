import * as React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import {
	container,
	heading
} from './layout.module.css'
import Header from "./header";
import Footer from "./footer";
const Layout : React.FC<{ pageTitle: string, children: React.ReactNode }> = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
          title
        }
			}
		}
	`)
	return (
		<div className={container}>
			<Header/>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
			<Footer/>
		</div>
	)
}

export default Layout
