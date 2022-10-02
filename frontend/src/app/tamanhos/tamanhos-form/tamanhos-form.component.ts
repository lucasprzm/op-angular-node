import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tamanhos-form',
  templateUrl: './tamanhos-form.component.html',
  styleUrls: ['./tamanhos-form.component.css']
})
export class TamanhosFormComponent {
  tamanhosForm = this.fb.group({
    nome: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
