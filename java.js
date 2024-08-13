/* Lista VAR */

const corpo = document.querySelector("body");
var Ceps = document.querySelector("#CEP");
var container = document.querySelector(".container");
var datastart = document.querySelector(".data-start");
var datadesaida = document.querySelector(".data-end");
var func = document.querySelector(".func");

/*Evento para Verificar se o CEP tem mais de 8 digitos */
Ceps.addEventListener("input", async function (event) {
  const maxdigits = 8;

  let valor = event.target.value;
  if (valor.length > maxdigits) {
    event.target.value = valor.slice(0, maxdigits);
  }
});

document
  .getElementById("submitt")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    var valor = document.getElementById("CEP").value;
    var mensagem = document.querySelector(".message");
    const apiURL = `https://viacep.com.br/ws/${valor}/json/`;
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        alert("Erro de requisição");
      }
      const data = await response.json();
      if (data.erro) {
        mensagem.textContent = "*CEP NÃO ENCONTRADO*";
        cidade.value = " ";
      } else {
        mensagem.textContent = " ";
      }
      var cidade = document.getElementById("city");
      var UFf = document.getElementById("UF");
      var Bairro = document.getElementById("Bairro");
      var Local = document.getElementById("local");
      cidade.value = `${data.logradouro}`;
      UFf.value = `${data.uf}`;
      Bairro.value = `${data.bairro}`;
      Local.value = `${data.localidade}`;
    } catch (error) {
      console.error("error");
    }

    console.log("error");
  });

var tela = document.querySelector(".containerr");
var cursos = document.querySelector(".Cursos");

/* função para abrir a tela de Experiencias */
function abrirCursos() {
  var filhos = container.children;

  for (i = 0; i < filhos.length; i++) {
    const filhote = filhos[i];
    if (!filhote.classList.contains("Cursos")) {
      filhote.style.filter = "blur(5px)";
      cursos.style.display = "flex";
      cursos.style.alignItems = "flex-start";
      console.log("chegou");
    }
  }
}

function abirtela() {
  var filhos = container.children;

  for (i = 0; i < filhos.length; i++) {
    const filhote = filhos[i];
    if (!filhote.classList.contains("containerr")) {
      filhote.style.filter = "blur(5px)";
      tela.style.display = "flex";
      console.log("chegou");
    }
  }
}

var job = document.querySelector(".job");
var random = document.querySelector(".random");
var fecharrandom = document.querySelector(".fechar");

random.addEventListener("click", () => {
  job.style.display = "flex";
});

fecharrandom.addEventListener("click", () => {
  fechartela(job);
});

var nome = document.querySelector("#name");

nome.addEventListener("input", function (event) {
  event.preventDefault();
  Masculino(nome);
});

function fechar() {
  var child = container.children;
  for (i = 0; i < child.length; i++) {
    var children = child[i];
    if (!children.classList.contains("containerr")) {
      children.style.filter = "none";
      var Close = document.querySelector(".close");
      var tela = document.querySelector(".containerr");
      tela.style.display = "none";
    }
  }
}
function fecharcurso() {
  var child = container.children;
  for (i = 0; i < child.length; i++) {
    var children = child[i];
    if (!children.classList.contains("Cursos")) {
      children.style.filter = "none";
      var Close = document.querySelector(".closecurso");
      var curso = document.querySelector(".Cursos");
      curso.style.display = "none";
    }
  }
}

var inputvalor = document.querySelector("#Empre").value;

function Masculino(nome) {
  var valordonome = nome.value;
  valordonome = valordonome.toUpperCase();

  nome.value = valordonome;
}

const icone = document.querySelector("#submitt");
const inputs = document.querySelectorAll(".input-dados");
const tudo = document.querySelector("*");
function time(obj) {
  inputs.forEach((input) => {
    input.style.backgroundColor = "#151515";
    input.style.color = "#fff";
    corpo.style.backgroundColor = "#151515";
    tudo.style.color = "#fff";
    objetivo.style.backgroundColor = "#151515";
    random.style.color = "#fff";
    objetivo.style.color = "#fff";
    icone.style.color = "#fff";
    trabalhos.forEach(function (selecao) {
      if (selecao.classList.contains("selecionado")) {
        selecao.style.color = "#fff";
      }
    });
  });
}

function stime(obj) {
  inputs.forEach((input) => {
    input.style.backgroundColor = "#fff";
    input.style.color = "#151515";
    corpo.style.backgroundColor = "#fff";
    tudo.style.color = "#151515";
    random.style.color = "#151515";
    objetivo.style.backgroundColor = "#fff";
    objetivo.style.color = "#151515";
    icone.style.color = "#151515";
    trabalhos.forEach(function (selecao) {
      if (selecao.classList.contains("selecionado")) {
        selecao.style.color = "black";
      }
    });
  });
}

var sun = document.querySelector(".Sun");
var icons = document.querySelector(".Moon");

let valida = true;

icons.addEventListener("click", function (e) {
  e.preventDefault();
  if (valida === true) {
    time();
    valida = !valida;
  }
  console.log(valida);
});

sun.addEventListener("click", function (e) {
  e.preventDefault();
  if (valida === false) {
    stime();
    valida = !valida;
  }

  console.log(valida);
});

function formatPhone(input) {
  // Remove all non-digit characters
  let phone = input.value.replace(/\D/g, "");

  if (phone.length > 11) {
    phone = phone.substring(0, 11);
  }
  // Format the phone number as (XX) XXXXX-XXXX
  if (phone.length === 2) {
    phone = phone.replace(/^(\d{0,2})/, "($1");
  } else if (phone.length <= 6) {
    phone = phone.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
  } else {
    phone = phone.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2$3");
  }

  // Set the formatted value back to the input
  input.value = phone;
}

//form da empresa

const nomedaempresa1 = document.querySelector("#Empre");
const funcaodaempresa = document.querySelector("#funcao");
const dataentdaempresa = document.querySelector("#data");
const datasaidadaempresa = document.querySelector("#dataend");

const formula = document.querySelector(".form-experiencia");

function salvar() {
  const valoresdasempresas = nomedaempresa1.value.trim() !== "" && 
  funcaodaempresa.value.trim() !== "" && dataentdaempresa.value.trim() !== "" &&
  datasaidadaempresa.value.trim() !== "";


  if(valoresdasempresas){
    alert('todos preenchidos')
    return minimizar(),
    atribuir()
    
  }else{
    alert('Campos estão vazios')
    return false
  }
}

function minimizar() {
  var filho = container.children;
  for (i = 0; i < filho.length; i++) {
    var filhote = filho[i];
    if (!filhote.classList.contains("containerr")) {
      filhote.style.filter = "none";
      tela.style.display = "none";
    }
  }
}

function atribuir() {
  const templete = document.querySelector(".taskbox");
  const newtask = templete.cloneNode(true);

  newtask.querySelector(".empresa").textContent = nomedaempresa1.value;
  newtask.querySelector(".func").textContent =
    "Função: " + funcaodaempresa.value;
  newtask.querySelector(".data-start").textContent =
    "Data de Entrada: " + dataentdaempresa.value;
  newtask.querySelector(".data-end").textContent =
    "Data de Saida: " + datasaidadaempresa.value;
  newtask.classList.remove("hide");
  newtask.classList.remove("template");

  const lista = document.querySelector(".tasklist");
  lista.appendChild(newtask);

  var removertask = newtask
    .querySelector(".remover")
    .addEventListener("click", function () {
      removeliss(this);
    });
}

// função para remover a lista
function removeliss(task) {
  task.parentNode.remove(true);
}

nomedaempresa1.addEventListener("input", () => {
  Masculino(nomedaempresa1);
});

const objetivo = document.querySelector("#objetivo");

function fechartela(obejto) {
  obejto.style.display = "none";
}

var texto = [
  "Busco integrar-me a uma equipe dinâmica como [FUNÇÃO], onde possa aplicar meus conhecimentos e habilidades para contribuir com o sucesso e crescimento da empresa.",

  "Desejo atuar como [FUNÇÃO] em uma organização que valorize a inovação e o desenvolvimento contínuo, utilizando minha experiência e competência para alcançar resultados excepcionais.",

  "Procurando uma posição desafiadora como [FUNÇÃO] que me permita utilizar minha formação e experiência, ao mesmo tempo em que ofereço oportunidades para crescimento profissional e pessoal.",

  "Almejo uma oportunidade como [FUNÇÃO] que me permita colaborar com uma equipe focada em excelência, onde eu possa aplicar minhas habilidades e adquirir novos conhecimentos para contribuir com os objetivos da empresa.",

  "Interessado em uma posição como [FUNÇÃO] que me possibilite aplicar minhas habilidades e conhecimentos de maneira eficaz, contribuindo para o sucesso da empresa e ampliando minhas próprias competências.",

  "Objetivo integrar uma empresa como [FUNÇÃO] que ofereça desafios e oportunidades de crescimento, onde eu possa contribuir de maneira significativa com meus conhecimentos e habilidades.",

  "Procuro uma oportunidade como [FUNÇÃO] em uma empresa inovadora e orientada para resultados, onde eu possa utilizar minha experiência e competências para agregar valor ao time e atingir metas estabelecidas.",

  "Desejo uma posição como [FUNÇÃO] que me permita utilizar minhas habilidades e experiências em um ambiente colaborativo, contribuindo para o desenvolvimento e sucesso da organização.",

  "Busco um ambiente de trabalho desafiador e estimulante como [FUNÇÃO], onde eu possa aplicar minhas habilidades e conhecimentos para contribuir com os objetivos da empresa e, ao mesmo tempo, crescer profissionalmente.",

  "Procurando uma posição como [FUNÇÃO] que ofereça oportunidades para aplicar meus conhecimentos, colaborar com uma equipe dedicada e contribuir para o sucesso contínuo da organização.",
];

function Salvaobjeto() {
  const textradom = Math.floor(Math.random() * texto.length);
  const frasealeatoria = texto[textradom];
  const select = document.querySelector("#test");
  const valor = select.value;
  objetivo.value = frasealeatoria;
  var novafrase = frasealeatoria.replace("[FUNÇÃO]", valor);
  objetivo.value = novafrase;
  fechartela(job);
}

const habilidade = document.querySelector(".Habilidades");

function fecharhab() {
  fechartela(habilidade);
  minimizartelas(".Habilidades", habilidade);
}

const trabalhos = document.querySelectorAll(".trabalho");

trabalhos.forEach(function (trabalho) {
  trabalho.addEventListener("click", function () {
    trabalho.classList.toggle("selecionado");
  });
});

function abrirhab() {
  abrirtelas(".Habilidades", habilidade);
}

function abrirtelas(blurclass, obj) {
  var filhos = container.children;

  for (i = 0; i < filhos.length; i++) {
    const filhote = filhos[i];
    if (!filhote.classList.contains(blurclass)) {
      filhote.style.filter = "blur(5px)";
      obj.style.display = "flex";
    }
  }
}

function minimizartelas(blurclass, obj) {
  var filho = container.children;
  for (i = 0; i < filho.length; i++) {
    var filhote = filho[i];
    if (!filhote.classList.contains(blurclass)) {
      filhote.style.filter = "none";
      obj.style.display = "none";
    }
  }
}

function salvarhab() {
  const optrabalho = document.querySelector(".trabalhoparagrafo");
  const newtask = optrabalho.cloneNode(true);
  const list = document.querySelector(".taskboxx");
  const selecionado = document.querySelectorAll("selecionado");
  trabalhos.forEach(function (selecao) {
    if (selecao.classList.contains("selecionado")) {
      list.appendChild(selecao);
    }
  });

  trabalhos.forEach(function (aperta) {
    if (aperta.classList.contains("selecionado") && valida === true)
      aperta.style.color = "black";
  });
}

function resetar(obj) {
  var resetar = obj.value;
  resetar = resetar.textContent = " ";
  obj.value = resetar;
}

function verificarinputs(pai) {
  var dono = pai.children;
  console.log(dono);
  for (i = 0; dono.length > i; i++) {
    return;
  }
}

function salvarcurso() {
  /*Valores */
  const valordonome = document.querySelector("#name-curso");
  const valordainst = document.querySelector("#name-inst");
  const periodo = document.querySelector("#periodo");
  const datadentrar = document.querySelector("#data-curso");
  const datadesair = document.querySelector("#data-curs");
  const valorcheck = document.querySelectorAll('input[name="optioncheck"]');

  function validarosvalores() {
    const todospreenchidos =
      valordonome.value.trim() !== "" &&
      valordainst.value.trim() !== "" &&
      periodo.value.trim() !== "" &&
      datadentrar.value.trim() !== "" &&
      datadesair.value.trim() !== "";

    const marcado = Array.from(valorcheck).some((checkbox) => checkbox.checked);

    if (todospreenchidos && marcado) {
      alert("todos estão preenchidos");
      return true;
    } else {
      alert("nenhum marcado");
      return false;
    }
  }

  if (!validarosvalores()) {
    return;
  }

  /* DOM */

  const nomedocurso = document.querySelector(".nomedocurso");
  const nomedafaculdade = document.querySelector(".nomedafacul");
  const nomedoperiodo = document.querySelector(".periodofacul");
  const datastartcurso = document.querySelector(".data-startcurso");
  const dataendcurso = document.querySelector(".data-endcurso");
  const paragr = document.querySelector(".checkan");
  const taskli = document.querySelector(".taskcurso");
  const taskop = document.querySelector(".opcurso");

  newtaskop = taskop.cloneNode(true);
  const cursopai = document.querySelector(".Cursos");

  newtaskop.querySelector(".nomedocurso").textContent = valordonome.value;
  newtaskop.querySelector(".nomedafacul").textContent = valordainst.value;
  newtaskop.querySelector(".periodofacul").textContent =
    "Periodo: " + periodo.value;
  newtaskop.querySelector(".data-startcurso").textContent =
    "data de entrada: " + datadentrar.value;
  newtaskop.querySelector(".data-endcurso").textContent =
    "data de saida: " + datadesair.value;
  var selectedOption = "";
  valorcheck.forEach(function (valorchecks) {
    if (valorchecks.checked) {
      selectedOption = valorchecks.value;
    }
    console.log(selectedOption);
  });
  newtaskop.querySelector(".checkan").textContent = "Curso: " + selectedOption;

  newtaskop.classList.remove("hide");

  (taskli.style.display = "flex"), taskli.appendChild(newtaskop);
  const removertaskk = newtaskop
    .querySelector(".removercurso")
    .addEventListener("click", function () {
      removeliss(this);
    });

  resetar(valordonome);
  resetar(valordainst);
  resetar(datadentrar);
  resetar(datadesair);
}

const telacurso = document.querySelector(".escola");

function abrirescola() {
  abrirtelas(".escola", telacurso);
}

function fecharescola() {
  minimizartelas(".escola", telacurso);
}

/* VALORES ESCOLAS INPUTS */
const nomedainstituicao = document.querySelector("#nameinstescola");
const nomedaescola = document.querySelector("#option-escola");
const datadaescola = document.querySelector("#dataescola");
const datafinaldaescola = document.querySelector("#datafinalescola");

console.log(nomedaescola);
/*Dom da Escola */

const Domnomeescola = document.querySelector(".nomedaescola");
const Domnomeinst = document.querySelector(".nomedainstis");
const Domdata = document.querySelector(".anodaentrada");
const Domdatafinal = document.querySelector(".anodetermino");

function Salvaescola() {
  const listas = document.querySelector(".opescola");
  const newlist = listas.cloneNode(true);

  newlist.querySelector(".nomedainstis").textContent =
    "Instuição: " + nomedainstituicao.value;
  newlist.querySelector(".nomedaescola").textContent =
    "Nivel de Ensino: " + nomedaescola.value;
  newlist.querySelector(".anodaentrada").textContent =
    "Data Inicial: " + datadaescola.value;
  newlist.querySelector(".anodetermino").textContent =
    "Data Final: " + datafinaldaescola.value;
  newlist.classList.remove("hide");

  const ulescola = document.querySelector(".taskescola");
  ulescola.appendChild(newlist);
}
