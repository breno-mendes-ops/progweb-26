function calcular(){
    let qtadeArroz = Number (document.getElementById("qtadeArroz").value)
    let qtadeFeijao = Number (document.getElementById("qtadeFeijao").value)
    let qtadeOleo = Number (document.getElementById("qtadeOleo").value)
    let qtadeMacarrao = Number (document.getElementById("qtadeMacarrao").value)
    let pontos = (qtadeArroz * 10) + (qtadeFeijao * 8) + (qtadeOleo * 4) + (qtadeMacarrao * 2) 

    let cor = document.getElementById("cor").value
    let metaprova1
    if (cor == "Amarela"){
        metaprova1 = 54
    }
    else if (cor == "Cinza"){
        metaprova1 = 51
    }
    else if (cor == "Laranja"){
        metaprova1 = 21
    }
    else if (cor == "Marrom"){
        metaprova1 = 88
    }
    else if (cor == "Preta"){
        metaprova1 = 60
    }
    else if (cor == "Rosa"){
        metaprova1 = 44
    }
    else if (cor == "Roxa"){
        metaprova1 = 42
    }
    else if (cor == "Verde"){
        metaprova1 = 61
    }
    else if (cor == "Vermelho"){
        metaprova1 = 32
    }
    let metasup
    let metaleite = metaprova1

    if (metaprova1 % 2 - 0){
        metasup = metaprova1 / 2
    }
    else {
        metasup = (metaprova1 / 2) + 1
    }
    let metasangue = metasup
    let qtadekit = Number (document.getElementById("qtadekits").value)
    if (qtadekit >= metaprova1) {
        pontos = pontos + 5000
        if (qtadekit > metaprova1){
            pontos = pontos + (qtadekit - metaprova1) * (5000 / metaprova1)
        }
    }
    else {
        pontos = pontos + (qtadekit * (5000 / metaprova1))
    }
    let qtadelatas = Number(document.getElementById("qtadelatas").value)
    if (qtadelatas >= metasup) {
        pontos = pontos + 5000
        if (qtadelatas > metasup){
            pontos = pontos + (qtadelatas - metasup) * (5000 / metasup)
        }    
    }
    else {
        pontos = pontos + (qtadelatas *(5000 / metasup))
    }
    let qtadecaixas = Number(document.getElementById("qtadecaixas").value)
    if (qtadecaixas >= metaleite) {
        pontos = pontos + 5000
        if (qtadecaixas > metaleite){
            pontos = pontos + (qtadecaixas - metaleite) * (5000 / metaleite)
        }    
    }
    else {
        pontos = pontos + (qtadecaixas *(5000 / metaleite))
    }
    let qtadedoacoes = Number(document.getElementById("qtadedoacoes").value)
    if (qtadedoacoes >= metasangue) {
        pontos = pontos + 5000
        if (qtadedoacoes > metasangue){
            pontos = pontos + (qtadedoacoes - metasangue) * (5000 / metasangue)
        }    
    }
    else {
        pontos = pontos + (qtadedoacoes *(5000 / metasangue))
    }
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos"
}