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

const rick = await character('Rick');
const all = await allCharacters();

//all.forEach(el => console.log(el));
all.map(x => console.log(x));