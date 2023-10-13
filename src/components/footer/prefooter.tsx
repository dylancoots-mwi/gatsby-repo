import * as React from 'react'
import { container, linksContainer, companyContainer, categoryList, platformsContainer } from './prefooter.module.css'
import Squiggly from "./squiggly";
import preFooterConfig from "../../../config/prefooter";
import Button, {SecondaryButton} from "../button";
import styled from "@emotion/styled";

const PreFooter = () => {
	const categories = Object.entries(preFooterConfig)
	const platforms = categories.pop()[1]
	const H3 = styled.h3`
		text-transform: capitalize;
    margin-bottom: 0.5rem;
		font-size: 1rem;
	`
	return <div className={container}>
		<Squiggly preFooter />
		<div className={linksContainer}>
			<div className={companyContainer}>
				{categories.map(([category, links], index) =>
					<div key={index}>
						<H3>{category}</H3>
						<ul className={categoryList}>
							{links?.map(({ link, name }, index) =>
								<li>
									<SecondaryButton silent key={link}>
										<a href={link}>{name}</a>
									</SecondaryButton>
								</li>
							)}
						</ul>
					</div>
				)}
			</div>
			<div className={platformsContainer}>
				<div>
					<H3>Platforms</H3>
					<ul className={categoryList}>
						{platforms?.map(({ link, name }, index) =>
              <li>
                <SecondaryButton silent key={link}>
                  <a href={link}>{name}</a>
                </SecondaryButton>
              </li>
            )}
					</ul>
				</div>
			</div>
		</div>
	</div>
}

export default PreFooter;
