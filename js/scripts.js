/*
 * CP4 — Site pessoal / Portfólio
 * Funcionalidades:
 * 1. Alternância entre tema claro e escuro, com persistência em localStorage.
 * 2. Feedback visual após o envio válido do formulário de contato.
 */

"use strict";

const CHAVE_TEMA = "preferenciaTema";

function aplicarTema(tema) {
    const temaValido = tema === "escuro" ? "escuro" : "claro";
    document.body.dataset.tema = temaValido;

    const botaoTema = document.querySelector("#tema-toggle");

    if (botaoTema) {
        const temaEscuroAtivo = temaValido === "escuro";
        botaoTema.textContent = temaEscuroAtivo ? "Tema claro" : "Tema escuro";
        botaoTema.setAttribute(
            "aria-label",
            temaEscuroAtivo ? "Ativar tema claro" : "Ativar tema escuro"
        );
        botaoTema.setAttribute("aria-pressed", String(temaEscuroAtivo));
    }
}

function configurarTema() {
    let temaSalvo = "claro";

    try {
        temaSalvo = localStorage.getItem(CHAVE_TEMA) || "claro";
    } catch (erro) {
        console.warn("Não foi possível acessar o armazenamento local.", erro);
    }

    aplicarTema(temaSalvo);

    const botaoTema = document.querySelector("#tema-toggle");

    if (botaoTema) {
        botaoTema.addEventListener("click", () => {
            const novoTema =
                document.body.dataset.tema === "escuro" ? "claro" : "escuro";

            aplicarTema(novoTema);

            try {
                localStorage.setItem(CHAVE_TEMA, novoTema);
            } catch (erro) {
                console.warn("Não foi possível salvar a preferência de tema.", erro);
            }
        });
    }
}

function configurarFormulario() {
    const formulario = document.querySelector("form");
    const feedback = document.querySelector("#feedback-formulario");

    if (!formulario || !feedback) {
        return;
    }

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const nome = formulario.elements.nome.value.trim();

        // Limpa os campos primeiro. O evento "reset" oculta mensagens anteriores.
        formulario.reset();

        // Exibe a confirmação depois da limpeza para que ela permaneça visível.
        feedback.textContent = `Mensagem enviada com sucesso, ${nome}!`;
        feedback.classList.add("sucesso");
        feedback.hidden = false;
    });

    formulario.addEventListener("reset", () => {
        feedback.hidden = true;
        feedback.textContent = "";
        feedback.classList.remove("sucesso");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    configurarTema();
    configurarFormulario();
});
