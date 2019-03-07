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
    textInputStyles: {
        height: 40,
        borderColor: '#5449d2',
        borderWidth: 2,
        borderRadius: 4,
        marginBottom: 16,
        width: 300
    },
    textErrorStyles: {
        color: '#e12d39'
    }
});
/**
 * NameField handles the input for any fields that are strictly names.
 */
var NameField = /** @class */ (function (_super) {
    __extends(NameField, _super);
    function NameField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NameField.prototype.render = function () {
        var _a = this.props, areErrorStylesActive = _a.areErrorStylesActive, isErrorValid = _a.isErrorValid, fieldName = _a.fieldName, fieldValue = _a.fieldValue, typeOfMethod = _a.typeOfMethod;
        return (react_1.default.createElement(react_native_1.View, null,
            areErrorStylesActive === true && isErrorValid === false ?
                react_1.default.createElement(react_native_1.View, null, fieldValue.length === 0 ? react_1.default.createElement(react_native_1.Text, { style: styles.textErrorStyles }, "Field cannot be left blank.") : react_1.default.createElement(react_native_1.Text, { style: styles.textErrorStyles }, "Only letters are allowed."))
                :
                    undefined,
            react_1.default.createElement(react_native_1.Text, null, "Enter " + fieldName),
            react_1.default.createElement(react_native_1.TextInput, { style: styles.textInputStyles, onChangeText: typeOfMethod, value: fieldValue })));
    };
    return NameField;
}(react_1.default.PureComponent));
exports.default = NameField;
