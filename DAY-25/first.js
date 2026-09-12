


// DAY -25 JS FETCH  Notes


// whwn it comes to fetch ,3 terms, URL, resquest, response

// fetch('url', 'options' )

// async function getData(formData) {
//     try {
        
//     let response = await fetch('url') 
//     //by default it is a get method only

//     //Post call
//     await fetch('url', {
//         method : 'POST',
//         headers : {'Content-Type' : 'application/json' },
//         body : JSON.stringify(formData)
//     })
// ,       // replace the entire data use PUT
//         await fetch('url', {
//         method : 'PUT',
//         headers : {'Content-Type' : 'application/json' },
//         body : JSON.stringify(formData)
//     }
//     )  ,
//       //Patch
//         await fetch('url', {
//         method : 'PATCH',
//         headers : {'Content-Type' : 'application/json' },
//         body : JSON.stringify(formData)
//     }
//     )  

//     ,
//         await fetch('url', { method : 'delete' }
//     )  

    
//     }catch(err){
//         console.log(err);
        
//     }
// }




// Custom Headers

// await fetch('url',{
//     method : 'POST',
//     headers : 
//     { 'Content-Type' : 'application/json',
//         Authorization : 'Bearer token'
//     },
//     body : JSON.stringify({ formData })
    
// })

// Create New Request

// const resquest1 = new Request('url',{

// method : 'POST',
// headers : {'Content-Type' : 'application/json'  },
// body : JSON.stringify({ formData })

// } )


// the new Request copies properties from resquest1, 
// but properties you provide in the second argument can override them.

// const resquest2 = new Request(resquest1,{
//     body: JSON.stringify({formData})
// })


// async function postData(request) {

//   const response = await fetch(request)
//   const data = await response.json()
//   console.log(data)

// }

// postData(resquest1)
// postData(resquest2)


// Handling Response and Error

// async function getData() {
    
// try {
    
// let response = await fetch('url')

// if(!response.ok){
//     throw new Error('Could not fetch data')
// }

// const content = response.headers.get('content-type')
// if(!content || !content.includes('application/json') ){
//     throw new Error('We havent got the JSON')
// }
// let data =  await response.json()

// } catch (error) {
//     console.log( 'Error' , error)
    
// }}


// Cancelling a Request
// what initiated the particular promise can be cancelled that , 

// const dbtn = document.getElementById('dbtn')
// const abtn = document.getElementById('abtn')

// const url = './file.txt'
// let controller = null

// dbtn.addEventListener('click',downloadFile)

// abtn.addEventListener('click',()=>{
    
//     if(controller){
//         controller.abort('User cancelled downloading')
//         console.warn('Dowloaded cancelled')
//     }
// })


// async function downloadFile() {
    
// try {

//     controller = new AbortController()
//     const signal  = controller.signal

// setTimeout(async() => {
//        console.log('Download started');

//     const response = await fetch(url, {signal} )
//     console.log('Download complete')

//     const blob = await response.blob()
//     const objUrl = URL.createObjectURL(blob)

//    const link = document.createElement('a')
//    link.href = objUrl
//    link.download = 'file.txt'
//    link.click()
//    URL.revokeObjectURL(objUrl) 
// },2000);
    
// } catch (err) {
//     console.error('Download Error', err.message )
// }

// }
















