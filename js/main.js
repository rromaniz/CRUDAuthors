const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const create = document.querySelector('.create');
const partial = document.querySelector('.partial');
const nameA = document.getElementById('name');
const last_name = document.getElementById('last_name');
const nacionalidad = document.getElementById('nacionalidad');
const gender = document.getElementById('gender');
const age = document.getElementById('age');
const showname = document.getElementById('showname');
const showbio = document.getElementById('showbio');
const shownac = document.getElementById('shownac');
const showgender = document.getElementById('showgender');
const showage = document.getElementById('showage');
const showId = document.getElementById('id');
const select = document.getElementById('select');
const update = document.getElementById('update');
let id;


const urlBase ="https://goodreads-devf-aaron.herokuapp.com";

function validar(){
    if(nameA.value==''&&last_name.value==''&&nacionalidad.value==''&&gender.value==''&&age.value==''){
        return false
    }else if(nameA.value==''||last_name.value==''||nacionalidad.value==''||gender.value==''||age.value==''){
        return false
    }else{
        return true
    }
}


button1.onclick =()=>{

    if(validar()=== false){
        alert('Llena todos los campos');
    }else{
        const jsontoSend1 ={
            name:nameA.value,
            last_name:last_name.value,
            nacionalidad:nacionalidad.value,
            biography:biography.value,
            gender:gender.value,
            age: age.value,
        }
        fetch(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`,{
            method: 'POST',
            body: JSON.stringify(jsontoSend1),
            headers:{
                "Content-type":"application/json"
            },
            mode:"cors"
        })
        .then(response=>response.json())
        .then((data)=>{
            showname.innerHTML = `${data.name} ${data.last_name}`;
            showbio.innerHTML = data.biography;
            shownac.innerHTML = data.nacionalidad;
            showgender.innerHTML =data.gender;
            showage.innerHTML =data.age;
            showId.innerHTML = data.id;
            id = data.id;
        })
    }

    

}

button2.onclick =()=>{
    create.style.display='block';
    partial.style.display='none';
    if(validar()=== false){
        alert('Llena todos los campos');
    }else{
        const jsontoSend2 ={
            name:nameA.value,
            last_name:last_name.value,
            nacionalidad:nacionalidad.value,
            biography:biography.value,
            gender:gender.value,
            age: age.value,
        }
        fetch(`${urlBase}/api/v1/authors/${id}/`,{
            method: 'PUT',
            body: JSON.stringify(jsontoSend2),
            headers:{
                "Content-type":"application/json",
                
            },
            mode:"cors"
        })
        .then(response=>response.json())
        .then((data)=>{
            showname.innerHTML = `${data.name} ${data.last_name}`;
            showbio.innerHTML = data.biography;
            shownac.innerHTML = data.nacionalidad;
            showgender.innerHTML =data.gender;
            showage.innerHTML =data.age;
            showId.innerHTML = data.id;
        })
    }
   

}

button3.onclick =()=>{
    create.style.display='none';
    partial.style.display='block';
   
}

button4.onclick =()=>{
    if(id !== undefined){
        fetch(`${urlBase}/api/v1/authors/${id}/`,{
            method: 'DELETE',
        })
        .then(()=>{
            alert('Registro eliminado');
            showname.innerHTML = '';
            showbio.innerHTML = '';
            shownac.innerHTML = '';
            showgender.innerHTML ='';
            showage.innerHTML ='';
            showId.innerHTML = '';
        })
        
    }else{
        alert('No hay id seleccionado');
    }

}

button5.onclick=()=>{
    const jsontoSend3 ={
        [select.value]:`${update.value}`,
    }
    fetch(`${urlBase}/api/v1/authors/${id}/`,{
        method: 'PATCH',
        body: JSON.stringify(jsontoSend3),
        headers:{
            "Content-type":"application/json",
            
        },
        mode:"cors"
    })
    .then(response=>response.json())
    .then((data)=>{
        console.log(data)
        showname.innerHTML = `${data.name} ${data.last_name}`;
        showbio.innerHTML = data.biography;
        shownac.innerHTML = data.nacionalidad;
        showgender.innerHTML =data.gender;
        showage.innerHTML =data.age;
        showId.innerHTML = data.id;
    })


}