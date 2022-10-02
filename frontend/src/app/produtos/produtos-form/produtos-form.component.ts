import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent {
  produtosForm = this.fb.group({
    nome: [null, Validators.required],
    categoria: [null, Validators.required],
    tamanhos: [null, Validators.required],
    quantidade: [null, Validators.required],
    valor: [null, Validators.required],
    descricao: [null, Validators.required],
   
  });

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
