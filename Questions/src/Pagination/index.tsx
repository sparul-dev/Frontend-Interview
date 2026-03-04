
import { useEffect, useState } from 'react';
import './App.css'
import Cards from './Cards';

function App() {

  const PAGE_SIZE = 5;

  const [products , setProducts] = useState([]);
  const [currPage, setCurrPage]= useState(1);
  
  const fetchData = async()=>{

    const data = await fetch(`https://dummyjson.com/products?limit=50`);
    const json = await data.json();
    setProducts(json.products);
  }

  useEffect(()=>{
    fetchData();

  },[])

  const handlePagination= (curr: number)=>{
    setCurrPage(curr+1);
  }

  const handlePrevNext = (type: string)=>{
    if(type === "next") setCurrPage((prev)=> prev+1);
    else setCurrPage((prev)=> prev-1);
  }

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts/PAGE_SIZE);

  const start = (currPage-1)* PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return products?.length ===0 ? <></> :(
   <>
    <div style={{marginBottom:"10px", cursor:"pointer"}}>
      <button style={{padding:"5px", border:"1px solid white", marginRight:"5px"}} onClick={()=>handlePrevNext("prev")} disabled={currPage<=1} >Prev</button>
     {[...Array(totalPages).keys()].map((curr)=>{
      return(
        <span key={curr} style={{padding:"5px", border:"1px solid white", marginRight:"5px"}} onClick={()=>handlePagination(curr)}>
            {curr+1}
        </span>
      )
     })}
      <button style={{padding:"5px", border:"1px solid white", marginRight:"5px"}} onClick={()=>handlePrevNext("next")} disabled={currPage>=totalPages}>Next</button>
    </div>
   <div style={{display :"flex", flexWrap:"wrap", flexDirection:"row", gap:"10px"}}>
    {products.slice(start, end).map((curr)=>{
      return (
        <Cards product= {curr} key={curr.id}/>
      )
    

    })}
    </div>

   </>
  )
}

export default App
