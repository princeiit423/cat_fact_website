let btn= document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let final = await getFact();
    console.log(final);
    let p = document.querySelector("#result");
    p.innerText=final;
});

let url= "https://catfact.ninja/fact";
async function getFact(){
    try{
        let res= await axios.get(url);
        return res.data.fact ;
    }
    catch(err){
        return "fact not found" ;
    }
}