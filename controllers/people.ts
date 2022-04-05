import { Request, Response } from 'express'
import People from '../models/people'
import PeopleType from '../types/people'

function get(req: Request, res: Response) {
    const id: string = req.params.id
    if (id.match(/^[0-9a-fA-F]{24}$/)) {  
        People.findById(id, function(err: any, result: PeopleType) {
            if (err) {
                res.status(400)
                res.end(err.toString())
            }
            if (result) {
                res.status(200)
                res.send(result)
            } else {
                res.status(404)
                res.end()
            }
        })
    } else {
        res.status(400)
        res.end('Invalid object id')
    }
}

function list(req: Request, res: Response) {
    People.find({}, function(err: any, results: PeopleType[]) {
        if (err) {
            res.status(400)
            res.end(err.toString())
        }
        if (results) {
            res.status(200)
            res.send(results)
        } else {
            res.status(404)
            res.end()
        }
    })
}

function create(req: Request, res: Response) {
    const people = req.body
    let newPeople = new People(people)
    newPeople.save(function(err: any, result: PeopleType) {
        if (err) {
            res.status(400)
            res.end(err.toString())
        } else {
            res.status(201)
            res.set('Location', `/people/${result._id}`)
            res.send()
        }
    })
}

export default {
    create, 
    get, 
    list
}