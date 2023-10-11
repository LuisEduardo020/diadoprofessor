document.addEventListener("DOMContentLoaded", function () {
    var mensagem = document.getElementById("mensagem");
    var mostrarMensagemBtn = document.getElementById("mostrarMensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.innerHTML = "Querido professor, sua dedicação e paixão pela educação são verdadeiramente admiráveis, " +
        "Por isso, queremos desejar muita felicidade e reconhecimento! Feliz Dia do Professor, " +
    
    });
});

