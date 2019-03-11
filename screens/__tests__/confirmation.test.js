"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var react_1 = __importDefault(require("react"));
var Confirmation_1 = __importDefault(require("../Confirmation"));
var fakeConfirmationDetails = {
    confirmationName: 'Rudy',
    confirmationHotelName: 'Big Hotel',
    confirmationArrivalDate: '03/09/2019',
    confirmationDepartureDate: '03/10/2019'
};
describe('<DateField />', function () {
    it('Mounts correctly', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(Confirmation_1.default, { confirmationName: fakeConfirmationDetails.confirmationName, confirmationHotelName: fakeConfirmationDetails.confirmationHotelName, confirmationArrivalDate: fakeConfirmationDetails.confirmationArrivalDate, confirmationDepartureDate: fakeConfirmationDetails.confirmationDepartureDate }));
        expect(wrapper.exists()).toBe(true);
    });
});
