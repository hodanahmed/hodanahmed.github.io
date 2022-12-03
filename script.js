// Selecting all HTML elements in section class
const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const body = document.querySelector('.main-content');


function PageTransitions() {
    SectionsTransitions()
}

function SectionsTransitions() {
    // Button click active class
    for (let i = 0; i < sectionBtn.length; i++) {
        sectionBtn[i].addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            ButtonTransitions(e, id)
            // Remove and add 'active' class to sections
            SectionElementsTransitions(id)
        })
    }
}

function ButtonTransitions(element, id) {
    let currentActiveBtn = document.querySelectorAll('.active-btn');
    if (currentActiveBtn.length) {
        //Removing active-btn class from current element
        currentActiveBtn[0].classList.remove('active-btn');
        // if (id) {
        //     // Removing active class from current
        //     currentActiveBtn[0].classList.remove('active');
        // }
    }
    //Adding active classes to clicked element
    element.target.className += " active-btn";
    // element.target.className += " active";

}

function SectionElementsTransitions(id) {
    // Passed event target 'dataset id' to run commands
    sections.forEach((section) => {
         //Removing active class from all sections
        section.classList.remove('active')
    })
    // Looking for clicked element ID
    const element = document.getElementById(id);
    //Adding class active to clicked element
    element.classList.add('active');
}

PageTransitions();






//This works well
// function SectionsTransitions() {
//     // Button click active class
//     for (let i = 0; i < sectionBtn.length; i++) {
//         sectionBtn[i].addEventListener('click', (e) => {
//             const id = e.target.dataset.id;
//             let currentActiveBtn = document.querySelectorAll('.active-btn');
//             if (currentActiveBtn.length) {
//                 //Replacing current active button class with empty string
//                 currentActiveBtn[0].classList.remove('active-btn');
//                 if (id) {
//                     // Replacing current active button class with empty string
//                     currentActiveBtn[0].classList.remove('active');
//                 }
//             }
//             //Add current class name to active btn
//             e.target.className += " active-btn";
//             e.target.className += " active";

//             // Remove and add 'active' class to sections
//             SectionElementsTransitions(id)
//         })
//     }
// }







//  Sections active
// function SectionsTransitions() {
//     body.addEventListener('click', (e) =>{
//         const id = e.target.dataset.id;
//         if(id){
//             //resmove selected from the other btns
//             sectionBtns.forEach((btn) =>{
//                 btn.classList.remove('active')
//             })
//             e.target.classList.add('active')

//             //hide other sections
//             sections.forEach((section)=>{
//                 section.classList.remove('active')
//             })

//             const element = document.getElementById(id);
//             element.classList.add('active');
//         }
//     })
// }