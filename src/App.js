import './App.css';

// class SwapiService {
//     async getResource() {
//         const res = await fetch(url);
//         if (res.ok === false) {
//             console.log(`ERROR ${url}, received ${res.status}`)
//         }
//         const body = await res.json();
//         return body;
//     }
//
//     getAllPeople() {
//         return this.getResource(`https://swapi.dev/api/people/13242134/`)
//     }
//     getPerson(id) {
//         return this.getResource(`https://swapi.dev/api/people/13242134/`)
//     }
// }
//
// const swapi = new SwapiService();
// swapi.getAllPeople().then((body) => {
//     console.log(body)
// })

// getResource('https://swapi.dev/api/people/13242134/')
//     .then((body) => {
//         console.log(body);
//     })
//     .catch((err) => {
//         console.log('Fetch error is', err);
//     })

// fetch('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         return res.json();
//     })
//     .then((body) => {
//         console.log(body)
//     })

function App() {
  return (
    <>
      1
    </>
  );
}

export default App;
