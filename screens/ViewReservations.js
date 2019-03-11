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
var LoadingSpinner_1 = __importDefault(require("../components/LoadingSpinner"));
var SingleReservation_1 = __importDefault(require("../components/SingleReservation"));
var containerStyles_1 = require("../styles/containers/containerStyles");
var wrapperStyles_1 = require("../styles/wrappers/wrapperStyles");
var textStyles_1 = require("../styles/text/textStyles");
var colorStyles_1 = require("../styles/colors/colorStyles");
var ALL_RESERVATIONS_QUERY = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nquery ALL_RESERVATIONS_QUERY {\n  reservations {\n    id\n    name\n    hotelName\n    arrivalDate\n    departureDate\n  }\n}\n"], ["\nquery ALL_RESERVATIONS_QUERY {\n  reservations {\n    id\n    name\n    hotelName\n    arrivalDate\n    departureDate\n  }\n}\n"])));
exports.ALL_RESERVATIONS_QUERY = ALL_RESERVATIONS_QUERY;
/**
 * ViewReservations holds all currrently booked reservations.
 */
var ViewReservations = /** @class */ (function (_super) {
    __extends(ViewReservations, _super);
    function ViewReservations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            areReservationsShown: false,
            refreshing: false
        };
        _this.onRefresh = function (payload) {
            _this.setState({
                refreshing: true
            });
            payload.refetch().then(function () {
                _this.setState({
                    refreshing: false
                });
            });
        };
        return _this;
    }
    ViewReservations.prototype.render = function () {
        var _this = this;
        var toggleReservationsVisbility = function () {
            _this.setState({
                areReservationsShown: !_this.state.areReservationsShown
            });
        };
        return (react_1.default.createElement(react_native_1.View, { style: containerStyles_1.containerStyles.container },
            react_1.default.createElement(AllReservationsQuery_1.AllReservationsQuery, { query: ALL_RESERVATIONS_QUERY }, function (payload) {
                if (payload.loading) {
                    return (react_1.default.createElement(react_native_1.View, null,
                        react_1.default.createElement(LoadingSpinner_1.default, { copy: 'Loading, please wait a moment!' })));
                }
                if (payload.error !== undefined) {
                    return react_1.default.createElement(react_native_1.Text, null,
                        "Reservations encountered an error: ",
                        payload.error.message,
                        " ");
                }
                if (payload.data !== undefined) {
                    return (react_1.default.createElement(react_native_1.View, { style: _this.state.areReservationsShown === false ? wrapperStyles_1.wrapperStyles.introWrapperResHidden : wrapperStyles_1.wrapperStyles.introWrapperResShown },
                        react_1.default.createElement(react_native_1.View, { style: containerStyles_1.containerStyles.introContainer },
                            react_1.default.createElement(react_native_1.Text, { style: [textStyles_1.textStyles.introHeadlineTextStyle, textStyles_1.textStyles.introTextStyle] }, "Welcome back!"),
                            react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.introTextStyle },
                                "There are ",
                                payload.data.reservations.length,
                                " reservations currently booked."),
                            react_1.default.createElement(react_native_1.Text, { style: textStyles_1.textStyles.introTextStyle }, "Would you like to add another reservation?"),
                            react_1.default.createElement(react_native_1.Button, { onPress: function () { return _this.props.navigation.navigate('Add'); }, title: 'Add another reservation', color: "" + colorStyles_1.colorStyles.primaryColor.color, accessibilityLabel: 'Add another reservation' })),
                        _this.state.areReservationsShown === false ?
                            react_1.default.createElement(react_native_1.View, null,
                                react_1.default.createElement(react_native_1.Button, { onPress: toggleReservationsVisbility, title: "Show current " + payload.data.reservations.length + " reservations", color: "" + colorStyles_1.colorStyles.primaryColor.color, accessibilityLabel: 'View all currently booked reservations' }))
                            :
                                react_1.default.createElement(react_native_1.View, { style: containerStyles_1.containerStyles.flatListContainerStyle },
                                    react_1.default.createElement(react_native_1.Button, { onPress: toggleReservationsVisbility, title: "Hide all reservations", color: "" + colorStyles_1.colorStyles.primaryColor.color, accessibilityLabel: 'Hide all currently booked reservations' }),
                                    react_1.default.createElement(react_native_1.FlatList, { refreshing: _this.state.refreshing, onRefresh: function () { return _this.onRefresh(payload); }, data: payload.data.reservations, keyExtractor: function (item) { return item.id; }, renderItem: function (props) {
                                            return react_1.default.createElement(SingleReservation_1.default, { name: props.item.name, hotelName: props.item.hotelName, arrivalDate: props.item.arrivalDate, departureDate: props.item.departureDate });
                                        } }))));
                }
            })));
    };
    return ViewReservations;
}(react_1.default.PureComponent));
exports.default = ViewReservations;
var templateObject_1;
