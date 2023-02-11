//image gallery template
let imageGalleryTemplate = function imageGalleryTemplate (imgs) {
    let imgTemp = ` <h2>Image gallery</h2>
        <div class="gallery">
          <figure>
            <img src="images/.png" alt="image of notes">
            <figcaption>*******</figcaption>
        </figure>
        <figure>
          <img src="images/.png" alt="image of notes">
          <figcaption>*******</figcaption>
      </figure>
      <figure>
        <img src="images/.png" alt="image of notes">
        <figcaption>*******</figcaption>
    </figure>
        </div>`
        return imgTemp;
}


document.getElementById('wkNumHead').textContent += "Week 06 Notes";

function notesToHtml(obj, id, elemType, note, cls) {
  let insHere = document.getElementById(`${id}`);
  let elem = document.createElement(`${elemType}`);

  if (typeof(cls) != 'undefined') {
      this.cls = cls;
      elem.className = cls;
  }

  if (typeof(note) != 'undefined') {
    this.note = note;
    elem.innerHTML = note + obj;
  } else {
    elem.innerHTML = obj;
  }
  

  insHere.append(elem);
}


let form = document.forms.my;

notesToHtml(form,'mainInsert', 'p', '(see console for HTML notes) Get the whole form: ');
console.log(form);

//get the element
let elem = form.elements.one;
console.log(elem);


let sameElemName = form.elements.age;
console.log(sameElemName); 
console.log(sameElemName[0]);
console.log(sameElemName[1]);

let fieldSet = form.elements.login;
console.log(fieldSet); 

notesToHtml(my.login == form.login, 'mainInsert', 'p', 'my.login == form.login: '); 


notesToHtml(sameElemName[0].value, 'mainInsert', 'p','Values: ');
notesToHtml(sameElemName[1].value, 'mainInsert', 'p','Values: ');
notesToHtml(sameElemName[0].checked, 'mainInsert', 'p','Values: ');


select.options[2].selected = true; 
select.selectedIndex = 1;
select.value = 'banana' 


let selected = Array.from(selectMult.options)
                    .filter(option => option.selected)
                    .map(option => option.value);

notesToHtml(selected, "mainInsert", 'p', 'Selected from music options: ', 'mkItGreen');


let option = new Option('text', 'value',true,true);
console.log(option);



document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('formObject').addEventListener('submit', handleForm);
});



function handleForm(ev) {
  ev.preventDefault(); 
  console.log(ev.target);

  let myForm = ev.target;
  let fd = new FormData(formObject);

  fd.append('api-key', 'myApiKey');

  //look at all the contents
  for (let key of fd.keys()) {
    console.log(key, fd.get(key));
  }


  
} 

