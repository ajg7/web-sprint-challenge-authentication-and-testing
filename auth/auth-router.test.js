const { expectCt } = require("helmet");
const supertest = require("supertest");
const server = require("../api/server");


const user = {
    username: "Peach3",
    password: "i<3Mario"
}

let token = "";

describe("Auth-Router", () => {
    describe("Register endpoint", () => {
        it("allows users to register", () => {
            return supertest(server).post("/api/auth/register").send(user).then(response => {expect(response.body)})
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
