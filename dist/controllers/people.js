"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const people_1 = __importDefault(require("../models/people"));
function get(req, res) {
    const id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        people_1.default.findById(id, function (err, result) {
            if (err) {
                res.status(400);
                res.end(err.toString());
            }
            if (result) {
                res.status(200);
                res.send(result);
            }
            else {
                res.status(404);
                res.end();
            }
        });
    }
    else {
        res.status(400);
        res.end('Invalid object id');
    }
}
function list(req, res) {
    people_1.default.find({}, function (err, results) {
        if (err) {
            res.status(400);
            res.end(err.toString());
        }
        if (results) {
            res.status(200);
            res.send(results);
        }
        else {
            res.status(404);
            res.end();
        }
    });
}
function create(req, res) {
    const people = req.body;
    let newPeople = new people_1.default(people);
    newPeople.save(function (err, result) {
        if (err) {
            res.status(400);
            res.end(err.toString());
        }
        else {
            res.status(201);
            res.set('Location', `/people/${result._id}`);
            res.send();
        }
    });
}
exports.default = {
    create,
    get,
    list
};
