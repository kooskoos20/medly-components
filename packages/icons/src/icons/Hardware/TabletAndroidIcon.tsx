import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TabletAndroidIconSvg from '../../assets/Hardware/tablet_android_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TabletAndroidIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TabletAndroidIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TabletAndroidIcon.Style = SvgIcon;
TabletAndroidIcon.displayName = 'TabletAndroidIcon';

export default TabletAndroidIcon
