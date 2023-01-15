const ids = 1;
const txtInserir = document.querySelector(".txtInserir");
const btnInserir = document.querySelector(".btnInserir");
const btnResu = document.querySelector(".btnResu");

const res = document.querySelector(".res");

const validateInput = () => txtInserir.value.trim().length > 0;

function clic(id){
    document.getElementById('pai'+id).outerHTML = '';
 }
const handleAddTask = () => {
    const txtvalid = validateInput();

    console.log(txtvalid);

    if (!txtvalid) {
        return txtInserir.classList.add("error");
    }

    const txtcreate = document.createElement("div");
    txtcreate.classList.add("taskItem");
    txtcreate.setAttribute("id","pai"+ids);

    const itemp = document.createElement("p");
    itemp.innerHTML = txtInserir.value;

    const btnRes = document.createElement("button");
    btnRes.classList.add("btnResu");
    btnRes.innerHTML = ("Excluir");
    btnRes.setAttribute("onclick","clic("+ids+")");

    txtcreate.appendChild(itemp);
    txtcreate.appendChild(btnRes);

    res.appendChild(txtcreate);
    txtInserir.value="";
    ids++;
};

window.onload = function() {
	var divs = document.getElementsByClassName("taskItem");
	
	for(var i=0; i<divs.length; i++) {
		divs[i].addEventListener("click", function() {
			
			});
		}
}
const handleInputChange = () => {
    const txtisvalid = validateInput();
        
    if (txtisvalid) {
        return txtInserir.classList.remove("error");
    }
};

btnInserir.addEventListener("click", () => handleAddTask());


txtInserir.addEventListener("change" , () => handleInputChange());

