import { IFrameOptions } from 'iframe-resizer';
import React from 'react';
interface Props {
    title: string;
}
interface Handler {
    resize: () => void;
    moveToAnchor: (anchor: string) => void;
    sendMessage: (message: any, targetOrigin?: string) => void;
}
declare const _default: React.ForwardRefExoticComponent<Props & IFrameOptions & React.RefAttributes<Handler>>;
export default _default;
