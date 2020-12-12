"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
const lodash_1 = __importDefault(require("lodash"));
class ValueObject {
    constructor(props) {
        this.props = Object.assign({}, props);
        Object.freeze(this);
    }
    equals(valueObject) {
        return lodash_1.default.isEqual(this.props, valueObject.props);
    }
}
exports.ValueObject = ValueObject;
