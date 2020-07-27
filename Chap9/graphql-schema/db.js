"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
var uuid_1 = require("uuid");
exports.todos = [
    {
        id: uuid_1.v4(),
        title: "First todo",
        description: "First todo description",
    },
    {
        id: uuid_1.v4(),
        title: "Second todo",
        description: "Second todo description",
    },
    {
        id: uuid_1.v4(),
        title: "Third todo",
    },
];
