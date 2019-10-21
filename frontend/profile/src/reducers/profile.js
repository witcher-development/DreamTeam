"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("@utils/reducer");
const actions = __importStar(require("../constants/profile"));
const initialState = {
    firstName: '',
    lastName: '',
};
exports.default = reducer_1.createReducer(initialState, {
    [actions.set]: (state, { profile }) => (Object.assign({}, profile)),
});
