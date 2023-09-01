const filteringBreed=(obj)=>{
 let breeds=[];
 for (let breed in obj)breeds.push(breed);
 return breeds;
}

export default filteringBreed;