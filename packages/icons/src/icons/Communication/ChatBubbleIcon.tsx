import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ChatBubbleIconSvg from '../../assets/Communication/chat_bubble_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChatBubbleIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChatBubbleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ChatBubbleIcon.Style = SvgIcon;
ChatBubbleIcon.displayName = 'ChatBubbleIcon';

export default ChatBubbleIcon
