"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (props) {
    var autoResize = props.autoResize, bodyBackground = props.bodyBackground, bodyMargin = props.bodyMargin, bodyPadding = props.bodyPadding, checkOrigin = props.checkOrigin, inPageLinks = props.inPageLinks, heightCalculationMethod = props.heightCalculationMethod, interval = props.interval, log = props.log, maxHeight = props.maxHeight, maxWidth = props.maxWidth, minHeight = props.minHeight, minWidth = props.minWidth, resizeFrom = props.resizeFrom, scrolling = props.scrolling, sizeHeight = props.sizeHeight, sizeWidth = props.sizeWidth, warningTimeout = props.warningTimeout, tolerance = props.tolerance, widthCalculationMethod = props.widthCalculationMethod, onClosed = props.onClosed, onInit = props.onInit, onMessage = props.onMessage, onResized = props.onResized, onScroll = props.onScroll, iframeProps = __rest(props, ["autoResize", "bodyBackground", "bodyMargin", "bodyPadding", "checkOrigin", "inPageLinks", "heightCalculationMethod", "interval", "log", "maxHeight", "maxWidth", "minHeight", "minWidth", "resizeFrom", "scrolling", "sizeHeight", "sizeWidth", "warningTimeout", "tolerance", "widthCalculationMethod", "onClosed", "onInit", "onMessage", "onResized", "onScroll"]);
    return iframeProps;
});
//# sourceMappingURL=filter-iframe-attribs.js.map