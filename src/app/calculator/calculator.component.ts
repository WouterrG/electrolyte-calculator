import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface mixForm {
  magSuppServing: FormControl<string>;
  potSuppServing: FormControl<string>;
  saltSuppServing: FormControl<string>;

  magInServing: FormControl<string>;
  potInServing: FormControl<string>;
  saltInServing: FormControl<string>;

  magDesired: FormControl<string>;
  potDesired: FormControl<string>;
  saltDesired: FormControl<string>;

  servings: FormControl<string>;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  calculatorForm = new FormGroup<mixForm>({
    magSuppServing: new FormControl('2500', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    potSuppServing: new FormControl('500', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    saltSuppServing: new FormControl('1000', {
      nonNullable: true,
      validators: [Validators.required],
    }),

    magInServing: new FormControl('250', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    potInServing: new FormControl('250', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    saltInServing: new FormControl('400', {
      nonNullable: true,
      validators: [Validators.required],
    }),

    magDesired: new FormControl('50', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    potDesired: new FormControl('300', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    saltDesired: new FormControl('1000', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    servings: new FormControl('40', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  saltAmount: number = 0;
  magAmount: number = 0;
  potAmount: number = 0;
  servingAmount: number = 0;
  servingCount: any = 1;

  constructor() {}

  ngOnInit(): void {
    if (this.calculatorForm) {
      this.calculatorForm.get('saltSuppServing')?.disable();
      this.calculatorForm.get('saltInServing')?.disable();
      this.calculatorForm.get('saltDesired')?.disable();
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

    this.magAmount = this.mixAmountCalculate(
      this.calculatorForm.get('magSuppServing')?.value,
      this.calculatorForm.get('magInServing')?.value,
      this.calculatorForm.get('magDesired')?.value,
      this.calculatorForm.get('servings')?.value
    );

    this.saltAmount = this.mixAmountCalculate(
      this.calculatorForm.get('saltSuppServing')?.value,
      this.calculatorForm.get('saltInServing')?.value,
      this.calculatorForm.get('saltDesired')?.value,
      this.calculatorForm.get('servings')?.value
    );

    this.potAmount = this.mixAmountCalculate(
      this.calculatorForm.get('potSuppServing')?.value,
      this.calculatorForm.get('potInServing')?.value,
      this.calculatorForm.get('potDesired')?.value,
      this.calculatorForm.get('servings')?.value
    );

    this.servingCount = this.calculatorForm.get('servings')?.value;

    this.servingAmount =
      (this.saltAmount + this.magAmount + this.potAmount) / this.servingCount;

    console.log(this.saltAmount, this.magAmount, this.potAmount);
  }
}
