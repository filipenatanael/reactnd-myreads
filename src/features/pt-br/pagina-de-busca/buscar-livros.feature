#language:pt
@BuscarLivros

Funcionalidade:
    1) A página de busca possui um campo de busca.
    2) A página de busca se comporta corretamente:
    a) Quando o usuário digita algo no campo de busca, os livros relacionados à sua busca são corretamente exibidos na página.
    b) Resultados de buscas não são mostrados quando todo o texto do input de pesquisa é deletado
    c) Buscas inválidas são cuidadas e resultados anteriores não são mostrados.
    d) A pesquisa funciona corretamente quando um livro não possui um thumbnail ou um autor. (Para testar isto, pesquise por "poetry" e "biography").
    e) O usuário consegue pesquisar com múltiplas palavras, tais como "artificial intelligence".

Contexto: Possibilidade de buscar por livros (Titulo e Autor)
Dado que usuário possa acessar a tela de buscar informando titulo ou autor
Então o sistema deve exibir todos os livros relacionados ao parâmetro informado pelo usuário
