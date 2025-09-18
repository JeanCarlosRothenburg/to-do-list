<template>
    <article>
        <section id="section-tarefas-pendentes">
            <template v-if="pendingTasks.length">
            <p class="title">Tarefas Pendentes</p>
            <ul>
                <li v-for="task in pendingTasks" :key="task.title">
                    <div class="task">
                        <div class="task-title">
                            <p class="subtitle">{{ task.title }}</p>
                        </div>
                        <div class="task-description text">
                            <p>{{ task.description }}</p>
                        </div>
                        <div class="task-actions">
                            <button @click="finishTask(task)" class="task-button-finish">Concluir</button>
                            <button @click="cancelTask(task)" class="task-button-cancel">Cancelar</button>
                        </div>
                    </div>
                </li>
            </ul>
            </template>
            <div class="empty" v-else>
                <p class="subtitle">Nenhuma tarefa pendente</p>
            </div>
        </section>
    </article>
</template>

<script setup>
import { computed } from 'vue'
import { getTasksByStatus, updateTaskStatus } from '@/composables/useTasks.js'

const pendingTasks = computed(() => {
    return getTasksByStatus('pending')
})

function finishTask(task) {
    updateTaskStatus(task, 'finished')
}

function cancelTask(task) {
    updateTaskStatus(task, 'canceled')
}
</script>

<style scoped>
.task-actions {
    float: right;
}

.task-actions .task-button-finish,
.task-actions .task-button-cancel {
    color: #fff;
}

.task-actions .task-button-finish {
    background-color: transparent;
    color: var(--dark-green);
    border: 1px solid var(--dark-green);
}

.task-actions .task-button-finish:hover {
    background-color: var(--dark-green);
    color: #ffff;
}

.task-actions .task-button-cancel {
    background-color: transparent;
    color: var(--dark-red);
    border: 1px solid var(--dark-red);
}

.task-actions .task-button-cancel:hover {
    background-color: var(--light-red);
    border-color: var(--light-red);
    color: #fff;
}
</style>