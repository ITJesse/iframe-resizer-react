import { IFrameOptions } from 'iframe-resizer';
import React, { RefForwardingComponent } from 'react';
interface Handler {
    resize: () => void;
    moveToAnchor: (anchor: string) => void;
    sendMessage: (message: any, targetOrigin?: string) => void;
}
declare const IframeResizer: RefForwardingComponent<Handler, IFrameOptions & React.HTMLProps<HTMLIFrameElement>>;
export default IframeResizer;
