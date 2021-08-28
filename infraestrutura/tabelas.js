class Tabelas {
    init(conexao){
        this.conexao = conexao

    }


   
    criarClientes(){
        const sql = 'CREATE TABLE IF NOT EXISTS Clientes (cliente_id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, numero varchar(20),endereco varchar(50) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Clientes criada com sucesso')
            }
        })
    }


    criarProdutos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT,nome varchar(50) NOT NULL, descricao varchar(50) NOT NULL,tamanho varchar(50) NOT NULL, preco DOUBLE NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela atendimentos criada com sucesso')
            }
        })
    }

   
   
   
   
   
    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int PRIMARY KEY AUTO_INCREMENT, cliente_id int NOT NULL, produto varchar(20),servico varchar(20) NOT NULL, status varchar(20) NOT NULL,observacao varchar(50), pagamento_id int NOT NULL , CONSTRAINT fk_clienAten FOREIGN KEY (cliente_id) REFERENCES Clientes (cliente_id), CONSTRAINT fk_clienAten FOREIGN KEY (cliente_id) REFERENCES Clientes (cliente_id) '

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela atendimentos criada com sucesso')
            }
        })
    }




    







}