import React from 'react';
import {ProgressWrapper, ProgressDiv} from './SkillsStyle';

const ProgressBarLine = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
		}
		
		setStyle(newStyle);
	}, 200);

    return (
        <ProgressWrapper>
			<ProgressDiv style={style}>{done}%</ProgressDiv>
        </ProgressWrapper>
    )
}

export default ProgressBarLine
