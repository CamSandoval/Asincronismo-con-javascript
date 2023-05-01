

const hasAccess = false;

const AccessValidation= new Promise((resolve,reject)=>{
    if(hasAccess){
        resolve('You have access to get in');
    }else{
        reject('Access denied')
    }
})

AccessValidation.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log('Finished prosess'));


const printBlue= () => {
    return new Promise((resolve,reject)=>{
        if(resolve){
            setTimeout(()=> console.log('blue'),2000)
        }
    })
}

const printWhite= () => {
    return new Promise((resolve,reject)=>{
        if(resolve){
            setTimeout(()=> console.log('White'),1000)
        }
    })
}

printBlue()
printWhite();