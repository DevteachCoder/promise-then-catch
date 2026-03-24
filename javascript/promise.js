let isBookShopOpen = true;
//promise

let willIGetNewBook = new Promise(
    function(resolve,reject) {
        setTimeout(() => {
        if(isBookShopOpen) {
            let book = {
                title:"The Big book knowege",
                autor:"Brown Watson"
            }
            resolve(book)
        }else {
            let reason = new Error("Book shop close")
            reject(reason)
        }
        },2000);
    }
)
willIGetNewBook
    .then(result =>console.log(result))
    .catch(error => console.log(error))