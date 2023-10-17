import * as React from 'react';
import styled from "@emotion/styled";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {pickerContainer, gatsbyImage} from "./picker.module.css"

type Props = {
	items: PickerItems
}

type PickerItems = Array<{
	label: string,
	value: string,
	src: File,
}>

const Label = styled.label`
  color: #362d59;
  display: block;
  font-size: .875rem;
  font-weight: 700;
`

const ImageContainer = styled.div`
	margin-left: -0.5rem;
	margin-right: -0.5rem;
	min-height: 3rem;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
`

const Picker : React.FC<Props> = ({items}) => {
	return (
    <div className={pickerContainer}>
      {items.map((item, index) => (
        <Label>
					<input type="radio" value={item.value} key={index} name="platform" />
					<div>
						<ImageContainer>
							<GatsbyImage image={getImage(item.src)} alt={item.label} className={gatsbyImage}/>
						</ImageContainer>
						<span>{item.label}</span>
					</div>
				</Label>
      ))}
    </div>
  )
}

export default Picker
