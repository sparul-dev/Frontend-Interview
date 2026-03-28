const SearchResult = (props : {result: Array<any>})=>{
    const {result}= props;

    return(
        <div style={{display:"flex", flexDirection:"column", marginTop:"5px"}}>
            {result.map((curr)=>{
                return <span style={{border:"1px solid white", padding:"5px"}}>{curr.name}</span>
            })}
        </div>
    )

}

export default SearchResult;