export default function gerarCardapio(){
    // Função gerar cardápio
    // Criação de uma classe para o lanche, para os combos e para o cardapio

    class Lanche {
        constructor(codigo, descricao, valor, extra){
            this.codigo = codigo;
            this.descricao = descricao;
            this.valor = valor;
            this.extra = extra;
            this.quantidade = 0;
        }
        
    }

    class Combo extends Lanche {
        constructor(codigo, descricao, valor, extra, itensDoCombo){
            super(codigo, descricao, valor, extra);
            this.combo = true;
            this.lanchesDoCombo = itensDoCombo;
        }
    }

    class Cardapio {
        adicionarLanche(lanche){
            this[lanche.codigo] = lanche;
        }
    }

    /*  
        Pensando em manuntenção, com a classe cardapio é facil adicionar um novo lanche ao cardapio 
        caso isso seja necessário no futuro.
    */

    var CardapioDBLanches = new Cardapio;

    // Adicionando os lanches para o cardapio
    CardapioDBLanches.adicionarLanche(new Lanche('cafe', 'Café', 3.00, false));
    CardapioDBLanches.adicionarLanche(new Lanche('chantily', 'Chantily (extra do Café)', 1.50, 'cafe'));
    CardapioDBLanches.adicionarLanche(new Lanche('suco', 'Suco Natural', 6.20, false));
    CardapioDBLanches.adicionarLanche(new Lanche('sanduiche', 'Sanduíche', 6.50, false));
    CardapioDBLanches.adicionarLanche(new Lanche('queijo', 'Queijo (extra do Sanduíche)', 2.00, 'sanduiche'));
    CardapioDBLanches.adicionarLanche(new Lanche('salgado', 'Salgado', 7.25, false));

    CardapioDBLanches.adicionarLanche(new Combo('combo1', '1 Suco e 1 Sanduíche', 3.00, false, 
    {
        suco: CardapioDBLanches.suco,
        sanduiche: CardapioDBLanches.sanduiche
    }));
    
    CardapioDBLanches.adicionarLanche(new Combo('combo2', '1 Café e 1 Sanduíche', 3.00, false, 
    {
        cafe: CardapioDBLanches.cafe,
        sanduiche: CardapioDBLanches.sanduiche
    }));

    // Retorno para conseguirmos usar o cardápio gerado em calcularValorDaCompra
    return CardapioDBLanches;
}