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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var AllReservationsQuery_1 = require("../queries/AllReservationsQuery");
var LoadingSpinner_1 = __importDefault(require("./LoadingSpinner"));
var ALL_RESERVATIONS_QUERY = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nquery ALL_RESERVATIONS_QUERY {\n  reservations {\n    id\n    name\n    hotelName\n    arrivalDate\n    departureDate\n  }\n}\n"], ["\nquery ALL_RESERVATIONS_QUERY {\n  reservations {\n    id\n    name\n    hotelName\n    arrivalDate\n    departureDate\n  }\n}\n"])));
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
/**
 * Testview is a test.
 */
var TestView = /** @class */ (function (_super) {
    __extends(TestView, _super);
    function TestView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestView.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(AllReservationsQuery_1.AllReservationsQuery, { query: ALL_RESERVATIONS_QUERY }, function (payload) {
                if (payload.loading) {
                    return (react_1.default.createElement(react_native_1.View, null,
                        react_1.default.createElement(LoadingSpinner_1.default, null)));
                }
                if (payload.error !== undefined) {
                    return react_1.default.createElement(react_native_1.Text, null,
                        "Reservations encountered an error: ",
                        payload.error.message,
                        " ");
                }
                if (payload.data !== undefined) {
                    return (react_1.default.createElement(react_native_1.View, null,
                        payload.data.reservations.map(function (item) { return console.log(item); }),
                        react_1.default.createElement(react_native_1.Text, null,
                            "There are ",
                            payload.data.reservations.length,
                            " reservations currently booked.")));
                }
            })));
    };
    return TestView;
}(react_1.default.PureComponent));
exports.default = TestView;
var templateObject_1;
