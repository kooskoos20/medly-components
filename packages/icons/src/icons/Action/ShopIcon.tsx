import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ShopIconSvg from '../../assets/Action/shop_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShopIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ShopIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ShopIcon.Style = SvgIcon;
ShopIcon.displayName = 'ShopIcon';

export default ShopIcon
