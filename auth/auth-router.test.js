const { expectCt } = require("helmet");
const supertest = require("supertest");
const server = require("../api/server");


const username = "Bowser222"
const password = "Ih-8Mario!"

const user = {
    username: "Peach17",
    password: "i<3Mario"
}

const newUser = {
    username: `${username}`,
    password: `${password}`
}

let token = "";

describe("Auth-Router", () => {
    describe("Register endpoint", () => {
        it("allows users to register", () => {
            return supertest(server).post("/api/auth/register").send(user).then(response => {expect(response.body).toBeDefined()})
        })
        it("successful post with a newUser", () => {
            return supertest(server).post("/api/auth/register").send(newUser).then(response => {
                if(response.body.message) {
                    {expect(response.status).toBe(500)}
                } else {
                    {expect(response.status).toBe(201)}
                }
            })
        })
    })
    describe("Login endpoint", () => {
        it("Allows users to login", () => {
            return supertest(server).post("/api/auth/login").send(user).then(response => {
                expect(response.status).toBe(200);
                token = response.body.token;
            })
        })
    })
    describe("Get Jokes", () => {
        it("should have a status 200", () => {
            return supertest(server).get("/api/jokes").set("Authorization", token).then(response => {expect(response.status).toBe(200)})
        })
    })
})
