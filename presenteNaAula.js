//Escreva uma função estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes)

//Essa função deve receber dois parâmetros:

//O primeiro deve representar o nome de um aluno

//O segundo deve representar um array com o os nomes dos alunos presentes.

//A sua função deve retornar true caso o nome do aluno passado como parâmetro estiver entre os presentes. false caso contrário

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {
    var presente = nomesDosPresentes.indexOf(nomeDoAluno)
    
    if (presente != -1) {
    return true;
    } else {
    return false
    }
    }