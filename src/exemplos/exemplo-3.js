// Objetivo do exemplo:

// Gerar um observable a partir de um array de NOTAS gerando
// string de dados sobre cada um de seus valores e mostrar se
// está aprovado ou não.

import { from } from "rxjs";
import { map } from "rxjs/operators";

const notas = [10, 6.5, 8, 7.5, 6.7, 4.2, 3.1];
const observable = from(notas);

observable
  .pipe(map((nota) => (nota >= 7 ? "Aprovado" : "Reprovado")))
  .subscribe((status) => {
    console.log(status);
  });
