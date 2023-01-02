import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  calculatorForm = new FormGroup({
    magSuppServing: new FormControl('2500', [
      Validators.required,
      Validators.min(0),
    ]),
    potSuppServing: new FormControl('500', [Validators.required]),
    saltSuppServing: new FormControl('1000', [Validators.required]),

    magInServing: new FormControl('250', [Validators.required]),
    potInServing: new FormControl('250', [Validators.required]),
    saltInServing: new FormControl('400', [Validators.required]),

    magDesired: new FormControl('50'),
    potDesired: new FormControl('300'),
    saltDesired: new FormControl('1000'),

    servings: new FormControl('40'),
  });

  constructor() {}

  ngOnInit(): void {
    if (this.calculatorForm) {
      this.calculatorForm.get('saltSuppServing')?.disable();
      this.calculatorForm.get('saltInServing')?.disable();
    }
  }

  mixAmountCalculate(
    servingSize: any,
    effectiveCompound: any,
    desiredAmount: any,
    servings: any
  ) {
    return (
      ((desiredAmount / effectiveCompound) * servingSize * servings) / 1000
    );
  }

  onSubmit() {
    console.log('form submitted');
    console.log(this.calculatorForm.get('magDesired')?.value);

    console.log(
      this.mixAmountCalculate(
        this.calculatorForm.get('magSuppServing')?.value,
        this.calculatorForm.get('magInServing')?.value,
        this.calculatorForm.get('magDesired')?.value,
        this.calculatorForm.get('servings')?.value
      )
    );
  }
}
