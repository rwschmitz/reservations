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
 * AddReservationMutation posts to the DB with the user's reservation.
 */
var AddReservationMutation = /** @class */ (function (_super) {
    __extends(AddReservationMutation, _super);
    function AddReservationMutation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddReservationMutation;
}(react_apollo_1.Mutation));
exports.AddReservationMutation = AddReservationMutation;
