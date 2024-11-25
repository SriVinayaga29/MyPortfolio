async function fetchData() {
    let api=await fetch("https://dummyjson.com/posts");
    let value=await api.json();
    console.log("value");
    
}