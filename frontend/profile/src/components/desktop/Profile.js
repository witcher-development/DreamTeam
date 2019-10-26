"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const layout_1 = require("@ui/layout");
const input_1 = require("@ui/input");
const button_1 = require("@ui/button");
const text_1 = require("@ui/text");
const messages_1 = __importDefault(require("../../messages"));
const Profile = ({ profile, setProfile, updateProfile, intl }) => (react_1.default.createElement(layout_1.Column, null,
    react_1.default.createElement(layout_1.Layout, { basis: 60 }),
    react_1.default.createElement(layout_1.Row, null,
        react_1.default.createElement(layout_1.Layout, { basis: '10%' }),
        react_1.default.createElement(layout_1.Layout, { basis: 360 },
            react_1.default.createElement(text_1.Text, { size: 's', weight: 'bold', transform: 'uppercase' }, intl.formatMessage(messages_1.default.firstName)))),
    react_1.default.createElement(layout_1.Layout, { basis: 12 }),
    react_1.default.createElement(layout_1.Row, null,
        react_1.default.createElement(layout_1.Layout, { basis: '10%' }),
        react_1.default.createElement(layout_1.Layout, { basis: 360 },
            react_1.default.createElement(input_1.Input, { type: 'email', border: 'lightGray', value: profile.firstName, onChange: value => setProfile({ firstName: value, lastName: profile.lastName }), placeholder: intl.formatMessage(messages_1.default.firstName) }))),
    react_1.default.createElement(layout_1.Layout, { basis: 24 }),
    react_1.default.createElement(layout_1.Row, null,
        react_1.default.createElement(layout_1.Layout, { basis: '10%' }),
        react_1.default.createElement(layout_1.Layout, { basis: 360 },
            react_1.default.createElement(text_1.Text, { size: 's', weight: 'bold', transform: 'uppercase' }, intl.formatMessage(messages_1.default.lastName)))),
    react_1.default.createElement(layout_1.Layout, { basis: 12 }),
    react_1.default.createElement(layout_1.Row, null,
        react_1.default.createElement(layout_1.Layout, { basis: '10%' }),
        react_1.default.createElement(layout_1.Layout, { basis: 360 },
            react_1.default.createElement(input_1.Input, { type: 'password', border: 'lightGray', value: profile.lastName, onChange: value => setProfile({ firstName: profile.firstName, lastName: value }), placeholder: intl.formatMessage(messages_1.default.lastName) }))),
    react_1.default.createElement(layout_1.Layout, { basis: 24 }),
    react_1.default.createElement(layout_1.Row, null,
        react_1.default.createElement(layout_1.Layout, { basis: '10%' }),
        react_1.default.createElement(layout_1.Layout, { basis: 360 },
            react_1.default.createElement(button_1.Button, { text: true, disabled: !profile.firstName || !profile.lastName, onClick: updateProfile }, intl.formatMessage(messages_1.default.update))))));
exports.default = react_intl_1.injectIntl(Profile);
