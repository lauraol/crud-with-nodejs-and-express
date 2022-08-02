**nodemon** = é uma biblioteca que facilita a vida de quem é Dev Node, ela tem a função de ver as alterações no nosso código e reiniciar a nossa aplicação automaticamente, sem a necessidade de que façamos isso.

É instalado com o -D pois só vamos precisar dele em desenvolvimento, quando fizemos o deply da nossa aplicação não iremos mais precisar dessa biblioteca. Portando, o comando **npm run dev** roda o nodemon e fica atualizando nosso servidor a cada alteração.

**Para instalar:**
npm i nodemon -D

**CORS** = vai garantir a permissão de acesso para o compartilhamento de recursos com origens diferentes (Cross-Origin Resource Sharing).

Toda vez que o front-end tenta se comunicar com o back-end, é feita uma requisição e o nosso back-end (API) devolve uma resposta, e o CORS serve para proteger as requisições para que sites com alguma requisição (GET, PUT, PATCH e outras) potencialmente perigosa, só seja liberado caso o acesso tenha sido liberado na API.

**Para instalar:**
npm i cors
