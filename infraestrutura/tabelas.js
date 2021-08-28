class Tabelas {
    init(conexao) {
        this.conexao = conexao

    }


    criarClientes() {
        const sql = 'CREATE TABLE IF NOT EXISTS Clientes (cliente_id int NOT NULL AUTO_INCREMENT, ' +
            'cliente varchar(50) NOT NULL,' +
            ' numero varchar(20),' +
            'endereco varchar(50) NOT NULL,' +
            ' PRIMARY KEY(cliente_id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Clientes criada com sucesso')
            }
        })
    }


    criarProdutos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Produtos (produtos_id int NOT NULL AUTO_INCREMENT,nome varchar(50) NOT NULL, ' +
            'descricao varchar(50) NOT NULL, ' +
            'tamanho varchar(50) NOT NULL, ' +
            'preco DOUBLE NOT NULL, PRIMARY KEY(produtos_id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Produtos criada com sucesso')
            }
        })
    }

    criarPagamento() {
        const sql = 'CREATE TABLE IF NOT EXISTS Pagamento (pagamento_id int NOT NULL AUTO_INCREMENT,' +
            'metodo varchar(50) NOT NULL, PRIMARY KEY(pagamento_id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Pagamento criada com sucesso')
            }
        })
    }


    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (atendimento_id int PRIMARY KEY AUTO_INCREMENT, ' +
            'cliente_id int NOT NULL, ' +
            'servico varchar(20) NOT NULL, ' +
            'status varchar(20) NOT NULL,' +
            'observacao varchar(50), ' +
            'pagamento_id int NOT NULL , ' +
            'PRIMARY KEY(atendimento_id), ' +
            'CONSTRAINT fk_clienAten FOREIGN KEY (cliente_id) REFERENCES Clientes (cliente_id), ' +
            'CONSTRAINT fk_pagamentoAten FOREIGN KEY (pagamento_id) REFERENCES Pagamento (pagamento_id) '

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela atendimentos criada com sucesso')
            }
        })
    }

    criarListaPedidos() {
        const sql = 'CREATE TABLE IF NOT EXISTS ListaPedidos (id int PRIMARY KEY AUTO_INCREMENT, ' +
            'num_pedido int,' +
            'num_produto int, ' +
            'PRIMARY KEY(id), ' +
            'CONSTRAINT fk_clienAten FOREIGN KEY (num_pedido) REFERENCES Atendimentos (atendimento_id), ' +
            'CONSTRAINT fk_produto FOREIGN KEY (num_produto) REFERENCES Produtos (produtos_id) '

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela ListaPedidos criada com sucesso')
            }
        })
    }


}