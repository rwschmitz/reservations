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
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    loadingContainer: {
        paddingTop: 16
    },
    textStyle: {
        color: '#333'
    }
});
var primaryColor = '#5449d2';
/**
 * LoadingSpinner -- Display this component when we're waiting for our GraphQL queries/mutations to resolve.
 */
var LoadingSpinner = /** @class */ (function (_super) {
    __extends(LoadingSpinner, _super);
    function LoadingSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingSpinner.prototype.render = function () {
        var copy = this.props.copy;
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.ActivityIndicator, { size: 'large', color: "" + primaryColor }),
            react_1.default.createElement(react_native_1.View, { style: styles.loadingContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.textStyle }, copy))));
    };
    return LoadingSpinner;
}(react_1.default.PureComponent));
exports.default = LoadingSpinner;
