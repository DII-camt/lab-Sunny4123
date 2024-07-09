document.getElementById('homeButton').addEventListener('click', function () {
    this.classList.remove('btn-secondary');
    this.classList.add('btn-danger');
    document.getElementById('loginButton').classList.remove('btn-danger');
    document.getElementById('loginButton').classList.add('btn-secondary');
});

document.getElementById('loginButton').addEventListener('click', function () {
    this.classList.remove('btn-secondary');
    this.classList.add('btn-danger');
    document.getElementById('homeButton').classList.remove('btn-danger');
    document.getElementById('homeButton').classList.add('btn-secondary');
});