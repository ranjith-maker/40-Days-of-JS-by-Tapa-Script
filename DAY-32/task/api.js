

function createUser(name) {
    setTimeout(() => {
        console.log(`Account for ${name} is created`)
    }, 1000);

}

function fetchUsers(){
    setTimeout(()=>{
          console.log('All the users are imported');
          
    },2000)
}



export {  createUser, fetchUsers }


