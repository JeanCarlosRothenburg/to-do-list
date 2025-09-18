<template>
    <article>
        <section id="section-nova-tarefa">
            <fieldset>
                <legend class="title">Nova Tarefa</legend>
                <form>
                    <div class="form-group">
                        <input type="text"
                               id="ftitle" 
                               name="ftitle" 
                               placeholder=""
                               required
                               v-model="newTask.title">
                        <label for="ftitle">Título</label>
                    </div>
                    <div class="form-group">
                        <textarea name="fdescription"
                                  id="fdescription"
                                  placeholder=""
                                  rows="6"
                                  required
                                  v-model="newTask.description"></textarea>
                        <label for="fdescription">Descrição</label>
                    </div>
                    <button type="button" @click="addNewTask()">Confirmar</button>
                </form>
            </fieldset>
        </section>
    </article>
</template>

<script setup>
import { reactive } from 'vue'
import { addTask } from '@/composables/useTasks.js'

const newTask = reactive({
    title: '',
    description: ''
})

function addNewTask() {
    const task = {...newTask, status : 'pending' }
    addTask(task)
    newTask.title = ''
    newTask.description = ''
}
</script>

<style scoped>
fieldset {
    border: none;
}

fieldset button {
    background-color: var(--color-primary);
    color: #fff;
}

form {
    width: 50%;
}

.form-group {
    position: relative;
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem 0.75rem;
    font-size: 1rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    background: #fff;
    box-sizing: border-box;
    resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-group input+label {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
    color: #6c757d;
    pointer-events: none;
    transition: 0.2s ease all;
    background-color: #fff;
    padding: 0 0.25rem;
}

.form-group textarea+label {
    top: 1.3rem;
    left: 0.75rem;
    transform: none;
    color: #6c757d;
    pointer-events: none;
    transition: 0.2s ease all;
    background-color: #fff;
    padding: 0 0.25rem;
    position: absolute;
}

.form-group input:focus+label,
.form-group input:not(:placeholder-shown)+label,
.form-group textarea:focus+label,
.form-group textarea:not(:placeholder-shown)+label {
    top: -0.5rem;
    font-size: 0.75rem;
    color: #0d6efd;
    transform: none;
}
</style>