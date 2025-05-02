
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for(let ipr of pronoun){
  for(let iad of adj){
    for(let inoun of noun){
      
      let dominios = `www. ${ipr}${iad}${inoun} .com`
      console.log(dominios)
    }
  }
}

