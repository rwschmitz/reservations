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
        alignItems: 'center'
    }
});
/**
 * Reservation class contains the code for a single reservation.
 * This class is created in order to utilize a PureComponent to help with optimization.
 */
var SingleReservation = /** @class */ (function (_super) {
    __extends(SingleReservation, _super);
    function SingleReservation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleReservation.prototype.render = function () {
        var _a = this.props, name = _a.name, hotelName = _a.hotelName, arrivalDate = _a.arrivalDate, departureDate = _a.departureDate;
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: { paddingBottom: 64, width: '100%' } },
                react_1.default.createElement(react_native_1.Text, { style: { fontSize: 16, fontWeight: '700' } },
                    "Name: ",
                    react_1.default.createElement(react_native_1.Text, { style: { fontWeight: '300' } }, name)),
                react_1.default.createElement(react_native_1.Text, { style: { fontSize: 16, fontWeight: '700' } },
                    "Hotel Name: ",
                    react_1.default.createElement(react_native_1.Text, { style: { fontWeight: '300' } }, hotelName)),
                react_1.default.createElement(react_native_1.Text, { style: { fontSize: 16, fontWeight: '700' } },
                    "Arrival Date: ",
                    react_1.default.createElement(react_native_1.Text, { style: { fontWeight: '300' } }, arrivalDate)),
                react_1.default.createElement(react_native_1.Text, { style: { fontSize: 16, fontWeight: '700' } },
                    "Depature Date: ",
                    react_1.default.createElement(react_native_1.Text, { style: { fontWeight: '300' } }, departureDate)))));
    };
    return SingleReservation;
}(react_1.default.PureComponent));
exports.default = SingleReservation;
