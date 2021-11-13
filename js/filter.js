const filterByTag = (photographers, tag) =>{
    return photographers.filter((photograph)=> 
        photograph.tags.includes(tag)
    )
}

export default filterByTag;