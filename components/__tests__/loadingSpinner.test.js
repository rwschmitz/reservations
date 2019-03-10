"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var react_1 = __importDefault(require("react"));
var LoadingSpinner_1 = __importDefault(require("../LoadingSpinner"));
var fakeCopy = 'This is some test copy';
describe('<LoadingSpinner />', function () {
    it('Mounts correctly', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(LoadingSpinner_1.default, { copy: fakeCopy }));
        expect(wrapper.exists()).toBe(true);
    });
    it('Contains the React Native ActivityIndicator component', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(LoadingSpinner_1.default, { copy: fakeCopy }));
        var activityIndicator = wrapper.find('ActivityIndicator');
        expect(activityIndicator.exists()).toBe(true);
    });
    it('Has copy provided to it', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(LoadingSpinner_1.default, { copy: fakeCopy }));
        expect(wrapper.prop('copy')).not.toHaveLength(0);
    });
});
