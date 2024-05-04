class Display{
    constructor(displayPreviusValue, displayCurrentValue){
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviusValue = displayPreviusValue;
        this.calculating = new Calculator();
        this.currentValue = '';
        this.previusValue = '';
    }

    addNumber(number){
        this.currentValue = this.currentValue + number;
        this.printValues();
    }

    printValues(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviustValue.textContent = this.previusValue;
    }
}