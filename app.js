console.log("Let's get this party started!");
const $searchinput = $('#search');
const $giflist = $('#giflist');

function addGif(data){
    if(data.data.length){
        const randvalue = Math.floor(Math.random()*50);
        //console.log(value);
        let $newCol = $("<div>", {class:"col-sm-6 col-md-4 col-12"});
        let $newGif = $("<img>", {
            src: data.data[randvalue].images.original.url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $giflist.append($newCol);
    }
}

$("form").on ("submit", async function(evt){
    evt.preventDefault();    

    let term = $searchinput.val();
    $searchinput.val("");
    
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {
        q: term,
        api_key :"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }});
    

    addGif(res.data);
    //return res.data.data[value].images.original.url;
})

$("#erase").on("click", function(){
    $giflist.empty();
})


// const input = document.querySelector('#search-input');
//     const res = await getgifs(input.value);
//     console.log(res);
   
   
//     const li = document.createElement('li');
//     const img = document.createElement('img');
    
//     img.src = res;
//     li.append(img);
//     ul.appendChild(li);
//     console.log(ul);
//     //console.log(input.value);
//     input.value ="";
// })

