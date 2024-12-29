import { describe , it , expect } from "vitest";
import {CheckEven , Max , ReserveString , Factorial} from "../src/index.js";


describe("max function testing" , ()=>{
    it("should return the maximum of two numbers , return the first number , 10" , () => {
        const reponse = Max(10,2);
        expect(reponse).toBe(10);
    })
    it("should return the minimum of two numbers , return the second number , 10" , () => {
        const reponse = Max(1,20);
        expect(reponse).toBe(20);
    })
})


describe("CheckEven check numbers if even or not " , ()=>{
    it("test number 4 is even , should return true",()=>{
        const reponse = CheckEven(4);
        expect(reponse).toBe(true);
    })
    it("test number 7 is even , should return false",()=>{
        const reponse = CheckEven(7);
        expect(reponse).toBe(false);
    })
    it("test number 0 is even , should return true",()=>{
        const reponse = CheckEven(0);
        expect(reponse).toBe(true);
    })
})


describe("testing the finction reverseString " , ()=>{
    it("shoud reverse (Hello) to (olleH)",()=>{
        const reponse = ReserveString("Hello");
        expect(reponse).toBe("olleH");
    })

    it("shoud reverse (Hello) to (olleH)",()=>{
        const reponse = ReserveString("");
        expect(reponse).toBe('');
    })
})

describe("testing function calculFactirial ", ()=>{

    it("it should retrun 1 , if n = 0 ",()=>{
        const reponse = Factorial(0)
        expect(reponse).toBe(1)

    })
    it("it should retrun 1 , if n = 1",()=>{
        const reponse = Factorial(1)
        expect(reponse).toBe(1)

    })
    
    it("it should retur 120 for factorial number 5",()=>{
        const reponse = Factorial(5)
        expect(reponse).toBe(120)

    })
    
    it("should throw an error for negative numbers", () => {
        expect(() => Factorial(-5)).toThrow("Factorial is not defined for negative numbers");
      });

})

