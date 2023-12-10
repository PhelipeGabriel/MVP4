/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/pacientes';
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {
      data.pacientes.forEach(item => insertList(item.name, 
                                                item.grav, 
                                                item.ph,
                                                item.osm,
                                                item.cond,
                                                item.urea,
                                                item.calc,
                                                item.target
                                              ))
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList()




/*
  --------------------------------------------------------------------------------------
  Função para colocar um paciente na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputPatient, inputGrav, inputPh,
                        inputOsm, inputCond, inputUrea, 
                        inputCalc) => {
    
  const formData = new FormData();
  formData.append('name', inputPatient);
  formData.append('grav', inputGrav);
  formData.append('ph', inputPh);
  formData.append('osm', inputOsm);
  formData.append('cond', inputCond);
  formData.append('urea', inputUrea);
  formData.append('calc', inputCalc);

  let url = 'http://127.0.0.1:5000/paciente';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
  
  window.location.reload(true);
}


/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada paciente da lista
  --------------------------------------------------------------------------------------
*/
const insertDeleteButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
}

/*
  --------------------------------------------------------------------------------------
  Função para remover um paciente da lista de acordo com o click no botão close
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  // var table = document.getElementById('myTable');
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      const nomeItem = div.getElementsByTagName('td')[0].innerHTML
      if (confirm("Você tem certeza?")) {
        div.remove()
        deleteItem(nomeItem)
        alert("Removido!")
      }
    }
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para deletar um paciente da lista do servidor via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteItem = (item) => {
  console.log(item)
  let url = 'http://127.0.0.1:5000/paciente?name='+item;
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  -----------------------------------------------------------------------------------------------------------
  Função para adicionar um novo paciente com nome, gravidade, Ph, osmolaridade, condutividade, ureia, cálcio 
  -----------------------------------------------------------------------------------------------------------
*/
const newItem = async () => {
  let inputPatient = document.getElementById("newInput").value;
  let inputGrav = document.getElementById("newGrav").value;
  let inputPh = document.getElementById("newPh").value;
  let inputOsm = document.getElementById("newOsm").value;
  let inputCond = document.getElementById("newCond").value;
  let inputUrea = document.getElementById("newUrea").value;
  let inputCalc = document.getElementById("newCalc").value;

  // Verifique se o nome do paciente já existe antes de adicionar
  const checkUrl = `http://127.0.0.1:5000/pacientes?nome=${inputPatient}`;
  fetch(checkUrl, {
    method: 'get'
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.pacientes && data.pacientes.some(item => item.name === inputPatient)) {
        alert("O paciente já está cadastrado.\nCadastre o paciente com um nome diferente ou atualize o existente.");
      } else if (inputPatient === '') {
        alert("O nome do paciente não pode ser vazio!");
      } else if (isNaN(inputGrav) || isNaN(inputPh) || isNaN(inputOsm) || isNaN(inputCond) || isNaN(inputUrea) || isNaN(inputCalc)) {
        alert("Esse(s) campo(s) precisam ser números!");
      } else {
        insertList(inputPatient, inputGrav, inputPh, inputOsm, inputCond, inputUrea, inputCalc);
        postItem(inputPatient, inputGrav, inputPh, inputOsm, inputCond, inputUrea, inputCalc);
        alert("Paciente adicionado!");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para inserir pacientes na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (namePatient, grav, ph,osm, cond, urea, calc, target) => {
  var item = [namePatient, grav, ph,osm, cond, urea, calc, target];
  var table = document.getElementById('myTable');
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cell = row.insertCell(i);
    cell.textContent = item[i];
  }

  var deleteCell = row.insertCell(-1);
  insertDeleteButton(deleteCell);


  document.getElementById("newInput").value = "";
  document.getElementById("newGrav").value = "";
  document.getElementById("newPh").value = "";
  document.getElementById("newOsm").value = "";
  document.getElementById("newCond").value = "";
  document.getElementById("newUrea").value = "";
  document.getElementById("newCalc").value = "";

  removeElement();
}