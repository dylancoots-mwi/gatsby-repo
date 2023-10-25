import * as React from 'react';
import {CodeBlock as ReactCodeBlock} from "react-code-blocks";

const CodeBlock : React.FC = (props) => <div>
	<ReactCodeBlock text={props?.code}/>
</div>

export default CodeBlock
