// sistema de gerenciamento de tarefas

// Array que armazena as tarefas em memória
const tarefas = [];

// 1. adicionando uma tarefa
function adicionarTarefa(titulo, prioridade) {
    const prioridadesValidas = ["baixa", "media", "alta"];

    // Verificando se e valido
    if (!prioridadesValidas.includes(prioridade)) {
        console.log("Prioridade inválida!");
        return;
    }

    // criando o objeto
    const tarefa = {
        id: tarefas.length + 1,
        titulo: titulo,
        prioridade: prioridade,
        concluida: false
    };

    // adiciona a tarefa no array
    tarefas.push(tarefa);

    console.log("Tarefa adicionada:", titulo);
}

// 2. listando todas as tarefas
function listarTarefas() {
    console.log(tarefas);
}

// 3. puxando pelo id
function concluirTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);

    if (tarefa) {
        tarefa.concluida = true;
        console.log("Tarefa concluída:", tarefa.titulo);
    } else {
        console.log("Tarefa não encontrada!");
    }
}

// 4. removendo tarefa pelo ID
function removerTarefa(id) {
    const indice = tarefas.findIndex(t => t.id === id);

    if (indice !== -1) {
        tarefas.splice(indice, 1);
        console.log("Tarefa removida com sucesso!");
    } else {
        console.log("Tarefa não encontrada!");
    }
}

// 5.listando tarefas usando filter()
function listarPorPrioridade(prioridade) {
    return tarefas.filter(tarefa =>
        tarefa.prioridade === prioridade
    );
}

// 6. função para contar tarefas por prioridade usando reduce()
function resumoDeTarefas() {
    return tarefas.reduce((resumo, tarefa) => {
        resumo[tarefa.prioridade]++;
        return resumo;
    }, {
        baixa: 0,
        media: 0,
        alta: 0
    });
}

// 7. função assíncrona para simular a sincronização com o servidor
async function sincronizarComServidor() {
    try {
        console.log("\nSincronizando...");

        // Simula o envio dos dados e espera 2 segundos
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });

        console.log("Tarefas sincronizadas com sucesso!");

    } catch (erro) {
        console.log("Erro ao sincronizar tarefas:", erro);
    }
}

// TESTE

async function executarTeste() {
    // Adiciona cinco tarefas com prioridades variadas
    adicionarTarefa("Estudar JavaScript", "alta");
    adicionarTarefa("Fazer trabalho da faculdade", "alta");
    adicionarTarefa("Organizar arquivos", "media");
    adicionarTarefa("Ler um livro", "baixa");
    adicionarTarefa("Revisar exercícios", "media");

    // Conclui duas tarefas
    concluirTarefa(1);
    concluirTarefa(2);

    // Exibe o resumo das tarefas por prioridade
    console.log("\nResumo das tarefas por prioridade:");
    console.log(resumoDeTarefas());

    // Exibe apenas as tarefas de prioridade alta
    console.log("\nTarefas de prioridade alta:");
    console.log(listarPorPrioridade("alta"));

    // Aguarda a sincronização antes de mostrar a lista final
    await sincronizarComServidor();

    // Exibe a lista final de tarefas
    console.log("\nLista final de tarefas:");
    listarTarefas();
}

// Executa o script de teste
executarTeste();

