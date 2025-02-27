import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning290LineIconSvg from '../../assets/GSDD/Warning_290_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning290LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning290LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning290LineIcon.Style = SvgIcon;
Warning290LineIcon.displayName = 'Warning290LineIcon';

export default Warning290LineIcon
