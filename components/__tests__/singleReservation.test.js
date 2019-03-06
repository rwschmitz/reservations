"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var SingleReservation_1 = __importDefault(require("../SingleReservation"));
var name = 'First Last';
var hotelName = 'Hotel Place';
var arrivalDate = '01/01/2019';
var departureDate = '01/02/2019';
describe('<SingleReservation />', function () {
    it('Renders and displays properly', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(SingleReservation_1.default, { name: name, hotelName: hotelName, arrivalDate: arrivalDate, departureDate: departureDate }));
        expect(wrapper.exists()).toBe(true);
    });
    it('Has all necessary content passed to it', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(SingleReservation_1.default, { name: name, hotelName: hotelName, arrivalDate: arrivalDate, departureDate: departureDate }));
        var providedContentLength = wrapper.find('Text').children().length;
        expect(providedContentLength).toBeGreaterThan(0);
    });
});
