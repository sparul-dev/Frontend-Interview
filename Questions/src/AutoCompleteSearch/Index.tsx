import { useState } from "react";
import SearchResult from "./SearchResult";

interface IAutoCompleteSearch{

}



const AutoCompleteSearch = (props: IAutoCompleteSearch)=>{

    const[result , setResult] = useState([]);
    const [query , setQuery]= useState("");

    const fetchData  = async(query:string)=>{
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
        const json  =await data.json();
        setResult(json.recipes);
    }

    const onInputChange = (e:any)=>{
        setQuery(e.target.value);
        fetchData(e.target.value);

    }


    return(

        <>
        <h2>Auto Complete Search Bar</h2>

        <input type = "text" onChange = {(e) => onInputChange(e)} ></input> 
        {result.length===0? <></> : <SearchResult result={result}/>}


        </>
    )

}

export default AutoCompleteSearch;