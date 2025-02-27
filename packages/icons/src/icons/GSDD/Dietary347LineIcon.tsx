import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary347LineIconSvg from '../../assets/GSDD/Dietary_347_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary347LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary347LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary347LineIcon.Style = SvgIcon;
Dietary347LineIcon.displayName = 'Dietary347LineIcon';

export default Dietary347LineIcon
