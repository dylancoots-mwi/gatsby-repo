import * as React from 'react';
import {PropsWithChildren} from "react";

type Props = {
	className?: string,
}

export const Twitter = ({ className }: PropsWithChildren<Props>) => <svg aria-hidden="true" className={className} viewBox="0 0 16 16" version="1.1">
	<path
		d="M16,3a6.56,6.56,0,0,1-1.89.52,3.29,3.29,0,0,0,1.44-1.82,6.57,6.57,0,0,1-2.08.8,3.3,3.3,0,0,0-5.59,3A9.32,9.32,0,0,1,1.11,2.1a3.32,3.32,0,0,0,1,4.38A3.27,3.27,0,0,1,.64,6.07,3.32,3.32,0,0,0,3.28,9.33a3.32,3.32,0,0,1-1.48.06,3.29,3.29,0,0,0,3.07,2.28A6.66,6.66,0,0,1,0,13a9.48,9.48,0,0,0,10.71-.39,9.61,9.61,0,0,0,3.65-7.9A6.67,6.67,0,0,0,16,3C15.41,3.3,15.56,3.7,16,3Z"
		fill="currentColor"></path>
</svg>

export const Github = ({ className }: PropsWithChildren<Props>) => <svg aria-hidden="true" className={className} viewBox="0 0 16 16" version="1.1">
	<path
		d="M8,0.2A8,8,0,0,0,5.47,15.79,0.4,0.4,0,0,0,6,15.4c0-.19,0-0.69,0-1.36C3.78,14.53,3.31,13,3.31,13a2.12,2.12,0,0,0-.89-1.17c-0.73-.5.05-0.49,0.05-0.49a1.68,1.68,0,0,1,1.23.82A1.7,1.7,0,0,0,6,12.8a1.71,1.71,0,0,1,.51-1.07c-1.78-.2-3.64-0.89-3.64-4a3.09,3.09,0,0,1,.82-2.15A2.88,2.88,0,0,1,3.8,3.52S4.47,3.3,6,4.34a7.58,7.58,0,0,1,4,0c1.53-1,2.2-.82,2.2-0.82a2.87,2.87,0,0,1,.08,2.12,3.09,3.09,0,0,1,.82,2.15c0,3.07-1.87,3.75-3.65,3.95A1.91,1.91,0,0,1,10,13.21c0,1.07,0,1.93,0,2.19a0.4,0.4,0,0,0,.55.38A8,8,0,0,0,8,.2Z"
		fill="currentColor"></path>
</svg>

export const Dribble = ({ className }: PropsWithChildren<Props>) => <svg aria-hidden="true" className={className} viewBox="0 0 16 16" version="1.1">
	<path
		d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16Zm6.75-6.9a10,10,0,0,0-4.26-.29,29.49,29.49,0,0,1,1.33,4.87A6.84,6.84,0,0,0,14.75,9.1ZM10.67,14.3A28.41,28.41,0,0,0,9.21,9.12,9.38,9.38,0,0,0,3.81,13.4,6.86,6.86,0,0,0,10.67,14.3ZM2.92,12.58A10.75,10.75,0,0,1,8.75,8C8.58,7.6,8.39,7.21,8.19,6.83a25.21,25.21,0,0,1-7,1A6.77,6.77,0,0,0,2.92,12.58Zm-1.61-6a25.49,25.49,0,0,0,6.32-.83,43.6,43.6,0,0,0-2.53-4A6.86,6.86,0,0,0,1.31,6.61ZM6.4,1.37a36.47,36.47,0,0,1,2.55,4A7.72,7.72,0,0,0,12.53,2.9,6.79,6.79,0,0,0,6.4,1.37Zm6.89,2.32A9.1,9.1,0,0,1,9.47,6.38c0.16,0.33.44,0.89,0.6,1.34a16,16,0,0,1,4.76.22A6.8,6.8,0,0,0,13.29,3.69Z"
		fill="currentColor"></path>
</svg>

export const Linkedin = ({ className }: PropsWithChildren<Props>) => <svg aria-hidden="true" className={className} viewBox="0 0 16 16" version="1.1">
	<path
		d="M14.82 0H1.18A1.17 1.17 0 0 0 0 1.15v13.7A1.17 1.17 0 0 0 1.18 16h13.64A1.17 1.17 0 0 0 16 14.85V1.15A1.17 1.17 0 0 0 14.82 0zM4.75 13.63H2.37V6h2.38zM3.55 5a1.38 1.38 0 1 1 1.38-1.42A1.38 1.38 0 0 1 3.56 5zm10.08 8.68h-2.37V9.92c0-.9 0-2-1.23-2s-1.42 1-1.42 2v3.78H6.24V6H8.5v1a2.5 2.5 0 0 1 2.26-1.23c2.4 0 2.85 1.58 2.85 3.64z"
		fill="currentColor"></path>
</svg>
