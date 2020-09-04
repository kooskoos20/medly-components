import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary268LineIconSvg from '../../assets/GSDD/Dietary_268_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary268LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary268LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary268LineIcon.Style = SvgIcon;
Dietary268LineIcon.displayName = 'Dietary268LineIcon';

export default Dietary268LineIcon
