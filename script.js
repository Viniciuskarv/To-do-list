const txtInserir = document.querySelector(".txtInserir");
const btnInserir = document.querySelector(".btnInserir");

const res = document.querySelector(".res");

const validateInput = () => txtInserir.value.trim().length > 0;

const handleAddTask = () => {
    const txtvalid = validateInput();

    console.log(txtvalid);

    if (!txtvalid) {
        return txtInserir.classList.add("error");
    }
    const txtcreate = document.createElement("div");
    txtcreate.classList.add("taskItem");

    const item_p = document.createElement("p");
    item_p.innerHTML = txtInserir.value;

    const btnRes = document.createElement("button");
    btnRes.classList.add("btnResu");
    btnRes.innerHTML = ("Excluir")

    btnRes.addEventListener("click", () => deletClick(txtcreate, item_p)
    );

    txtcreate.appendChild(item_p);
    txtcreate.appendChild(btnRes);

    res.appendChild(txtcreate);

    txtInserir.value="";
};
const deletClick = (txtcreate, item_p) =>{
    const tasks = res.childNodes;

    for (const tasks in tasks) {
        if (tasks.firstChid.isSamenoid(item_p)){
            txtcreate.remove();            
        }
    }
};
const handleInputChange = () => {
    const txtisvalid = validateInput();
        
    if (txtisvalid) {
        return txtInserir.classList.remove("error");
    }
};

btnInserir.addEventListener("click", () => handleAddTask());

txtInserir.addEventListener("change" , () => handleInputChange());

