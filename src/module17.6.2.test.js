import { isItRightTriangle } from "./module17.6.2";

describe('test for function right triangle or not', () => {
    it('test for succses', () => {
        expect(isItRightTriangle(3,4,5)).toBe('Это прямоугольный треугольник')
    }) 
    it('test for failure', () => {
        expect(isItRightTriangle(3,4,5)).toBe('Это не прямоугольный треугольник')
    }) 
    it('test for succses', () => {
        expect(isItRightTriangle(3,1,5)).toBe('Это не треугольник')
    }) 
})