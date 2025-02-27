import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CastForEducationIconSvg from '../../assets/Hardware/cast_for_education_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CastForEducationIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CastForEducationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CastForEducationIcon.Style = SvgIcon;
CastForEducationIcon.displayName = 'CastForEducationIcon';

export default CastForEducationIcon
