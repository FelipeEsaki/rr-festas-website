const servicos = [
    {
        imagem: `assets/servicos/bege.png`,
        servico: 'Guardanapo Bege',
        texto: `É uma modalidade de empréstimo para aposentados, pensionistas, servidores públicos, na qual as parcelas são descontadas diretamente do benefício, com juros baixíssimos.`
    },
    {
        imagem: `assets/servicos/branco.png`,
        servico: 'Guardanapo Branco',
        texto: `- Débito na conta de luz <br> - Via cartão de crédito <br> - Débito em conta `
    },
    {
        imagem: `assets/servicos/azul.png`,
        servico: 'Guardanapo Azul',
        texto: `O crédito rural é um financiamento que <strong>auxilia produtores rurais</strong> à <strong>expandirem suas operações</strong>, fazer investimentos ou <strong>custear a produção.`
    },
    {
        imagem: `assets/servicos/verde.png`,
        servico: 'Guardanapo Verde',
        texto: `O limpa nome é um serviço onde todas as suas <strong>dívidas serão colocadas em status de sigilo total</strong> durante 12 meses, elevando seu Score e <strong>facilitando aprovações.`
    },
    {
        imagem: `assets/servicos/rosa.png`,
        servico: 'Guardanapo Rosa',
        texto: `A JMFCred possui <strong>todos os tipos de seguros</strong> e <strong>mais de 10 seguradoras</strong> parceiras para melhor atender sua necessidade!`
    },
    {
        imagem: `assets/servicos/transparente.png`,
        servico: 'Taça Transparente',
        texto: `A JMFCred oferece a <strong>melhor opção de consórcio</strong> de acordo com sua necessidade. Trabalhamos com todos os tipos de consórcios!`
    },
    {
        imagem: `assets/servicos/tverde.png`,
        servico: 'Taça Verde',
        texto: `Está na hora de adquirir seu <strong>novo veículo</strong>! Com a JMFCred você tem as <strong>melhores taxas</strong> e opções de financiamento!`
    },
    {
        imagem: `assets/servicos/tazul.png`,
        servico: 'Taça Azul',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a JMFCred você tem as <strong>melhores taxas</strong> e opções de financiamento, refinanciamento e carta fiança!`
    },
    {
        imagem: `assets/servicos/tambar.png`,
        servico: 'Taça Âmbar',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a JMFCred você tem as <strong>melhores taxas</strong> e opções de financiamento, refinanciamento e carta fiança!`
    },
    {
        imagem: `assets/servicos/tjarra.png`,
        servico: 'Jarra Transparente',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a JMFCred você tem as <strong>melhores taxas</strong> e opções de financiamento, refinanciamento e carta fiança!`
    },
    {
        imagem: `assets/servicos/rattan.png`,
        servico: 'Sousplat Rattan',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a JMFCred você tem as <strong>melhores taxas</strong> e opções de financiamento, refinanciamento e carta fiança!`
    },
    {
        imagem: `assets/servicos/dourado.png`,
        servico: 'Sousplat Dourado',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a JMFCred você tem as <strong>melhores taxas</strong> e opções de financiamento, refinanciamento e carta fiança!`
    },
    {
        imagem: `assets/servicos/prata.png`,
        servico: 'Sousplat Prata',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a JMFCred você tem as <strong>melhores taxas</strong> e opções de financiamento, refinanciamento e carta fiança!`
    },
    {
        imagem: `assets/servicos/redonda.png`,
        servico: 'Toalha de Mesa Redonda',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a JMFCred você tem as <strong>melhores taxas</strong> e opções de financiamento, refinanciamento e carta fiança!`
    },
    {
        imagem: `assets/servicos/quadrada.png`,
        servico: 'Toalha de Mesa Quadrada',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a JMFCred você tem as <strong>melhores taxas</strong> e opções de financiamento, refinanciamento e carta fiança!`
    },
];

for (const servico of servicos) {
    const content = `<div class="servico">
    <img src="${servico.imagem}"/>
    <h2>${servico.servico}</h2>
</div>`

    document.querySelector('.servicos').innerHTML += content;
}