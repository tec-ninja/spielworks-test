import mongoose from 'mongoose'
const Schema = mongoose.Schema

const PeopleSchema = new Schema({
    firstName: {
        type: String,
        required: [ true, 'First name is required' ]
    },
    lastName: {
        type: String,
        required: [ true, 'Last name is required' ]
    }
})

const People = mongoose.model('people', PeopleSchema)

export default People
