// Document
const agendamentoForm = document.getElementById('agendamentoForm');
const listaAgendamentos = document.getElementById('listaAgendamentos');
const agendamentosSection = document.getElementById('agendamentos');

// Variáveis
let agendamentos = [];

// Funções
function adicionarAgendamento(agendamento) {
    const li = document.createElement('li');
    li.className = 'list-group-item';

    li.innerHTML = `
        <div>
            <strong>${agendamento.nome}</strong><br>
            <small>Médico: ${agendamento.medico}</small><br>
            <small>Data: ${agendamento.data} às ${agendamento.horario}</small>
        </div>
        <button class="btn btn-danger btn-sm" onclick="removerAgendamento(this)">Remover</button>
    `;

    listaAgendamentos.appendChild(li);
    agendamentos.push(agendamento); // Adiciona o agendamento ao array
    agendamentosSection.style.display = 'block'; // Exibe a seção de agendamentos
}

function removerAgendamento(botao) {
    const li = botao.parentElement;
    const index = Array.from(listaAgendamentos.children).indexOf(li);

    agendamentos.splice(index, 1); // Remove o agendamento do array
    li.remove(); // Remove o item da lista

    // Oculta a seção de agendamentos se não houver mais agendamentos
    if (listaAgendamentos.children.length === 0) {
        agendamentosSection.style.display = 'none';
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    // Captura os valores dos campos do formulário DENTRO da função
    const nome = document.getElementById('nome').value;
    const medico = document.getElementById('medico').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    if (nome && medico && data && horario) {
        const agendamento = {
            nome,
            medico,
            data,
            horario
        };

        adicionarAgendamento(agendamento);
        agendamentoForm.reset(); // Limpa o formulário
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Event Listeners
agendamentoForm.addEventListener('submit', handleFormSubmit);