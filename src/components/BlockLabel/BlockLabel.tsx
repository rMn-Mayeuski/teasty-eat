import React from 'react';
import s from "./BlockLabel.module.scss"

interface BlockLabel{
    text: string,
    color?: string,
}

const BlockLabel: React.FC<BlockLabel> = ({text, color}) => {
    return (
        <p className={s.blockLabel} style={{color}}>
            {text}
        </p>
    );
};

export default BlockLabel;