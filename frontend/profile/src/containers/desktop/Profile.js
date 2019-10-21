"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const profile_1 = require("../../actions/profile");
const Profile_1 = __importDefault(require("../../components/desktop/Profile"));
exports.default = react_redux_1.connect(state => ({
    profile: state.profile,
}), dispatch => ({
    setProfile: profile => dispatch(profile_1.setProfile(profile)),
    updateProfile: () => dispatch(profile_1.updateProfile()),
}))(Profile_1.default);
