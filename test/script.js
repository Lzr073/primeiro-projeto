document.getElementById('repoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const repoName = document.getElementById('repoName').value;
    const repoUrl = document.getElementById('repoUrl').value;
    
    // Aqui você poderia implementar a lógica para enviar os dados para um servidor

    document.getElementById('message').innerText = `Repositório "${repoName}" adicionado com sucesso!`;
    
    // Limpar o formulário
    event.target.reset();
});
