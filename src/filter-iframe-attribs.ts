import { IFrameOptions } from 'iframe-resizer'

export default (props: IFrameOptions) => {
  const {
    autoResize,
    bodyBackground,
    bodyMargin,
    bodyPadding,
    checkOrigin,
    inPageLinks,
    heightCalculationMethod,
    interval,
    log,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    resizeFrom,
    scrolling,
    sizeHeight,
    sizeWidth,
    warningTimeout,
    tolerance,
    widthCalculationMethod,
    onClosed,
    onInit,
    onMessage,
    onResized,
    onScroll,
    ...iframeProps
  } = props

  return iframeProps
}
