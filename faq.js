 //BUSCAR OS ITENS NA TELA
const iTensPerguntasERespostas = document.querySelectorAll('.item');

 //ENTEDER QUE O ITEM FOI CLICADO
 iTensPerguntasERespostas.forEach(function(item) {
     item.addEventListener('click', function() {
         //VERIFICAR SE A PERGUNTA CLICADA ESTÁ ATIVA
        const estaAtiva = item.classList.contains('ativo')
   // SE  A PERGUNTA NÃO ESTIVER ATIVA
        if(!estaAtiva) {
            //ABRIR A RESPOSTA ATUAL, MAS PRECISO FECHAR TODAS 
            iTensPerguntasERespostas.forEach(function(item) {
                item.classList.remove('ativo')
            })

            //ABRIR A RESPOSTA ATUAL
            item.classList.add('ativo')
        } 
        // SE  A PERGUNTA  ESTIVER ATIVA
        else {
            item.classList.remove('ativo')
        }
      //ABRIR A RESPOSTA ATUAL, MAS PRECISO FECHAR TODAS

      //SE A PERGUNTA ESTIVER ATIVA
        //DESATIVAR (REMOVER  A CLASSE ATIVA)
     })
 })
 