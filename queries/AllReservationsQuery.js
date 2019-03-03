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
Object.defineProperty(exports, "__esModule", { value: true });
var react_apollo_1 = require("react-apollo");
/**
 * AllReservationsQuery queries the DB for all currently booked reservations.
 */
var AllReservationsQuery = /** @class */ (function (_super) {
    __extends(AllReservationsQuery, _super);
    function AllReservationsQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AllReservationsQuery;
}(react_apollo_1.Query));
exports.AllReservationsQuery = AllReservationsQuery;
