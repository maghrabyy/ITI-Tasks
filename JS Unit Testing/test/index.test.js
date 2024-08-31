import { capitalizeText, createArray } from "../index.js";
import chai from "chai";

const expect = chai.expect;
const should = chai.should()
const assert = chai.assert

describe("Test Cases for capitalizeText function using Expect",()=>{
    it("Check if the function returns a value of type string",()=>{
       expect(capitalizeText("mahmoud")).to.be.an("string")
    })
    it("check if the function returns a capitalized string",()=>{
        expect(capitalizeText("mahmoud")).to.be.equal("MAHMOUD")
    })
    it("Check if the function takes a parameter of type string only or will throw error",()=>{
        expect(()=>{capitalizeText(1)}).to.throw("parameter should be string")
     })

     it("Check if the function will not return a different string",()=>{
        expect(capitalizeText("iti")).not.equal("HELLO")
     })
})

describe("Test Cases for capitalizeText function using Assert",()=>{
    it("Check if the function returns a value of type string",()=>{
        assert.isString(capitalizeText("mahmoud"))
    })
    it("check if the function returns a capitalized string",()=>{
        assert.equal(capitalizeText("mahmoud"),"MAHMOUD")
    })
    it("Check if the function takes a parameter of type string only or will throw error",()=>{
        assert.throw(()=>{capitalizeText(5)},"parameter should be string")
     })

     it("Check if the function will not return a different string",()=>{
        assert.notEqual(capitalizeText("iti"),"HELLO")
     })
})

describe("Test Cases for createArray function using Expect",()=>{
    let num = 1;
    beforeEach(()=>num++)
    it("Check if the function return an array",()=>{
        expect(createArray(num)).to.be.an("array") // num = 2
    })
    it("Check if if the array length is equal to the passed argument",()=>{
        expect(createArray(num)).to.be.lengthOf(3) // num = 3
    })
    it("Check if the array includes 1 if it has a length of 2 or more",()=>{
        expect(createArray(num)).to.includes(1) // num = 4
    })
})


describe("Test Cases for createArray function using Should",()=>{
    let num = 1;
    beforeEach(function(done){
        num++
        console.log("Waiting...")
        this.timeout(8000)
        setTimeout(()=>{
            console.log("Test Executed.")
            done()
        }, 5000)
    })
    it("Check if the function return an array",()=>{
        createArray(num).should.be.an("array") // num = 2
    })
    it("Check if if the array length is equal to the passed argument",()=>{
        createArray(num).should.be.lengthOf(3) // num = 3
    })
    it.skip("Check if the array includes 1 if it has a length of 2 or more",()=>{
        createArray(num).should.includes(1) // num = 4
    })
})


