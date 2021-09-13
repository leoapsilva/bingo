class CartelaClass {

    // Exercício 2: 
    // Faça a geração da cartela no momento que o 
    // objeto é construido.
    // Após criar a função gerarCartela, faça a chamada dentro
    // do constructor.
    // Vá no navegador, entre no DevTools (F12) e veja o que acontece.
    // Ao concluir, vá para o exercício 3 (cartela.html).

    constructor() {
        this.marcados = new Set()
    }

    toggleNumero(numero) {
        if (this.marcados.has(numero)) {
            this.marcados.delete(numero)            
        } else {
            this.marcados.add(numero)
        }
        console.log(this.marcados)
    }

    toggle(coluna, linha) {
        var casa = coluna + linha
        console.log(" casa " + casa)
        var element = document.getElementById(casa)
        element.classList.toggle("marcado")
        var numero = element.innerHTML.trim()
        console.log("numero = " + numero)
        this.toggleNumero(numero)
    }

    gerarNumeroIntervalo(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    // Exercício 1: 
    // Gere toda a cartela e 
    // apresente os números nas casas correspondentes.
    // Ao concluir, vá para o exercício 2 no método constructor logo acima.
    gerarCartela(linha) {

        // Dicas: 
        // - use um for para gerar de todas as linhas
        // - fique a vontade para alterar o que quiser nesta função

        // B - de 1 à 15
        var b = this.gerarNumeroIntervalo(1, 15)
        console.log("b = " + b)
        var element = document.getElementById("b"+linha)
        element.innerHTML = b

        // I - de 16 à 30

        // N - de 31 à 45

        // G - de 46 à 60

        // O - de 61 à 75

    }

    // Exercício 4:
    // Gere um número aleatório para ser apresentado na bola sorteada.
    // Lembre-se de gerar aleatoriamente o número e colocar a letra da coluna
    // correspondente conforme a indicação já conhecida:
    // B - de 1 à 15
    // I - de 16 à 30
    // N - de 31 à 45
    // G - de 46 à 60
    // O - de 61 à 75
    //
    // Utilize a experiência adquirida nos métodos gerarCartela e gerarNumeroIntervalo
    // para programar o método sortearNumero.
    // No cartela.html há um botão para chamar o método e verificar se o número e coluna
    // sorteados aparecem na bola sorteada.
    // Ao concluir vá para o exercício 5 no cartela.html na <div class="sorteados">.
    sortearNumero() {

    }

    confereCartela(numMarcadosCartela, numSorteados) {
        let _intersection = new Set()
        for (let elem of numSorteados) {
            if (numMarcadosCartela.has(elem)) {
                _intersection.add(elem)
            }
        }
        return _intersection
    }
}
