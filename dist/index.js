"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var iframe_resizer_1 = require("iframe-resizer");
var react_1 = __importStar(require("react"));
var warning_1 = __importDefault(require("warning"));
var filter_iframe_attribs_1 = __importDefault(require("./filter-iframe-attribs"));
var IframeResizer = function (props, forwardRef) {
    var title = props.title, rest = __rest(props, ["title"]);
    var iframeProps = filter_iframe_attribs_1.default(rest);
    var iframeRef = react_1.useRef(null);
    var onClosed = react_1.useCallback(function (id) {
        warning_1.default(!iframeRef.current, "[iframeSizerReact][" + (iframeRef &&
            iframeRef.current &&
            iframeRef.current
                .id) + "] Close event ignored, to remove the iframe update your React component");
        return !iframeRef.current;
    }, [iframeRef]);
    // This hook is only run once, as once iframeResizer is bound, it will
    // deal with changes to the element and does not need recalling
    react_1.useEffect(function () {
        var iframe = iframeRef.current;
        if (iframe) {
            var iframeComponent_1 = iframe_resizer_1.iframeResizer(__assign(__assign({}, rest), { onClosed: onClosed }), iframe);
            return function () {
                return iframeComponent_1.forEach(function (e) { return e.iFrameResizer.removeListeners(); });
            };
        }
        return function () { return undefined; };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    react_1.useImperativeHandle(forwardRef, function () { return ({
        resize: function () { return iframeRef.current.iFrameResizer.resize(); },
        moveToAnchor: function (anchor) {
            return iframeRef.current.iFrameResizer.moveToAnchor(anchor);
        },
        sendMessage: function (message, targetOrigin) {
            ;
            iframeRef.current.iFrameResizer.sendMessage(message, targetOrigin);
        },
    }); });
    return react_1.default.createElement("iframe", __assign({ title: title }, iframeProps, { ref: iframeRef }));
};
exports.default = IframeResizer;
//# sourceMappingURL=index.js.map