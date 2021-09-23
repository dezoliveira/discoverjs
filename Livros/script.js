/*  Buscando e contando dados em Arrays 

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

    Contar o numero de categorias e o número de livros em casa categoria
    Contar o número de autores
    Mostrar livros do autor George Orwell
    Trnasformar a função acima em uma função que irá receber o nome do autor e devolver os livros do autor

*/

const booksByCategory = [

    //Livros Políticos
    {
        category: "Polítcos",
        books: [
            {
                title: "Revolução dos Bichos",
                author: "George Orwell",
            },

            {
                title: "Deus e o Estado",
                author: "Mikhail Bakunin",
            },

            {
                title: "1984",
                author: "George Orwell",
            },
        ],
    },

    //Livros Terror
    {
        category: "Terror",
        books: [
            {
                title: "O Chamado de Cthulhu",
                author: "HP. Lovecraft",
            },

            {
                title: "O Cemitério",
                author: "Stephen King",
            },

            {
                title: "O Colecionador",
                author: "John Fowler",
            },
        ],
    },
]

//Exibe o total de categorias
const totalCategories = booksByCategory.length
console.log('Total de categorias: ' + totalCategories)

for(let category of booksByCategory){
    console.log('Total de livros da caregoria', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){//Indice estiver vazio
                authors.push(book.author)//Adiciona os autores dos livros nos arrays
            }
        }
    }

    console.log("Total de autores: " + authors.length)
}

countAuthors()

function booksOfAuthor(author){
    let books = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('George Orwell')