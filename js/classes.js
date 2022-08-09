// Классы
class Rectangle { // Инкапсуляция (концепция класса Rectangle)
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10); // square - экземляр, был создан на основе концепции Rectangle
const long = new Rectangle(3, 4);   // экзепляр
console.log(square.calcArea());
console.log(long.calcArea());



class ColoredRectangleWithText extends Rectangle { // Наследование концепции Rectangle
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Go', 'Red');
div.showMyProps();
console.log(div.calcArea());

