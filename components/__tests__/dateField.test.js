"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var react_1 = __importDefault(require("react"));
var DateField_1 = __importDefault(require("../DateField"));
var fakeAreErrorStylesActive = false;
var fakeIsErrorValid = false;
var fakeIsRangeValid = false;
var fakeFieldName = 'arrivalDate';
var fakeFieldValue = '2019/03/09';
var fakeTypeOfMethod = function () {
    'newValue';
};
describe('<DateField />', function () {
    it('Mounts correctly', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(DateField_1.default, { areErrorStylesActive: fakeAreErrorStylesActive, isErrorValid: fakeIsErrorValid, isRangeValid: fakeIsRangeValid, fieldName: fakeFieldName, fieldValue: fakeFieldValue, typeOfMethod: fakeTypeOfMethod }));
        expect(wrapper.exists()).toBe(true);
    });
    it('Contains the React Native TextInput component', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(DateField_1.default, { areErrorStylesActive: fakeAreErrorStylesActive, isErrorValid: fakeIsErrorValid, isRangeValid: fakeIsRangeValid, fieldName: fakeFieldName, fieldValue: fakeFieldValue, typeOfMethod: fakeTypeOfMethod }));
        var textInput = wrapper.find('TextInput');
        expect(textInput.exists()).toBe(true);
    });
    it('Has a prop of areErrorStylesActive provided to it', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(DateField_1.default, { areErrorStylesActive: fakeAreErrorStylesActive, isErrorValid: fakeIsErrorValid, isRangeValid: fakeIsRangeValid, fieldName: fakeFieldName, fieldValue: fakeFieldValue, typeOfMethod: fakeTypeOfMethod }));
        expect(wrapper.prop('areErrorStylesActive')).not.toBeNull();
    });
    it('Has a prop of isErrorValid provided to it', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(DateField_1.default, { areErrorStylesActive: fakeAreErrorStylesActive, isErrorValid: fakeIsErrorValid, isRangeValid: fakeIsRangeValid, fieldName: fakeFieldName, fieldValue: fakeFieldValue, typeOfMethod: fakeTypeOfMethod }));
        expect(wrapper.prop('isErrorValid')).not.toBeNull();
    });
    it('Has a prop of isRangeValid provided to it', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(DateField_1.default, { areErrorStylesActive: fakeAreErrorStylesActive, isErrorValid: fakeIsErrorValid, isRangeValid: fakeIsRangeValid, fieldName: fakeFieldName, fieldValue: fakeFieldValue, typeOfMethod: fakeTypeOfMethod }));
        expect(wrapper.prop('isRangeValid')).not.toBeNull();
    });
    it('Has a prop of fieldName provided to it with a non-zero value', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(DateField_1.default, { areErrorStylesActive: fakeAreErrorStylesActive, isErrorValid: fakeIsErrorValid, isRangeValid: fakeIsRangeValid, fieldName: fakeFieldName, fieldValue: fakeFieldValue, typeOfMethod: fakeTypeOfMethod }));
        expect(wrapper.prop('fieldName')).not.toHaveLength(0);
    });
    it('Has a prop of fieldValue provided to it with a non-zero value', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(DateField_1.default, { areErrorStylesActive: fakeAreErrorStylesActive, isErrorValid: fakeIsErrorValid, isRangeValid: fakeIsRangeValid, fieldName: fakeFieldName, fieldValue: fakeFieldValue, typeOfMethod: fakeTypeOfMethod }));
        expect(wrapper.prop('fieldValue')).not.toHaveLength(0);
    });
    it('Should run our typeOfMethod function to React Native\'s TextInput', function () {
        var mockFunction = jest.fn();
        var wrapper = enzyme_1.shallow(react_1.default.createElement(DateField_1.default, { areErrorStylesActive: fakeAreErrorStylesActive, isErrorValid: fakeIsErrorValid, isRangeValid: fakeIsRangeValid, fieldName: fakeFieldName, fieldValue: fakeFieldValue, typeOfMethod: mockFunction }));
        var textInput = wrapper.find('TextInput');
        textInput.simulate('ChangeText', 'newName');
        expect(mockFunction).toHaveBeenCalled();
    });
});
