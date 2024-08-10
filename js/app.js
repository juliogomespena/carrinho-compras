let total = 0;

function limpar()
{
    let listaDeProdutos = document.getElementById("lista-produtos");
    let total = document.getElementById("valor-total");

    listaDeProdutos.innerHTML = "";
    total.innerHTML = "";
    total = 0;
}

function adicionar()
{
    let produto = document.getElementById("produto").value;
    produto = produto.split(" - "); // produto[0] = nome --- produto[1] = preço
    produto[1] = produto[1].replace(/\D/g, "") / 100;
    produto[1] = parseFloat(produto[1]);
    produto[1] = produto[1].toFixed(2);

    let qtd = document.getElementById("quantidade").value;
    if (qtd == "") qtd = 1;

    let subtotal = (parseFloat(qtd * produto[1]));
    subtotal = subtotal.toFixed(2);
    subtotal = parseFloat(subtotal);

    total = total + subtotal;
    total = total.toFixed(2);
    total = parseFloat(total);
    console.log("Total: " + total);

    let imprimirTotal = document.getElementById("valor-total");
    imprimirTotal.innerText = "R$" + total;

    console.log("Quantidade: " + qtd);   
    console.log("Produto: " + produto[0]);
    console.log("Preço: " + produto[1]);
    console.log("Subtotal: " + subtotal);

    let produtoAdd = document.getElementById("lista-produtos");
    produtoAdd.innerHTML = produtoAdd.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtd}x</span> ${produto[0]} <span class="texto-azul">R$${subtotal}</span>
        </section>`;

}