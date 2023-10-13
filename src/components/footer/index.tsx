import * as React from 'react';
import Squiggly from "./squiggly";
import { socialContainer, socialList, socialLink, socialIcon, copyrightContainer } from './footer.module.css'
import {Dribble, Github, Linkedin, Twitter} from "./icons";
import {graphql, Link, useStaticQuery} from "gatsby";
import Button, {SecondaryButton} from "../button";

import sentryLogo from '../../images/sentry-wordmark-light.svg'

const Footer = () => {
	const { site: { siteMetadata: { socials } } } = useStaticQuery(
		graphql`
      query {
        site {
          siteMetadata {
            socials {
              twitter
              github
              dribble
              linkedin
            }
          }
        }
      }
    `
	)

	return <footer>
		<Squiggly/>
		<div className={socialContainer}>
			<ul className={socialList}>
				<SecondaryButton silent>
					<a href={socials?.twitter}>
						<Twitter className={socialIcon}/>
						<span>Twitter</span>
					</a>
				</SecondaryButton>
				<SecondaryButton silent>
					<a href={socials?.github}>
						<Github className={socialIcon}/>
						<span>Github</span>
					</a>
				</SecondaryButton>
				<SecondaryButton silent>
					<a href={socials?.dribble}>
						<Dribble className={socialIcon}/>
						<span>Dribble</span>
					</a>
				</SecondaryButton>
				<SecondaryButton silent>
					<a href={socials?.linkedin}>
						<Linkedin className={socialIcon}/>
						<span>Linkedin</span>
					</a>
				</SecondaryButton>
			</ul>
		</div>
		<div className={copyrightContainer}>
			&copy; {new Date().getFullYear()} This is a mock for practice
			<Link to="/">
				<img src={sentryLogo} alt="footer logo" width={200}/>
			</Link>
		</div>
	</footer>;
}

export default Footer;
