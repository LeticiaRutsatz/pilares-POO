"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavalo = void 0;
const animal_1 = require("./animal");
class Cavalo extends animal_1.Animal {
    Relinchar() {
        return console.log("iiirrrrí, rilinchin");
    }
}
exports.Cavalo = Cavalo;
