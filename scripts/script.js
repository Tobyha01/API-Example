"use strict";

async function fetchObject(url, payload) { //this returns a javascript object
    const method = "GET" //Some service will want a POST 
    const headers = { 'Accept': 'text/html', 'Content-Type': 'application/json' }
    const response = await fetch(url, { method: method, body: JSON.stringify(payload), headers: headers })
    //const response = await fetch(url, {method:method,headers:{'Accept':'text/html','Content-Type':'application/json'}})
    if (response.ok) {
        return await response.json()
    }
    else {
        console.log(`unexpected response status ${response.status} + ${response.statusText}`)
    }
}

async function getMeme(){
    
    let meme = await fetchObject("https://api.imgflip.com/get_memes")
        
        if(meme.success==true){
            
            for(let i = 0; i<meme.data.memes.length; i++){
                let img = document.createElement("img")
                document.body.appendChild(img)
                img.src=meme.data.memes[i].url}
        }
        else{
            alert("Failed")
        }
        // let data = {
        //     let memes = [
        //         {
        //             id: 61579,
        //             name: "One Does Not Simply",
        //             url: "https://i.imgflip.com/1bij.jpg",
        //             width: 568,
        //             height: 335,
        //             box_count: 2
        //         },
        //         {
        //             id: 101470,
        //             name: "Ancient Aliens",
        //             url: "https://i.imgflip.com/26am.jpg",
        //             width: 500,
        //             height: 437,
        //             box_count: 2
        //         }
        //     ]


        // }


    }
    
getMeme()