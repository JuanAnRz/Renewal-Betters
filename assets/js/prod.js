let productos=[]
const cont=document.getElementById('contCard');
fetch("assets/js/prod.json")
    .then(response=>response.json())
    .then(data=> {
        for (let index = 0; index < data.length; index++) {
            const producto = data[index];
            productos.push(producto)
        }
        for (let index = 0; index < productos.length; index++) {
            const pId = productos[index].id;
            const pNom = productos[index].nombre;
            const pPre = productos[index].precio;
            const pImg = productos[index].imagen;
            // console.log(pId)
            // console.log(pNom)
            // console.log(pPre)
            // console.log(pImg)
            const div=document.createElement('div');
            div.classList.add('card')
            const img=document.createElement('img')
            img.src=pImg
            img.classList.add('menos')
            const nom=document.createElement('h2')
            nom.innerText=pNom
            const price=document.createElement('h3')
            price.innerText=`$${pPre}`
            const boton=document.createElement('button')
            boton.classList.add('Ver')
            boton.innerHTML=`<a href="https://www.instagram.com/direct/t/17845098251880882">Consultar</a>`
            div.appendChild(img)
            div.appendChild(nom)
            div.appendChild(price)
            div.appendChild(boton)
            cont.appendChild(div)
        }
    })
    .catch(console.error())

console.log(productos)

{/* <div class="card">
    <img src="./assets/img/prod/camisa4px.jpg" alt="">
    <h2>Camisa</h2>
    <h3>$1500</h3>
    <button class="Ver"><a href="">Consultar</a></button>
</div>
             */}




/*
<div class="card">
                <img src="./assets/img/prod/camisa4px.jpg" alt="">
                <h2>Camisa</h2>
                <h3>$1500</h3>
                <button class="Ver"><a href="">Consultar</a></button>
            </div>
            
            <div class="card">
                <img src="./assets/img/prod/camisa4px.jpg" alt="">
                <h2>Camisa</h2>
                <h3>$1000</h3>
                <button class="Ver"><a href="">Consultar</a></button>
            </div>

            <div class="card">
                <img src="./assets/img/prod/camisa4px.jpg "alt="">
                <h2>Camisa</h2>
                <h3>$1250</h3>
                <button class="Ver"><a href="">Consultar</a></button>
            </div>

            <div class="card">
                <img src="./assets/img/prod/camisa4px.jpg" alt="">
                <h2>Camisa</h2>
                <h3>$1599</h3>
                <button class="Ver"><a href="">Consultar</a></button>
            </div>

            <div class="card">
                <img src="./assets/img/prod/camisa4px.jpg" alt="">
                <h2>Camisa</h2>
                <h3>$2000</h3>
                <button class="Ver"><a href="">Consultar</a></button>
            </div>

            <div class="card">
                <img src="./assets/img/prod/camisa4px.jpg" alt="">
                <h2>Camisa</h2>
                <h3>$1799</h3>
                <button class="Ver"><a href="">Consultar</a></button>
            </div>

            <div class="card">
                <img src="./assets/img/prod/camisa4px.jpg" alt="">
                <h2>Camisa</h2>
                <h3>$500</h3>
                <button class="Ver"><a href="">Consultar</a></button>
            </div>

            <div class="card">
                <img src="./assets/img/prod/camisa4px.jpg" alt="">
                <h2>Camisa</h2>
                <h3>$1500</h3>
                <button class="Ver"><a href="">Consultar</a></button>
            </div> */