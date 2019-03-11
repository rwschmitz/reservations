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
var textStyles_1 = require("../styles/text/textStyles");
/**
 * Confirmation displays the booked reservation back to the user.
 */
var Confirmation = /** @class */ (function (_super) {
    __extends(Confirmation, _super);
    function Confirmation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Confirmation.prototype.render = function () {
        var _a = this.props, confirmationName = _a.confirmationName, confirmationHotelName = _a.confirmationHotelName, confirmationArrivalDate = _a.confirmationArrivalDate, confirmationDepartureDate = _a.confirmationDepartureDate;
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.textConfirm }, "You're all set!"),
            react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.textConfirmAlt }, "Here are your details"),
            react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.introTextStyle },
                react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.textInputEmphasisStyles }, "Name:"),
                " ",
                confirmationName),
            react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.introTextStyle },
                react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.textInputEmphasisStyles }, "Hotel Name:"),
                " ",
                confirmationHotelName),
            react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.introTextStyle },
                react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.textInputEmphasisStyles }, "Arrival:"),
                " ",
                confirmationArrivalDate),
            react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.introTextStyle },
                react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.textInputEmphasisStyles }, "Departure:"),
                " ",
                confirmationDepartureDate)));
    };
    return Confirmation;
}(react_1.default.PureComponent));
exports.default = Confirmation;
