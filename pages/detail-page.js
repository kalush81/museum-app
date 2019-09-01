    
const dataForm = {
    name: document.getElementById('name'),
    comment: document.getElementById('msg'),
    submitt: document.querySelector('button'),
    createEl: function(name, msg, whereToAdd) {
        const section = document.createElement('section');
        const h1 = document.createElement('h1');
        h1.innerText = `${name}: said`;
        const p =  document.createElement('p');
        p.innerText = `${msg}`;
        section.appendChild(h1);
        section.appendChild(p);
        console.log(whereToAdd);
        document.body.querySelector(whereToAdd).appendChild(section);
    }
};

const nameAndMsg = [];

    dataForm.submitt.onclick = function(e) {
        e.preventDefault();

        const name = dataForm.name.value;
        dataForm.name.value = '';

        const comment = dataForm.comment.value;
        dataForm.comment.value = '';

        nameAndMsg.push({'name': name, 'msg': comment});

        if (name !== '' && comment !== '') {
            dataForm.createEl(name, comment, '#comments');
        }

        
        return nameAndMsg;
    }

