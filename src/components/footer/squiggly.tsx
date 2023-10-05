import * as React from "react";
import { wavyLine } from './footer.module.css'

const Squiggly = () =>
<svg className={wavyLine} color="" width="100%" height="8" aria-hidden="true">
	<defs>
		<pattern id="line-2047" x="0" y="0" width="15" height="8" patternUnits="userSpaceOnUse">
			<path d="M15 5.9c-3.8 0-3.8-4.4-7.5-4.4S3.7 5.9 0 5.9" fill="none" stroke="currentColor" strokeMiterlimit="10"
						strokeWidth="3"></path>
		</pattern>
	</defs>
	<rect x="0" y="0" width="100%" height="8" fill="url(#line-2047)"></rect>
</svg>

export default Squiggly;
