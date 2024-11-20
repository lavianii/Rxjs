// Objetivo do exemplo:

// Gerar um observable a partir de um array de NOTAS gerando
// string de dados sobre cada um de seus valores e mostrar se
// está aprovado ou não.
// SEM USAR O FROM

import { Observable } from "rxjs";


function fromArrayManual(array) {
  const observable = new Observable((subscriber) => {
    notas.forEach((array) => {
      subscriber.next(array >= 7 ? "Aprovado" : "Reprovado");
      
    });
    subscriber.complete();
  });
  
  return observable;
}

const notas = [10, 6.5, 8, 7.5, 6.7, 4.2, 3.1];
fromArrayManual(notas).subscribe((status) => {
  console.log(status);
});

