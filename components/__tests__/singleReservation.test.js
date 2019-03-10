"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var react_1 = __importDefault(require("react"));
var SingleReservation_1 = __importDefault(require("../SingleReservation"));
var fakeName = 'First Last';
var HotelName = 'Hotel Place';
var fakeArrivalDate = '01/01/2019';
var fakeDepartureDate = '01/02/2019';
describe('<SingleReservation />', function () {
    it('Mounts correctly', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(SingleReservation_1.default, { name: fakeName, hotelName: HotelName, arrivalDate: fakeArrivalDate, departureDate: fakeDepartureDate }));
        expect(wrapper.exists()).toBe(true);
    });
    it('Has a prop of name provided to it with a non-zero value', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(SingleReservation_1.default, { name: fakeName, hotelName: HotelName, arrivalDate: fakeArrivalDate, departureDate: fakeDepartureDate }));
        expect(wrapper.prop('name')).not.toHaveLength(0);
    });
    it('Has a prop of hotelName provided to it with a non-zero value', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(SingleReservation_1.default, { name: fakeName, hotelName: HotelName, arrivalDate: fakeArrivalDate, departureDate: fakeDepartureDate }));
        expect(wrapper.prop('hotelName')).not.toHaveLength(0);
    });
    it('Has a prop of arrivalDate provided to it with a non-zero value', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(SingleReservation_1.default, { name: fakeName, hotelName: HotelName, arrivalDate: fakeArrivalDate, departureDate: fakeDepartureDate }));
        expect(wrapper.prop('arrivalDate')).not.toHaveLength(0);
    });
    it('Has a prop of departureDate provided to it with a non-zero value', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(SingleReservation_1.default, { name: fakeName, hotelName: HotelName, arrivalDate: fakeArrivalDate, departureDate: fakeDepartureDate }));
        expect(wrapper.prop('departureDate')).not.toHaveLength(0);
    });
    it('Has 4 user inputs', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(SingleReservation_1.default, { name: fakeName, hotelName: HotelName, arrivalDate: fakeArrivalDate, departureDate: fakeDepartureDate }));
        expect(wrapper.find('Text').children().children().length).toBe(4);
    });
});
