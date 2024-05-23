CREATE TABLE cliente (
  cliente_id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) DEFAULT NULL,
  whats_app INT DEFAULT NULL,
  localidade VARCHAR(255) DEFAULT NULL
);

CREATE TABLE produto(
    produto_id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    data_aquisicao DATE NOT NULL,
    descricao VARCHAR(255) DEFAULT NULL
);

CREATE TABLE venda(
    venda_id SERIAL PRIMARY KEY,
    cliente_id INT NOT NULL,
    produto_id INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id),
    FOREIGN KEY (produto_id) REFERENCES produto(produto_id)
);

CREATE TABLE despesas_venda(
    despesas_id SERIAL PRIMARY KEY,
    venda_id INT NOT NULL,
    cliente_id INT NOT NULL,
    transporte DECIMAL(10,2) DEFAULT NULL,
    impressao DECIMAL(10,2) DEFAULT NULL,
    outros DECIMAL(10,2) DEFAULT NULL,
    FOREIGN KEY (cliente_ID) REFERENCES cliente(cliente_id),
    FOREIGN KEY (venda_id) REFERENCES venda(venda_id)
);