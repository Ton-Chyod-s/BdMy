CREATE TABLE clientes (cliente_id SERIAL PRIMARY KEY, nome VARCHAR(255) NOT NULL, email VARCHAR(255) DEFAULT NULL, whats_app INT DEFAULT NULL, localidade VARCHAR(255) DEFAULT NULL);

CREATE TABLE produtos (produto_id SERIAL PRIMARY KEY, nome VARCHAR(255) NOT NULL, quantidade INT NOT NULL, valor DECIMAL(10,2) NOT NULL, data_aquisicao DATE NOT NULL, descricao VARCHAR(255) DEFAULT NULL);

CREATE TABLE vendas (venda_id SERIAL PRIMARY KEY, cliente_id INT NOT NULL, produto VARCHAR(255) NOT NULL, status VARCHAR(255) NOT NULL, data_aquisicao DATE NOT NULL DEFAULT NOW(), FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id));

CREATE TABLE despesas_vendas (despesa_id SERIAL PRIMARY KEY, venda_id INT NOT NULL, cliente_id INT NOT NULL, transporte DECIMAL(10,2) DEFAULT NULL, impressao DECIMAL(10,2) DEFAULT NULL, outros DECIMAL(10,2) DEFAULT NULL, FOREIGN KEY (cliente_ID) REFERENCES clientes(cliente_id), FOREIGN KEY (venda_id) REFERENCES vendas(venda_id));
