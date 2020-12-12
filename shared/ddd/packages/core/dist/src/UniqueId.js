"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueId = void 0;
const nanoid_1 = require("nanoid");
class UniqueId {
    constructor(id) {
        this.value = id !== null && id !== void 0 ? id : nanoid_1.nanoid();
    }
    equals(id) {
        return this.value === id.value;
    }
}
exports.UniqueId = UniqueId;
