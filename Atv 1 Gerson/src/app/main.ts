    import Entrada from "../io/entrada";
    import Cliente from "../modelo/cliente"
    import Empresa from "../modelo/empresa";
    import CadastroCliente from "../negocio/cadastroCliente";
    import ListagemClientes from "../negocio/listagemClientes";
    import ListagemPets from "../negocio/listagemPets"
    import CadastroPet from "../negocio/cadastroPet";
    import CPF from "../modelo/cpf";
    import AtualizarCliente from "../negocio/atualizarCliente";
    import AtualizarPet from "../negocio/atualizarPet";
    import DeletarCliente from "../negocio/deletarCliente";
    import DeletarPet from "../negocio/deletarPet";
    import CadastroProduto from "../negocio/cadastroProduto";
    import Produto from "../modelo/produto";
    import ListagemProdutos from "../negocio/listagemProdutos";
    import AtualizarProduto from "../negocio/atualizarProduto";
    import DeletarProduto from "../negocio/deletarProduto";
    import RegistrarConsumo from "../negocio/registrarConsumo";
    import ListagemQuantidade from "../negocio/listarQuantidade";
    import ListagemConsumidosValor from "../negocio/listarConsumidosValor";
    import ListagemValor from "../negocio/listagemValor";
    import ListagemPorTipoRaca from "../negocio/listagemPorTipoRaca";

    console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
    let empresa = new Empresa()
    let cpf = new CPF("123.456.789-00", new Date("2020-01-01"));
    let cliente = new Cliente("Nome do Cliente", "Nome Social", cpf);
    let execucao = true
    let produtos: Array<Produto> = [];


    while (execucao) {
        console.log(`Opções:`);
        console.log(`1 - Cadastrar cliente`);
        console.log(`2 - Listar todos os clientes`);
        console.log(`3 - Cadastrar pet`)
        console.log(`4 - Listar todos os pets`)
        console.log(`5 - Atualizar Clientes`)
        console.log(`6 - Atualizar Pets`)
        console.log(`7 - Deletar Clientes`)
        console.log(`8 - Deletar Pets`)
        console.log(`9 - Cadastrar Produtos/Serviços`)
        console.log(`10 - Listar Produtos/Serviços`)
        console.log(`11 - Atualizar Produtos/Serviços`)
        console.log(`12 - Deletar Produtos/Serviços`)
        console.log(`13 - Cliente Comprar Produtos/Serviços`)
        console.log(`14 - Listagem dos 10 clientes que mais adquiriram Produtos/Serviços por Quantidade`)
        console.log(`15 - Listagem de Produtos/Serviços mais consumidos`)
        console.log(`16 - Listagem dos 5 clientes que mais adquiriram Produtos/Serviços por Valor`)
        console.log(`17 - Listagem dos Produtos/Serviços mais consumidor por tipo e raça de Pet`)





        console.log(`0 - Sair`);

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        switch (opcao) {
            case 1:
                let cadastro = new CadastroCliente(empresa.getClientes)
                cadastro.cadastrar()
                break;
            case 2:
                let listagem = new ListagemClientes(empresa.getClientes)
                listagem.listar()
                break;
            case 3:
                let cadastropet = new CadastroPet(cliente.getPets, empresa.getClientes)
                cadastropet.cadastrar()
                break;
            case 4:
                let listarpet = new ListagemPets(cliente.getPets)
                listarpet.listar()
                break;

            case 5: 
                let atualizarCliente = new AtualizarCliente(empresa.getClientes)
                atualizarCliente.atualizar()
                break;
            
            case 6: 
                let atualizarPets = new AtualizarPet(cliente.getPets)
                atualizarPets.atualizar()
                break;    
            
            case 7: 
                let deletarCliente = new DeletarCliente(empresa.getClientes)
                deletarCliente.deletar()
                break;
            
            case 8: 
                let deletarPet = new DeletarPet(cliente.getPets)
                deletarPet.deletar()
                break;
            
            case 9: 
                let cadastrarProduto = new CadastroProduto(produtos)
                cadastrarProduto.cadastrar()
                break;

            case 10: 
                let listarProduto = new ListagemProdutos(produtos)
                listarProduto.listar()
                break;
            
            case 11: 
                let atualizarProduto = new AtualizarProduto(produtos)
                atualizarProduto.atualizar()
                break;

            case 12: 
                let deletarProduto = new DeletarProduto(produtos)
                deletarProduto.deletar()
                break;
            
            case 13:
                 let registrarConsumo = new RegistrarConsumo(empresa.getClientes, produtos)
                registrarConsumo.registrar()
                break;
            
            case 14:
                let listarCliente10 = new ListagemQuantidade(empresa.getClientes)
                listarCliente10.listar()
                break;

            case 15:
                let listarMaisConsumo = new ListagemConsumidosValor(empresa.getClientes)
                listarMaisConsumo.listar()
                break;

            case 16:
                let listarCliente5 = new ListagemValor(empresa.getClientes)
                listarCliente5.listar()
                break;

            case 17:
                    let listarPorTipoRaca = new ListagemPorTipoRaca(empresa.getClientes);
                    listarPorTipoRaca.listar();
                    break;

            case 0:
                execucao = false
                console.log(`Até mais`)
                break;
            default:
                console.log(`Operação não entendida :(`)
        }
    }