export function isItRightTriangle(a,b,c) {
    if(Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)) {
        return 'Это прямоугольный треугольник'
    } else if(a+b < c) {
        return 'Это не треугольник'
    }
}