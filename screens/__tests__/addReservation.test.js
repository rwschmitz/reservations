"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var test_utils_1 = require("react-apollo/test-utils");
var enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
var react_1 = __importDefault(require("react"));
var waait_1 = __importDefault(require("waait"));
var AddReservation_1 = __importStar(require("../AddReservation"));
var react_native_1 = require("react-native");
var fakeReservation = {
    fakeReservationDetails: {
        name: 'First Last',
        hotelName: 'Some Hotel',
        arrivalDate: '03/09/2019',
        departureDate: '03/10/2019'
    },
    isArrivalValid: true,
    isDepartureValid: true,
    isRangeValid: true,
    areErrorsPresent: false,
    areErrorStylesActive: false,
    isNameValid: true,
    isHotelNameValid: true
};
var mocks = [
    {
        request: {
            query: AddReservation_1.ADD_RESERVATION_MUTATION
        },
        result: {
            data: {
                addReservation: {
                    message: 'success',
                    __typename: 'reservation'
                }
            }
        }
    }
];
describe('<AddReservation />', function () {
    it('Renders correctly and matches the snapshot', function () { return __awaiter(_this, void 0, void 0, function () {
        var wrapper, inputCollection;
        return __generator(this, function (_a) {
            wrapper = enzyme_1.mount(react_1.default.createElement(test_utils_1.MockedProvider, null,
                react_1.default.createElement(AddReservation_1.default, { reservationDetails: {
                        name: fakeReservation.fakeReservationDetails.name,
                        hotelName: fakeReservation.fakeReservationDetails.hotelName,
                        arrivalDate: fakeReservation.fakeReservationDetails.arrivalDate,
                        departureDate: fakeReservation.fakeReservationDetails.departureDate
                    }, isArrivalValid: fakeReservation.isArrivalValid, isDepartureValid: fakeReservation.isDepartureValid, isRangeValid: fakeReservation.isRangeValid, areErrorsPresent: fakeReservation.areErrorsPresent, areErrorStylesActive: fakeReservation.areErrorStylesActive, isNameValid: fakeReservation.isNameValid, isHotelNameValid: fakeReservation.isHotelNameValid })));
            inputCollection = wrapper.find('View[testID="inputCollection"]');
            expect(enzyme_to_json_1.default(inputCollection)).toMatchSnapshot();
            return [2 /*return*/];
        });
    }); });
    it('Posts the mutation to the database', function () { return __awaiter(_this, void 0, void 0, function () {
        var wrapper, component, instance, spy, button;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = enzyme_1.mount(react_1.default.createElement(test_utils_1.MockedProvider, { mocks: mocks, addTypename: false },
                        react_1.default.createElement(AddReservation_1.default, { reservationDetails: {
                                name: fakeReservation.fakeReservationDetails.name,
                                hotelName: fakeReservation.fakeReservationDetails.hotelName,
                                arrivalDate: fakeReservation.fakeReservationDetails.arrivalDate,
                                departureDate: fakeReservation.fakeReservationDetails.departureDate
                            }, isArrivalValid: fakeReservation.isArrivalValid, isDepartureValid: fakeReservation.isDepartureValid, isRangeValid: fakeReservation.isRangeValid, areErrorsPresent: fakeReservation.areErrorsPresent, areErrorStylesActive: fakeReservation.areErrorStylesActive, isNameValid: fakeReservation.isNameValid, isHotelNameValid: fakeReservation.isHotelNameValid })));
                    wrapper.setState(fakeReservation);
                    component = wrapper.find('TextInput').first();
                    instance = component.instance();
                    spy = jest.spyOn(react_native_1.TextInput.prototype, 'setState');
                    instance.setState({ name: 'firstNameLastName' });
                    return [4 /*yield*/, waait_1.default(0)];
                case 1:
                    _a.sent();
                    expect(spy).toHaveBeenCalled();
                    button = wrapper.find('Button');
                    button.simulate('click');
                    return [2 /*return*/];
            }
        });
    }); });
});
