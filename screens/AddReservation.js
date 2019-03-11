"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var moment_1 = __importDefault(require("moment"));
var AddReservationMutation_1 = require("../mutations/AddReservationMutation");
var Confirmation_1 = __importDefault(require("../screens/Confirmation"));
var LoadingSpinner_1 = __importDefault(require("../components/LoadingSpinner"));
var NameField_1 = __importDefault(require("../components/NameField"));
var DateField_1 = __importDefault(require("../components/DateField"));
var containerStyles_1 = require("../styles/containers/containerStyles");
var colorStyles_1 = require("../styles/colors/colorStyles");
var ADD_RESERVATION_MUTATION = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nmutation createReservation($input: ReservationCreateInput!) {\n  createReservation(data: $input) {\n    name\n    hotelName\n    arrivalDate\n    departureDate\n  }\n}\n"], ["\nmutation createReservation($input: ReservationCreateInput!) {\n  createReservation(data: $input) {\n    name\n    hotelName\n    arrivalDate\n    departureDate\n  }\n}\n"])));
exports.ADD_RESERVATION_MUTATION = ADD_RESERVATION_MUTATION;
/**
 * AddReservation allows users to add a reservation.
 */
var AddReservation = /** @class */ (function (_super) {
    __extends(AddReservation, _super);
    function AddReservation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            reservationDetails: {
                name: '',
                hotelName: '',
                arrivalDate: '',
                departureDate: ''
            },
            isArrivalValid: false,
            isDepartureValid: false,
            isRangeValid: false,
            isNameValid: false,
            isHotelNameValid: false,
            areErrorsPresent: true,
            areErrorStylesActive: false,
            resolvedData: {}
        };
        /**
         * Watches user input fields for errors.  Will be used for determing which errors and styles to send back to the user.
         */
        _this.errorsPresent = function () {
            _this.setState({
                areErrorsPresent: true
            });
            if (_this.state.isArrivalValid === true && _this.state.isDepartureValid === true && _this.state.isRangeValid === true && _this.state.isNameValid === true && _this.state.isHotelNameValid === true) {
                _this.setState({
                    areErrorsPresent: false
                });
            }
        };
        return _this;
    }
    AddReservation.prototype.componentDidUpdate = function () {
        this.errorsPresent();
    };
    AddReservation.prototype.render = function () {
        var _this = this;
        var _a = this.state, _b = _a.reservationDetails, name = _b.name, hotelName = _b.hotelName, arrivalDate = _b.arrivalDate, departureDate = _b.departureDate, areErrorStylesActive = _a.areErrorStylesActive, isNameValid = _a.isNameValid, isHotelNameValid = _a.isHotelNameValid, isArrivalValid = _a.isArrivalValid, isDepartureValid = _a.isDepartureValid, isRangeValid = _a.isRangeValid;
        /**
         * @param name Value of name from the underlying <TextInput /> component.
         * Also perform a regexp check to ensure the name is only letters and spaces.
         */
        var inputName = function (name) {
            var isNameOnlyLetters = /^[a-zA-Z\s]*$/.test(name);
            if (name.length > 0 && isNameOnlyLetters === true) {
                _this.setState({
                    isNameValid: true
                });
            }
            else {
                _this.setState({
                    isNameValid: false
                });
            }
            _this.setState({
                reservationDetails: {
                    name: name,
                    hotelName: hotelName,
                    arrivalDate: arrivalDate,
                    departureDate: departureDate
                }
            });
        };
        /**
         * @param hotelName Value of the hotel name from the underlying <TextInput /> component.
         * No regexp check here because some hotels do contain numbers.
         */
        var inputHotelName = function (hotelName) {
            if (hotelName.length === 0) {
                _this.setState({
                    isHotelNameValid: false
                });
            }
            else {
                _this.setState({
                    isHotelNameValid: true
                });
            }
            _this.setState({
                reservationDetails: {
                    name: name,
                    hotelName: hotelName,
                    arrivalDate: arrivalDate,
                    departureDate: departureDate
                }
            });
        };
        /**
         * @param arrivalDate Value of the arrival date from the underlying <TextInput /> component.
         * Ensure the date follows a pre-defined format.
         * Ensure the arrival date is before or on departure date.
         */
        var inputArrivalDate = function (arrivalDate) {
            var validArrival = moment_1.default(arrivalDate, ['MM/DD/YYYY', 'MM-DD-YYYY'], true).isValid();
            var validRange = moment_1.default(departureDate).isSameOrAfter(arrivalDate, 'day');
            if (validRange === false) {
                _this.setState({
                    isRangeValid: false
                });
            }
            else {
                _this.setState({
                    isRangeValid: true
                });
            }
            _this.setState({
                reservationDetails: {
                    name: name,
                    hotelName: hotelName,
                    arrivalDate: arrivalDate,
                    departureDate: departureDate
                },
                isArrivalValid: validArrival
            });
        };
        /**
         * @param departureDate Value of the departure date from the underlying <TextInput /> component
         * Ensure the date follows a pre-defined format.
         * Ensure the departure date is on or after the arrival date.
         */
        var inputDepartureDate = function (departureDate) {
            var validDeparture = moment_1.default(departureDate, ['MM/DD/YYYY', 'MM-DD-YYYY'], true).isValid();
            var validRange = moment_1.default(departureDate).isSameOrAfter(arrivalDate, 'day');
            if (validRange === false) {
                _this.setState({
                    isRangeValid: false
                });
            }
            else {
                _this.setState({
                    isRangeValid: true
                });
            }
            _this.setState({
                reservationDetails: {
                    name: name,
                    hotelName: hotelName,
                    arrivalDate: arrivalDate,
                    departureDate: departureDate
                },
                isDepartureValid: validDeparture
            });
        };
        /**
         * Use in conjunction with @method errorsPresent.
         * We call this when firing off a mutation to the DB to ensure the input fields are free of errors.
         * Otherwise we show the appropriate error message to the user.
         */
        var toggleErrorStyles = function () {
            var areErrorsPresent = _this.state.areErrorsPresent;
            if (areErrorsPresent === true) {
                _this.setState({
                    areErrorStylesActive: true
                });
            }
        };
        return (
        // Prevent keyboard from overlapping input fields
        react_1.default.createElement(react_native_1.KeyboardAvoidingView, { style: containerStyles_1.containerStyles.container, behavior: 'padding', enabled: true },
            react_1.default.createElement(AddReservationMutation_1.AddReservationMutation, { mutation: ADD_RESERVATION_MUTATION }, function (createReservation, _a) {
                var loading = _a.loading, error = _a.error, called = _a.called, data = _a.data;
                return (react_1.default.createElement(react_native_1.View, { testID: 'inputCollection' },
                    loading === true ? react_1.default.createElement(LoadingSpinner_1.default, { copy: 'Sending reservation...' }) : undefined,
                    react_1.default.createElement(react_native_1.Text, null, error),
                    called === false ?
                        react_1.default.createElement(react_native_1.View, null,
                            react_1.default.createElement(NameField_1.default, { areErrorStylesActive: areErrorStylesActive, isErrorValid: isNameValid, fieldValue: name, fieldName: 'Name', typeOfMethod: inputName }),
                            react_1.default.createElement(NameField_1.default, { areErrorStylesActive: areErrorStylesActive, isErrorValid: isHotelNameValid, fieldValue: hotelName, fieldName: 'Hotel Name', typeOfMethod: inputHotelName }),
                            react_1.default.createElement(DateField_1.default, { areErrorStylesActive: areErrorStylesActive, isErrorValid: isArrivalValid, isRangeValid: isRangeValid, fieldValue: arrivalDate, fieldName: 'Arrival Date', typeOfMethod: inputArrivalDate }),
                            react_1.default.createElement(DateField_1.default, { areErrorStylesActive: areErrorStylesActive, isErrorValid: isDepartureValid, isRangeValid: isRangeValid, fieldValue: departureDate, fieldName: 'Departure Date', typeOfMethod: inputDepartureDate }),
                            react_1.default.createElement(react_native_1.Button, { onPress: _this.state.areErrorsPresent === true ? toggleErrorStyles : function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    return [2 /*return*/, createReservation({ variables: { input: this.state.reservationDetails } })];
                                }); }); }, title: 'Add new reservation', color: "" + colorStyles_1.colorStyles.primaryColor.color, accessibilityLabel: 'Add new reservation' }))
                        :
                            // If we've successfully fired off a mutation, render out the confirmation details to the user.
                            called === true && data !== undefined ?
                                react_1.default.createElement(Confirmation_1.default, { confirmationName: _this.state.reservationDetails.name, confirmationHotelName: _this.state.reservationDetails.hotelName, confirmationArrivalDate: _this.state.reservationDetails.arrivalDate, confirmationDepartureDate: _this.state.reservationDetails.departureDate })
                                :
                                    undefined));
            })));
    };
    return AddReservation;
}(react_1.default.PureComponent));
exports.default = AddReservation;
var templateObject_1;
