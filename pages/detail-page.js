    
const dataForm = {
    name: document.getElementById('name'),
    comment: document.getElementById('msg'),
    submitt: document.querySelector('button')
};

const nameAndMsg = [];

    dataForm.submitt.onclick = function(e) {
        e.preventDefault();
        const name = dataForm.name.value;
        dataForm.name.value = '';

        const comment = dataForm.comment.value;
        dataForm.comment.value = '';

        //console.log(`${name}, ${comment}`);

        nameAndMsg.push({'name': name, 'msg': comment});
        
        return nameAndMsg;
    }

