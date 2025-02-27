import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NfcIconSvg from '../../assets/Device/nfc_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NfcIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NfcIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NfcIcon.Style = SvgIcon;
NfcIcon.displayName = 'NfcIcon';

export default NfcIcon
