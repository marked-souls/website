document.addEventListener('DOMContentLoaded', ready, false);

function ready() {
    document.getElementById('tag-search').addEventListener('input', handleInput);
}

function handleInput(e) {
    const search = document.getElementById('tag-search').value;
    const nodes = document.querySelectorAll('div#tag-list a span');
    nodes.forEach(node => {
        if (node.innerText.includes(search)) {
            node.classList.remove('bg-light');
            node.classList.add('bg-primary');
        } else {
            node.classList.remove('bg-primary');
            node.classList.add('bg-light');
        }
    });
}