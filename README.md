# MVP4 da PUC Rio*
# Engenharia de Sistemas de Software Inteligentes, Machine Learning.
# Aluno: Phelipe Gabriel Benigno Monteiro.

Este é um projeto que faz parte do material diático da disciplina **Sprint: Qualidade de Software, Segurança e Sistemas Inteligentes** do Curso de Engenharia de Software da PUC Rio.O projeto demonstra um pequeno aplicativo com a porção back end tendo a sua API de encapsulamento das funcionalidades de base de dados implementadas utilizando a linguagem de programação Python3, um dataset e um front end utilizando **HTML**, **CSS** e **Javascript**, sem utilização de frameworks ou bibliotecas.

Trata-se de uma aplicação de 1 página apenas, contendo uma aplicação simples de diagnóstico de Cálculos Renais. O script principal em Python, chamado de **app.py**, encapsula ainda, por meio de bibliotecas, a API de documentação open source **Swagger**, que padroniza a integração dos processos de definir

## links para demais datasets:
UCI Machine Learning Repository: https://archive.ics.uci.edu/ml/datasets.php
Kaggle: https://www.kaggle.com/datasets
Google Datasets: https://datasetsearch.research.google.com/
Hugging Face: https://huggingface.co/datasets


Vamos explorar como criar a estrutura da página, introduzindo estilos aos componentes e interatividade à aplicação.

## Como executar?


Clone a pasta do projeto, **MVP4** a partir do meu repositário público [MVP4](https://github.com/PhelipeGabriel/MVP4) no **GitHUB**.

Ao clicar no link acima, uma janela será aberta no seu navegador, no meu diretório público do GitHub, onde a pasta **MVP4** pode ser visualizada. Logo acima, no canto superior direito, você visualiza o botão **<> Code** na cor verde. Clique na setinha e uma janela de diálogo se abre, clique naquele ícone com as duas janelinhas quadradas sobrepostas, ao final da linha com o endereço **https://github.com/PhelipeGabriel/MVP4**. Isso copiará esse endereço para a memória.

Em seguida, no seu MS Code clique em Clone Git Repository e dê um Ctrl-V na janelinha de endereço que abre no topo. Com o endereço no campo de entrada, pressione **Enter** no seu teclado. Uma janela de diálogo será aberta, na qual você escolherá a pasta onde deseja que esse repositório seja clonado. Clique então no botão ***Select as Repository Destination***. O repositório Git será clonado nessa sua pasta.

Agora abra um Terminal ou Shell e vá para o diretório BackWeb. A partir de lá, crie um ambiente virtual Python para rodar essa aplicação, da seguinte forma:

---
- python -m venv env
---

Esse comando criará o ambiente virtual onde essa aplicação será executada, resolvendo problemas de conflito entre ambientes python distintos que você possa ter.

Após criado o ambiente virtual, será necessário ativá-lo. Para isso, dependendo do seu Sistema Operacional, você utilizará um dos *scripts* presentes no diretório **env/Scripts** (ou **env\Scripts** no Windows).

Para o caso específico do Windows, no qual você normalmente usa o PowerShell, o comando é:

---
- env\Scripts\Activate.ps1
---

Pronto, o ambiente virtual python deverá estar rodando, o qual você poderá confirmar pela **(env)** no início da sua linha de comando.

Se precisar desativar o ambiente virtual por qualquqer motivo, utilize o comando **env/deactivate ou env\deactivate** (Windows).

Em seguida, instale as bibliotecas listadas no arquivo `requirements.txt`, presente no mesmo diretório onde você se encontra com o Terminal/Shell aberto. As bibliotecas presentes nesse arquivo são dependências que a aplicação em python necessita. Instale-as por meio do seguinte comando:

---
- pip install -r requirements.txt
---

Na sequência, para executar a API que criará e gerenciará a base de dados, execute o seguinte comando:

---
- (env)$ flask run --host 0.0.0.0 --port 5000
---

Esse comando fará com que o servidor de dados SQLite3 espere requisições no endereço 127.0.0.1, na porta 5000. As requisições serão entregues por meio da aplicação de front end e serão recebidas e tratadas pela aplicação de back end, interfaceando com a camada de base de dados da aplicação.

Portanto, para que essa aplicação de ***back end*** rode e fique esperando requisições por parte da porção cliente (***front end***), é necessário abrir uma página no navegador, com o seguinte endereço:

---
- http://127.0.0.1:5000
---

Alternativamente você pode utilizar o endereço:

---
- http://localhost:5000
---

O navegador deve mostrar a página inicial **Minha API**, na qual você encontra o ***Swagger*** . Feito isso, você agora pode rodar a aplicação front end e poderá inserir dados e verificar o comportamento da aplicação.

Se estiver com a janela do Terminal/Shell ainda aberta, você poderá acompanhar o retorno dos códigos de execução no Terminal/Shell e verificar os dados sendo inseridos/deletados etc., clicando no db.sqlite3 dentro do diretório database.

Para dar um *refreh* no banco de dados, clique no ícone de refresh do banco de dados, na parte superior esquerda da tela de visualização dos dados. 

### Como executar o teste de validação do dataset?

Após os testes no Swagger e no front-end(dentro do ambiente virtual **(env)** ou fora dele), você deverá executar o comando:

---
- pytest test_modelos.py
---

Que retornará se o dataset atende aos niveis de acuracia informado. Caso não atenda, basta trocar para os niveis que vão ser informado após a primeira análise do dataset.

#### Google Colab.

Segue o link para o Google Colab: https://colab.research.google.com/drive/1mr75qyGR-sUY6mHf14l_UBf-aKZmu920#scrollTo=oEsezkLVHZYh&uniqifier=2, onde contem o notebook com o relatório da resolução do problema de machine learning.

Boa sorte!