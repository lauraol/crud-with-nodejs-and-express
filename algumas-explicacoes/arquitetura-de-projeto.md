# MVC

**MVC (Model-View-Controller)** é um padrão em design de software comumente usado para implementar interfaces de usuário, dados e lógica de controle. Ele enfatiza a separação entre a lógica de negócios do software e a exibição. Esta "separação de interesses" proporciona uma melhor divisão do trabalho e uma manutenção aprimorada.

As três partes do padrão de design de software MVC podem ser descritas da seguinte forma:
Model: gerencia dados e lógica de negócios.
View: controla o layout e a exibição.
Controller: encaminha comandos para o modelo e exibe as peças.

Essa outra forma considera a separação da View em uma aplicação, o Frontend, e o Controller e o Model passam a ser responsabilidade do Backend.

Para isso, o Backend precisa receber as solicitações do Frontend e encaminhar para que sejam processadas nos locais corretos.

Com isso, as solicitações são feitas para as rotas (Routes), que estão declaradas dentro dos Controllers e encaminham as chamadas para o Service, que é responsável por lidar com as questões da camada Model.

**Route:** que se refere ao roteamento, que é a determinação de como um aplicativo responde a uma solicitação do cliente por um endpoint específico, que é uma URI (ou caminho) e um método de solicitação HTTP específico (GET, POST, e assim por diante).

**Controller:** que fará o tratamento inicial dos dados e tem a responsabilidade de gerenciar os comandos da aplicação.

**Service:** responsável pela regra de negócio da aplicação e que tem a responsabilidade de se comunicar com as camadas mais internas, como o banco de dados.
