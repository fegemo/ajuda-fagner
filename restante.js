const swal = {
    async fire(opcoes) {
        opcoes = Object.keys(opcoes).map(prop => `${prop}: ${opcoes[prop]}`).join('\n  - ')
        alert(`swal.fire invocado com parâmetros:\n  - ${opcoes}`)
    } 
}

async function getEnderecoId(campo_) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                logradouro: 'rua laudelino',
                bairro: 'capão raso',
                cidade: 'curitiba',
                estado: 'PR',
                tipo: 'residencial',
                cep: '30303-555'
            })
        }, 100)
    })
}