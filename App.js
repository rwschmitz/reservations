"use strict";
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
var react_1 = __importDefault(require("react"));
var react_navigation_1 = require("react-navigation");
var apollo_client_1 = require("apollo-client");
var react_apollo_1 = require("react-apollo");
var apollo_link_http_1 = require("apollo-link-http");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var react_native_1 = require("react-native");
var AddReservation_1 = __importDefault(require("./screens/AddReservation"));
var ViewReservations_1 = __importDefault(require("./screens/ViewReservations"));
var AppNavigator = react_navigation_1.createStackNavigator({
    View: ViewReservations_1.default,
    Add: AddReservation_1.default
}, {
    initialRouteName: 'View'
});
exports.AppContainer = react_navigation_1.createAppContainer(AppNavigator);
var client = new apollo_client_1.ApolloClient({
    link: new apollo_link_http_1.HttpLink({ uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev' }),
    cache: new apollo_cache_inmemory_1.InMemoryCache()
});
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
 * App is the entry point for the application.
 */
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(react_apollo_1.ApolloProvider, { client: client },
            react_1.default.createElement(exports.AppContainer, null)));
    };
    return App;
}(react_1.default.PureComponent));
exports.default = App;
