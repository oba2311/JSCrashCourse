
// choose cards classes from html:
const ul1 = document.querySelector('.cards1');
const ul2 = document.querySelector('.cards2');

// define cards:
let cards = {
    'ביבי קנה מטוס': 'עכשיו גם לנו יש אייר פורס 1',
 'מסעדות סגורות כבר חצי שנה': 'כולנו למדנו לבשל חביתה',
 'מכוני הכושר סגורים': 'גילינו את הטיילת של תל אביב'
}


// populate iteratively:
let ul1_html = ``;
let ul2_html = ``;


Object.entries(cards).forEach(
    ([k,v]) => { 
        ul1_html += `<li> ${k}</li>`;
    }
)


Object.entries(cards).forEach(
    ([k,v]) => {
        ul2_html += `<li> ${v}</li>`;
    }
)

// add to page:
ul1.innerHTML = ul1_html;
ul2.innerHTML = ul2_html;

// style:
let questions = document.querySelector(".cards1");  
let answers = document.querySelector(".cards2 ")

// user input for a new card:
// document.querySelector("#top > ul").innerHTML += `style:background-color:blue;`
// console.log(document.querySelector("#top > ul").forEach(printt))


// function printt(item){
//     console.log(item)
// }
