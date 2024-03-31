
// const saved=JSON.parse(localStorage.getItem("favoritos"))
// console.log(saved)

// fetch("../assets/js/prod.json")
//     .then(response=>response.json())
// if(saved!=null){
//     for (let index = 0; index < productos.length; index++) {
//         const pId = productos[index].id;
//         const pNom = productos[index].nombre;
//         const pPre = productos[index].precio;
//         const pImg = productos[index].imagen;

//         // console.log(pId)
//         // console.log(pNom)
//         // console.log(pPre)
//         // console.log(pImg)

//         const div=document.createElement('div');
//         div.classList.add('card')

//         const img=document.createElement('img')
//         img.src=pImg
//         img.classList.add('menos')

//         const nom=document.createElement('h2')
//         nom.innerText=pNom

//         const price=document.createElement('h3')
//         price.innerText=`$${pPre}`

//         const boton=document.createElement('button')
//         boton.classList.add('Ver')
//         boton.innerHTML=`<a href="https://www.instagram.com/direct/t/17845098251880882">Consultar</a>`

//         const toFav=document.createElement('button')
//         toFav.classList.add('fav')
//         toFav.innerHTML=`<i class="fa-regular fa-heart"></i>`
//         toFav.addEventListener('click', ()=>{
//             toFav.classList.toggle('fav')
//             toFav.classList.toggle('Fav')

//             const noToFav=fav.indexOf(index)
//             if(toFav.className==='Fav'){
//                 fav.push(index)
//             }else if(toFav.className==='fav'){
//                 fav.splice(noToFav,1)
//             }
//             // if(fav.indexOf(index)!==-1){
//             //     fav.slice(index-1,1)
//             // }else{
//             //    fav.push(index)
                
//             // }
//             const favo=JSON.stringify(fav)
//             localStorage.setItem("favoritos", favo)
//         })

//         const dFav=document.createElement('div')
//         dFav.classList.add('dfav')

//         div.appendChild(dFav)
//         dFav.appendChild(toFav)
//         div.appendChild(img)
//         div.appendChild(nom)
//         div.appendChild(price)
//         div.appendChild(boton)
//         cont.appendChild(div)
//     }
// }