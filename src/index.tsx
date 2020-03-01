import { IFrameOptions, iframeResizer } from 'iframe-resizer'
import React, {
  RefForwardingComponent,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import warning from 'warning'

import filterIframeAttribs from './filter-iframe-attribs'

interface Props {}
interface Handler {
  resize: () => void
  moveToAnchor: (anchor: string) => void
  sendMessage: (message: any, targetOrigin?: string) => void
}
const IframeResizer: RefForwardingComponent<
  Handler,
  Props & IFrameOptions & React.HTMLProps<HTMLIFrameElement>
> = (props, forwardRef) => {
  const { title, ...rest } = props
  const iframeProps = filterIframeAttribs(rest)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const onClosed = useCallback(
    (id: string) => {
      warning(
        !iframeRef.current,
        `[iframeSizerReact][${iframeRef &&
          iframeRef.current &&
          iframeRef.current
            .id}] Close event ignored, to remove the iframe update your React component`,
      )
      return !iframeRef.current
    },
    [iframeRef],
  )

  // This hook is only run once, as once iframeResizer is bound, it will
  // deal with changes to the element and does not need recalling
  useEffect(() => {
    const iframe = iframeRef.current
    if (iframe) {
      const iframeComponent = iframeResizer({ ...rest, onClosed }, iframe)
      return () =>
        iframeComponent.forEach(e => e.iFrameResizer.removeListeners())
    }

    return () => undefined
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useImperativeHandle(forwardRef, () => ({
    resize: () => (iframeRef.current as any).iFrameResizer.resize(),
    moveToAnchor: (anchor: string) =>
      (iframeRef.current as any).iFrameResizer.moveToAnchor(anchor),
    sendMessage: (message: any, targetOrigin?: string) => {
      ;(iframeRef.current as any).iFrameResizer.sendMessage(
        message,
        targetOrigin,
      )
    },
  }))

  return <iframe title={title} {...iframeProps} ref={iframeRef} />
}

export default React.forwardRef(IframeResizer)
