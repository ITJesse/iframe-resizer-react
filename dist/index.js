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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iframe_resizer_1 = require("iframe-resizer");
const react_1 = __importStar(require("react"));
const warning_1 = __importDefault(require("warning"));
const filter_iframe_attribs_1 = __importDefault(require("./filter-iframe-attribs"));
const IframeResizer = (props, forwardRef) => {
    const { title } = props, rest = __rest(props, ["title"]);
    const iframeProps = filter_iframe_attribs_1.default(rest);
    const iframeRef = react_1.useRef(null);
    const onClosed = react_1.useCallback((id) => {
        warning_1.default(!iframeRef.current, `[iframeSizerReact][${iframeRef &&
            iframeRef.current &&
            iframeRef.current
                .id}] Close event ignored, to remove the iframe update your React component`);
        return !iframeRef.current;
    }, [iframeRef]);
    // This hook is only run once, as once iframeResizer is bound, it will
    // deal with changes to the element and does not need recalling
    react_1.useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            const iframeComponent = iframe_resizer_1.iframeResizer(Object.assign(Object.assign({}, rest), { onClosed }), iframe);
            return () => iframeComponent.forEach(e => e.iFrameResizer.removeListeners());
        }
        return () => undefined;
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    react_1.useImperativeHandle(forwardRef, () => ({
        resize: () => iframeRef.current.iFrameResizer.resize(),
        moveToAnchor: (anchor) => iframeRef.current.iFrameResizer.moveToAnchor(anchor),
        sendMessage: (message, targetOrigin) => {
            ;
            iframeRef.current.iFrameResizer.sendMessage(message, targetOrigin);
        },
    }));
    return react_1.default.createElement("iframe", Object.assign({ title: title }, iframeProps, { ref: iframeRef }));
};
exports.default = react_1.default.forwardRef(IframeResizer);
//# sourceMappingURL=index.js.map