"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(props, id) {
        this.props = props;
        this._id = id;
    }
    static isEntity(e) {
        return e instanceof Entity;
    }
    get id() {
        return this._id;
    }
    equals(entity) {
        return this._id.equals(entity.id);
    }
}
exports.Entity = Entity;
