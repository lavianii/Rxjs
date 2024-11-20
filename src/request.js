import { map, Observable } from "rxjs";
import axios from "axios";

const URL = "http://localhost:3000/filmes";

function httpGetAll(url) {
  return new Observable((subscriber) => {
    axios.get(url)
      .then((response) => {
        subscriber.next(response.data); //  Envie o array de filmes
        subscriber.complete(); // Finalize o fluxo
      })
      .catch((error) => {
        subscriber.error(error); // Notifique erros
      });
  });
}

httpGetAll(URL)
  .pipe(
    map((data) => data.map((filme) => filme.Title)),
    )
  .subscribe({
    next: (titles) => console.log(titles),
    error: (err) => console.error("Erro na requisição:", err),
    complete: () => console.log("Requisição completa!"),
  });
