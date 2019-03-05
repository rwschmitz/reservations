"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var LoadingSpinner_1 = __importDefault(require("../LoadingSpinner"));
var copy = 'This is some test copy';
describe('<LoadingSpinner />', function () {
    it('Renders and displays properly', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(LoadingSpinner_1.default, { copy: copy }));
        expect(wrapper.exists()).toBe(true);
    });
    it('Contains the React Native ActivityIndicator component', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(LoadingSpinner_1.default, { copy: copy }));
        var activityIndicator = wrapper.find('ActivityIndicator');
        expect(activityIndicator.exists()).toBe(true);
    });
    it('Has some copy provided to it', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(LoadingSpinner_1.default, { copy: copy }));
        var providedContentLength = wrapper.find('Text').children().length;
        expect(providedContentLength).toBeGreaterThan(0);
    });
});
