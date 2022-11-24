import axios from 'axios';

const allCharacters = async () => { 
    try {
        let list = [];
        const response = await axios.get(`https://rickandmortyapi.com/api/character/`);
        response.data.results.map(x=>list.push(x));
        for(let i = 2; i<response.data.info.pages; i++){
            const response2 = await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`);
            response2.data.results.map(x=>list.push(x)); 
        }
        return list;
    } catch (error) {
        console.log(error);
    }
}

const character = async (search) => { 
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const dimensions = async () => { 
    let list = [];
    const response = await axios.get(`https://rickandmortyapi.com/api/location/`);
    response.data.results.map(x=>!list.includes(x.dimension)? list.push(x.dimension): x);
    for(let i = 2; i<response.data.info.pages; i++){
        const response2 = await axios.get(`https://rickandmortyapi.com/api/location/?page=${i}`);
        response2.data.results.map(x=>!list.includes(x.dimension)? list.push(x.dimension): x); 
    }
    return list;
}

const locationType = async () => { 
    let list = [];
    let c = 0;
    const response = await axios.get(`https://rickandmortyapi.com/api/location/`);
    response.data.results.map(x=>!list.includes(x.type)? list.push(x.type): x);
    for(let i = 2; i<response.data.info.pages; i++){
        const response2 = await axios.get(`https://rickandmortyapi.com/api/location/?page=${i}`);
        response2.data.results.map(x=>!list.includes(x.type)? list.push(x.type): x); 
        c++;
    }
    return list;
}

const getEpisodesByCharacter = async (search) => { 
    try {
        let episodes = '';
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`);
        const characters = response.data; //nos devuelve una lista de characters coincidente con el nommbre que le pasamos.
        if(characters.info.count==1){     //Si solo nos devuelve un personaje el proceso es más sencillo.
            const character = characters.results[0]; //sacamos al personaje del array
            character.episode.map(x=> episodes+=x.substring(x.lastIndexOf('/') + 1)+','); 
        }  //hacemos un map recorriendo los episodios y unimos en el string "episodes" el substring de las urls final, que es el id del episodio. 
        else{
            let episodesList = []   //creamos una lista vacia
            episodesList = characters.results.map(x=> x=x.episode);  // Esta lista se llena con un array que incluye arrais que contienen los episodios de cada personaje [[ep, ep],[ep],[ep]]
            for(let i = 0; i<episodesList.length; i++){              // recorremos la lista con un for (nose porque no sale bien con map pero no tira)
                episodesList[i].map(x=> episodes += x.substring(x.lastIndexOf('/') + 1)+','); //hacemos un map en cada array de episodios y añadimos al string "episodes" los substring ids.
            }
        }
        console.log(episodes);
        const response2 = await axios.get(`https://rickandmortyapi.com/api/episode/${episodes}`); 
        return response2.data; //hacemos una consulta multiple añadiendo episodes que contiene los ids de todos los episodios donde aparece el personaje. Devuelve un array con objetos episode 
    } catch (error) {
        console.log(error);
    }
}

const episodes = await getEpisodesByCharacter('Rick');
console.log('Rick Sanchez aparece en estos episodios:');
episodes.map(x=>console.log(x.name));

//const rick = await character('Rick');
//const all = await allCharacters();
//const dimensionList = await dimensions();
//const typeList = await locationType();

