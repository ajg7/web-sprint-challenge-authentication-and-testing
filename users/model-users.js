module.exports = {
    findById,
    find,
    add,
    findBy
}

const db = require("../database/dbConfig");

function findById(id) {
    return db("users").where({ id }).first();
}

function find() {
    return db("users").where({ id }).first();
}

function add(newUser) {
    return db("users").insert(newUser)
        .then(ids => {
            const id = ids[0];
            return findById(id);
        })
}

function findBy(filter) {
    return db("users").where(filter).orderBy("id");
}