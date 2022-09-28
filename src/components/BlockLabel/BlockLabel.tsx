import React from 'react';
import s from "./BlockLabel.module.scss"

interface BlockLabel{
    text: string;
}

const BlockLabel: React.FC<BlockLabel> = ({text}) => {
    return (
        <p className={s.blockLabel}>
            {text}
        </p>
    );
};

export default BlockLabel;