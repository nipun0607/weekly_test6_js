let apiOfList="https://books-backend.p.goit.global/books/category-list";
let apiOfMain="https://books-backend.p.goit.global/books/top-books"
let side=document.querySelector(".aside");
let main_right_container=document.querySelector(".main_rightside");
let list_of_categories=document.querySelectorAll(".left_side_list");
let newcontainer=document.querySelector(".newcontainer");


async function fetchList(){
    let list=await fetch(`${apiOfList}`);
    let readableData=await list.json();
    // aside.appendChild("")
    // console.log(readableData[0].list_name);
    readableData.forEach(element => {
        // console.log(element.list_name);
       let para= document.createElement("p");
       para.classList.add("left_side_list")
        para.innerText=element.list_name;
        side.appendChild(para);
        list_of_categories=document.querySelectorAll(".left_side_list");
    //    console.log(list_of_categories);
    listOfBook(list_of_categories);

    });
}

fetchList();
function listOfBook(list_of_categories){
    list_of_categories.forEach(l=>{
        l.addEventListener('click',details_of_books);
    })
}
async function details_of_books(e){
//   console.log(e.target.innerText);  
let details=await fetch(`https://books-backend.p.goit.global/books/category?category=${e.target.innerText}`);
let bookDetails= await details.json();
// console.log(bookDetails[0]);
// console.log(bookDetails[0].book_image);
// console.log(bookDetails[0].title);
// console.log(bookDetails[0].author);

bookDetails.forEach(bo=>{
    let clickdiv=document.createElement("div");
    clickdiv.classList.add=(".clicked");
    let imgage_of_book=bo.book_image;
    let title_of_book=bo.title;
    let author_of_book=bo.author;
    // console.log(bookDetails);
    // console.log(title_of_book);
    // let inner_click=createElement(div);
    // clickdiv.classList.add("single_book_info");
    clickdiv.innerHTML=
`<img src=${imgage_of_book}/>
<p class="author_name">${title_of_book}</p>
<p class="title_name">${author_of_book}</p>
`
// console.log(clickdiv);
newcontainer.appendChild(clickdiv);
main_right_container.style.display="none";
newcontainer.style.display="flex";
// main_right_container.style.display="none";
})


}
async function fetch_main(){
    let main_books=await fetch(`${apiOfMain}`);
    let books_data= await main_books.json();
    // console.log(books_data);
    books_data.forEach(e=>{
        let outerContainer=document.createElement("div");
        outerContainer.classList.add("books_card_having_btn")
        let outerContainer_heading=document.createElement("h3");
        outerContainer_heading.innerText=e.list_name//outercontainer
        // console.log(e.list_name);
        outerContainer.appendChild(outerContainer_heading);//heading aagi
        // console.log(outerContainer);
        let outer_container_of_card=document.createElement("div");
        //cards vala
        outer_container_of_card.classList.add("all_books_container")
        
        e.books.forEach(b=>{
        let imageofcards=b.book_image;
        let author_of_books= b.author;
        let title_of_books =b.title;
        //details
        let inner_container_of_card=document.createElement("div");
        inner_container_of_card.classList.add("single_book_info");
        //for putting details
        inner_container_of_card.innerHTML=
        `<img src=${imageofcards} alt="image of books"/><p class="author_name">${author_of_books}</p><p class="title_name">${title_of_books}</p>

        `
        //details daaldi
        outer_container_of_card.appendChild(inner_container_of_card);

        //cards me 3no details aagi
            // console.log(inner_container_of_card);
        // console.log(imageofcards,author_of_books,title_of_books);
        


        })
        // console.log(outer_container_of_card);
        outerContainer.appendChild(outer_container_of_card)
        // console.log(outerContainer);
        let cardbtn=document.createElement("button");
        cardbtn.innerText="See More";
        cardbtn.classList.add("card_btn")
        outerContainer.appendChild(cardbtn);
        // console.log(outerContainer);
        main_right_container.appendChild(outerContainer);  
        // outerContainer.classList=
    })

} 
fetch_main();