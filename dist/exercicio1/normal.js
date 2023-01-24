"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Normal = void 0;
const ingresso_1 = require("./ingresso");
class Normal extends ingresso_1.Ingresso {
    imprimeValor() {
        return console.log(this._valor);
    }
}
exports.Normal = Normal;
