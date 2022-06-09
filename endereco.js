async function setDadosEnderecoUpdate() {

    // let campo_ = sessionStorage.getItem('idEnderecoParaUpdate');
    // var valorBsuca = null;
    // var setDados = null;
    // if (campo_ === null || campo_ === "") {

    //     await swal.fire({
    //         icon: 'error',
    //         title: 'UPDATE ENDEREÇO',
    //         text: 'TABELA NÃO INSTANCIADA\n OU NÃO FOI SELECIONADO NENHUMA LINHA DA TABELA\nFAVOR VERIFICAR!!!',
    //         showConfirmButton: true,
    //         confirmButtonText: 'Confirma',
    //         confirmButtonColor: "#57BC90"
    //     });
    //     return;

    // } else {

    //     sessionStorage.removeItem('idEnderecoParaUpdate');
    //     valorBsuca = await getEnderecoId(campo_);

    // }
    valorBsuca = await getEnderecoId();

    if (valorBsuca != "undefined" && valorBsuca != null && valorBsuca != "") {

        const iframe = document.querySelector('iframe[name="frameenderecoconteudo"]');
        iframe.src = 'Tela02_EnderecoUpdate.html';
        // const pagina = window.open('Tela02_EnderecoUpdate.html', 'frameenderecoconteudo');

        // troquei esta linha pela próxima (para colocar o evento DOMContentLoaded na nova página, e não nesta)
        // var e = document.body;
        iframe.addEventListener('load', (e) => {
            const pagina = e.currentTarget.contentDocument

            const selecaotipo_ = pagina.getElementById('selecaotipo_')
            const selecaoestado_ = pagina.getElementById('selecaoestado_')
            const inputcepe_ = pagina.getElementById('input_cepe_')
            const inputlogradouro_ = pagina.getElementById('input_logradouro_')
            const inputbairro_ = pagina.getElementById('input_bairro_')
            const inputcidade_ = pagina.getElementById('input_cidade_')

            inputcepe_.value = valorBsuca.cep;
            for (i = 0; i < selecaotipo_.length; i++) {

                if (selecaotipo_.options[i].text == valorBsuca.tipo) {
                    selecaotipo_.selectedIndex = i;
                    break;
                }
            };
            inputlogradouro_.value = valorBsuca.logradouro;
            inputbairro_.value = valorBsuca.bairro;
            inputcidade_.value = valorBsuca.cidade;
            for (i = 0; i < selecaotipo_.length; i++) {

                if (selecaoestado_.options[i].text == valorBsuca.estado) {
                    selecaoestado_.selectedIndex = i;
                    break;
                }
            };

        });
        return null;
    }
    return null;
}
