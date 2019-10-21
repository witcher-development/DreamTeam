"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_intl_1 = require("react-intl");
exports.namespace = '@frontend/profile';
exports.default = react_intl_1.defineMessages({
    firstName: {
        id: `${exports.namespace}.first`,
        defaultMessage: 'имя',
    },
    lastName: {
        id: `${exports.namespace}.last`,
        defaultMessage: 'фамилия',
    },
    update: {
        id: `${exports.namespace}.update`,
        defaultMessage: 'обновить',
    },
});
