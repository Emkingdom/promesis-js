const url = 'http://numbersapi.com';
let favorite = 15;
let favoritesNumbers  = [10, 11, 15];
let favNumbers = [];


for (let i = 1; i < 5; i++) {
    favNumbers.push(
    axios.get(`${url}/${favorite}?json`)
  );
}
axios.get(`${url}/${favorite}?json`)
    .then((res) => {
        console.log(res.data)
    })
    .catch(err => console.log(err));


axios.get(`${url}/${favoritesNumbers}?json`)
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));

Promise.all(favNumbers)
    .then(res=> { 
        for( data of res){
            let p = document.createElement('p');
            p.innerText = data.data.text
            document.body.append(p)
        }
    })