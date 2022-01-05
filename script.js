console.log("conectado..");

var tasklist = [];
const addbtn = document.getElementById("add");
const deletebtn = document.getElementById("delete");
const listtemplate = document.getElementById("li-item");


const generateDate = (date) => {
    let format = {
        dd: date.getDay() + 2,
        mm: date.getMonth() + 1, 
        yy: date.getFullYear()
    }
    return `📅 ${format.dd}/${format.mm}/${format.yy} ⏰ ${date.getUTCHours()}:${date.getMinutes()}`;
}

addbtn.addEventListener("click", function () {
    let inputnote = document.getElementById("note").value;
    const li = document.createElement("div");
    const date = new Date();
    tasklist.push({ id: tasklist.length, note: inputnote });
    li.innerHTML = `    
        <li id="${tasklist[tasklist.length - 1].id}"><span>${generateDate(date)}</span> 📝 ${tasklist[tasklist.length - 1].note}
        <button id="delete" class="delete_btn" onClick="deleteItem(${tasklist[tasklist.length - 1].id})" >Delete</button> </li>`;
    document.getElementById("note").value = null; 
    return listtemplate.appendChild(li);
});

const deleteItem = (id) => {
    const selectedElement = document.getElementById(`${id}`);    
    tasklist.splice(id, 1);
    return selectedElement.remove();     
}



