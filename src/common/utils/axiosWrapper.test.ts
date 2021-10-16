import * as axiosWrapper from "./axiosWrapper"
// @ponicode
describe("axiosWrapper.axiosWrapper", () => {
    test("0", async () => {
        await axiosWrapper.axiosWrapper("http://another.example.com/")
    })

    test("1", async () => {
        await axiosWrapper.axiosWrapper("b'https://example.com:1234/foo?bar'")
    })

    test("2", async () => {
        await axiosWrapper.axiosWrapper("b'http://example.com:1234/foo?bar'")
    })

    test("3", async () => {
        await axiosWrapper.axiosWrapper("b'http://example.com/'")
    })

    test("4", async () => {
        await axiosWrapper.axiosWrapper("b'http://example.com/foo?bar'")
    })

    test("5", async () => {
        await axiosWrapper.axiosWrapper("")
    })
})
