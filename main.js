const taskForm = document.getElementById('taskForm');
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        taskForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita o recarregamento da página

            const taskText = taskInput.value.trim();
            if (taskText) {
                const listItem = document.createElement('li');
                listItem.textContent = taskText;

                // Adicione o evento de clique para aplicar a classe 'checked'
                listItem.addEventListener('click', function () {
                    listItem.classList.toggle('checked');
                });

                taskList.appendChild(listItem);
                taskInput.value = ''; // Limpa o campo de entrada
            }
        });