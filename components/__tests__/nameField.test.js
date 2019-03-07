"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var NameField_1 = __importDefault(require("../NameField"));
var areErrorStylesActive = false;
var isErrorValid = false;
var fieldName = 'name';
var fieldValue = 'rudy';
var typeOfMethod = function () { };
describe('<NameField />', function () {
    it('Renders and displays properly', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(NameField_1.default, { areErrorStylesActive: areErrorStylesActive, isErrorValid: isErrorValid, fieldName: fieldName, fieldValue: fieldValue, typeOfMethod: typeOfMethod }));
        expect(wrapper.exists()).toBe(true);
    });
});
