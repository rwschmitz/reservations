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
/**
 * SingleReservation class contains the code for a single reservation.
 * This class is created in order to utilize a PureComponent to help with optimization.
 */
var SingleReservation = /** @class */ (function (_super) {
    __extends(SingleReservation, _super);
    function SingleReservation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleReservation.prototype.render = function () {
        var _a = this.props, name = _a.name, hotelName = _a.hotelName, arrivalDate = _a.arrivalDate, departureDate = _a.departureDate;
        return (react_1.default.createElement(react_native_1.View, { style: containerStyles_1.containerStyles.container },
            react_1.default.createElement(react_native_1.View, { style: containerStyles_1.containerStyles.reservationContainer },
                react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.labelStyle },
                    "Name: ",
                    react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.valueStyle }, name)),
                react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.labelStyle },
                    "Hotel Name: ",
                    react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.valueStyle }, hotelName)),
                react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.labelStyle },
                    "Arrival Date: ",
                    react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.valueStyle }, arrivalDate)),
                react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.labelStyle },
                    "Depature Date: ",
                    react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.valueStyle }, departureDate)))));
    };
    return SingleReservation;
}(react_1.default.PureComponent));
exports.default = SingleReservation;
