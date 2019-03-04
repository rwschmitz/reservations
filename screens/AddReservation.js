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
var react_apollo_1 = require("react-apollo");
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var LoadingSpinner_1 = __importDefault(require("../components/LoadingSpinner"));
var ADD_RESERVATION_MUTATION = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nmutation createReservation($input: ReservationCreateInput!) {\n  createReservation(data: $input) {\n    name\n    hotelName\n    arrivalDate\n    departureDate\n  }\n}\n"], ["\nmutation createReservation($input: ReservationCreateInput!) {\n  createReservation(data: $input) {\n    name\n    hotelName\n    arrivalDate\n    departureDate\n  }\n}\n"])));
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
/**
 * AddReservation allows users to add a reservation.
 */
var AddReservation = /** @class */ (function (_super) {
    __extends(AddReservation, _super);
    function AddReservation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            name: '',
            hotelName: '',
            arrivalDate: '',
            departureDate: ''
        };
        return _this;
    }
    AddReservation.prototype.render = function () {
        var _this = this;
        var _a = this.state, name = _a.name, hotelName = _a.hotelName, arrivalDate = _a.arrivalDate, departureDate = _a.departureDate;
        var inputName = function (name) {
            _this.setState({
                name: name
            });
        };
        var inputHotelName = function (hotelName) {
            _this.setState({
                hotelName: hotelName
            });
        };
        var inputArrivalDate = function (arrivalDate) {
            _this.setState({
                arrivalDate: arrivalDate
            });
        };
        var inputDepartureDate = function (departureDate) {
            _this.setState({
                departureDate: departureDate
            });
        };
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_apollo_1.Mutation, { mutation: ADD_RESERVATION_MUTATION }, function (createReservation, _a) {
                var loading = _a.loading, error = _a.error, called = _a.called, data = _a.data;
                return (react_1.default.createElement(react_native_1.View, null,
                    loading === true ? react_1.default.createElement(LoadingSpinner_1.default, null) : undefined,
                    react_1.default.createElement(react_native_1.Text, null, error),
                    react_1.default.createElement(react_native_1.Text, null, "Enter name: "),
                    react_1.default.createElement(react_native_1.TextInput, { style: { height: 40, borderColor: '#5449d2', borderWidth: 2, borderRadius: 4, marginBottom: 16, width: 300 }, onChangeText: inputName, value: name }),
                    react_1.default.createElement(react_native_1.Text, null, "Enter hotel name: "),
                    react_1.default.createElement(react_native_1.TextInput, { style: { height: 40, borderColor: '#5449d2', borderWidth: 2, borderRadius: 4, marginBottom: 16, width: 300 }, onChangeText: inputHotelName, value: hotelName }),
                    react_1.default.createElement(react_native_1.Text, null, "Enter arrival date: "),
                    react_1.default.createElement(react_native_1.TextInput, { style: { height: 40, borderColor: '#5449d2', borderWidth: 2, borderRadius: 4, marginBottom: 16, width: 300 }, onChangeText: inputArrivalDate, value: arrivalDate }),
                    react_1.default.createElement(react_native_1.Text, null, "Enter departure date: "),
                    react_1.default.createElement(react_native_1.TextInput, { style: { height: 40, borderColor: '#5449d2', borderWidth: 2, borderRadius: 4, marginBottom: 16, width: 300 }, onChangeText: inputDepartureDate, value: departureDate }),
                    react_1.default.createElement(react_native_1.Button, { onPress: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, createReservation({ variables: { input: this.state } })];
                        }); }); }, title: 'Add new reservation', color: '#5449d2', accessibilityLabel: 'Add new reservation' })));
            })));
    };
    return AddReservation;
}(react_1.default.PureComponent));
exports.default = AddReservation;
var templateObject_1;
