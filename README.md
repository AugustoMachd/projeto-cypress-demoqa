# Testes Automatizados com Cypress - Book Store (DemoQA)

Este projeto contém testes automatizados nas páginas de Registro, Login e Book Store do site de demonstração https://demoqa.com.

## 📊 Resultados dos Testes

| Teste                          | Resultado Esperado              | Resultado Obtido           | Status (Pass/Fail) | Observações                    |
|-------------------------------|----------------------------------|-----------------------------|--------------------|--------------------------------|
| Campo de nome visível         | Campo deve aparecer              | Campo apareceu              |  Passou            | -                              |
| Login com dados inválidos     | Mensagem de erro aparece         | Mensagem "Invalid"          |  Passou            |
                      |
| Cadastro sem passar CAPTCHA   | Cadastro deve ser bloqueado      | CAPTCHA impediu o envio     |  Passou            |

| Lista de livros na Book Store | Lista deve aparecer              | Livros visíveis             |  Passou            | -                              |
| Detalhes de um livro          | Informações do livro exibidas    | ISBN e título visíveis      |  Passou            | -                              |

## 📝 Relatório Explicativo

### Introdução
A atividade teve como objetivo testar o site DemoQA com Cypress, testando funcionalidades básicas de registro.
### Testes Executados
- **Registro**: verificação da visibilidade dos campos e teste de envio sem passar pelo CAPTCHA.
- **Login**: tentativa com credenciais inválidas e verificação da mensagem de erro.
- **Book Store**: checagem da lista de livros e dos detalhes exibidos ao clicar em um livro.

### Análise dos Resultados
Todos os testes executaram. 

### Conclusão
Todos os comandos funcionaram perfeitamente
