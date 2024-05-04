class Display {
    constructor(displayPreviusValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviusValue = displayPreviusValue;
        this.calculating = new Calculator();
        this.typeOperating = undefined;
        this.currentValue = '';
        this.previusValue = '';
        this.signs = {
            add: '+',
            subtract: '-',
            multiply: 'x',
            split: '/'
        }
    }

    delete() {
        this.currentValue = this.currentValue.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll() {
        this.currentValue = '';
        this.previusValue = '';
        this.typeOperating = undefined;
        this.printValues();
    }

    compute(type) {
        this.typeOperating !== 'equal' && this.calculate();
        this.typeOperating = type;
        this.previusValue = this.currentValue || this.previusValue;
        this.currentValue = '';
        this.printValues();
    }

    addNumber(number) {
        if (number === ',' && this.currentValue.includes(',')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviusValue.textContent = `${this.previusValue} ${this.signs[this.typeOperating] || ''}`;
    }

    calculate() {
        const previusValue = parseFloat(this.previusValue);
        const currentValue = parseFloat(this.currentValue);

        if (isNaN(currentValue) || isNaN(previusValue)) return
        this.currentValue = this.calculating[this.typeOperating](previusValue, currentValue);
    }
}