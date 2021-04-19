document.addEventListener("DOMContentLoaded", function() {});

const showPanel = document.getElementById('show-panel')
function getBookList(books){
    fetch('http://localhost:3000/books')
    .then(res => {
        console.log(res, "Waiting to parse ...")
        return res.json(books)
    })
    .then(json => {
        console.log("Data parsed . . .", json)
    
    })
    .catch(error => {
        console.log("oh no, error!", error)
    })

}
