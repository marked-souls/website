document.addEventListener('DOMContentLoaded', ready, false);

function ready() {
    document.getElementById('blog-search').addEventListener('input', handleInput);
}

function handleInput(e) {
    const search = document.getElementById('blog-search').value.toLowerCase();
    const nodes = document.querySelectorAll('div#blog-list div.col');
    nodes.forEach(node => {
        const titleNode = node.querySelector('h5.card-title');
        const tagNodes = node.querySelectorAll('div.card-body a');
        if (isInTitle(titleNode, search) || isInTags(tagNodes, search)) {
            node.classList.remove('visually-hidden');
        } else {
            node.classList.add('visually-hidden');
        }
    });
}

function isInTitle(node, search) {
    return isInNode(node, search);
}

function isInTags(nodes, search) {
    return Array.from(nodes).find(node => isInNode(node, search));
}

function isInNode(node, search) {
    return node.innerText.toLowerCase().includes(search);
}

