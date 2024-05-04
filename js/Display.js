class Display{
    constructor(displayPreviusValue, displayCurrentValue){
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviusValue = displayPreviusValue;
        this.calculating = new Calculator();
        this.typeOperating = undefined;
        this.currentValue = '';
        this.previusValue = '';
    }

    delete(){
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValues();
    }

    deleteAll(){
        this.currentValue = '';
        this.previusValue = '';
        this.typeOperating = undefined;
        this.printValues();
    }

    addNumber(number){
        if(number === ',' && this.currentValue.includes(',')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues(); 
    }

    printValues(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviustValue.textContent = this.previusValue;
    }
}