"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const animal_1 = require("./animal");
class Gato extends animal_1.Animal {
    Miar() {
        return console.log("Miauu");
    }
}
exports.Gato = Gato;
