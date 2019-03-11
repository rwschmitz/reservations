"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var containerStyles_1 = require("../styles/containers/containerStyles");
var textStyles_1 = require("../styles/text/textStyles");
var colorStyles_1 = require("../styles/colors/colorStyles");
/**
 * LoadingSpinner will display when we're waiting for our GraphQL queries/mutations to resolve.
 */
var LoadingSpinner = /** @class */ (function (_super) {
    __extends(LoadingSpinner, _super);
    function LoadingSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingSpinner.prototype.render = function () {
        var copy = this.props.copy;
        return (react_1.default.createElement(react_native_1.View, { style: containerStyles_1.containerStyles.container },
            react_1.default.createElement(react_native_1.ActivityIndicator, { size: 'large', color: "" + colorStyles_1.colorStyles.primaryColor.color }),
            react_1.default.createElement(react_native_1.View, { style: containerStyles_1.containerStyles.loadingContainer },
                react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.textStyle }, copy))));
    };
    return LoadingSpinner;
}(react_1.default.PureComponent));
exports.default = LoadingSpinner;
