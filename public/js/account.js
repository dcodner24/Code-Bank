const checking = async () => {
    document.location.replace('/checking');
};

const savings = async () => {
    document.location.replace('/savings');
};


document.querySelector('#checking').addEventListener('click', checking);
document.querySelector('#savings').addEventListener('click', savings);
