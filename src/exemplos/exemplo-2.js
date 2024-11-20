import { Observable } from "rxjs";

// Criando um Observable
const observable = new Observable((subscriber) => {
  subscriber.next("Primeiro valor"); // Emitindo um valor
  subscriber.next("Segundo valor");
  subscriber.complete(); // Finalizando o fluxo
});

// Subscrição para consumir os valores
observable.subscribe({
  next: (value) => console.log(value), // Tratamento dos valores emitidos
  complete: () => console.log("Concluído"), // Quando o fluxo termina
});
