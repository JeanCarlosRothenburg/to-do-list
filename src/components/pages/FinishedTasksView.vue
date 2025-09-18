<template>
    <article>
        <section id="section-finished-tasks">
            <template v-if="finishedTasks.length">
            <p class="title">Tarefas Concluídas</p>
            <ul>
                <li v-for="task in finishedTasks">
                    <div class="task task-finished">
                        <div class="task-title">
                            <p class="subtitle">{{ task.title }}</p>
                        </div>
                        <div class="task-description text">
                            <p>{{ task.description }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </template>
        <div class="empty" v-else>
                <p class="subtitle">Nenhuma tarefa concluída</p>
            </div>
        </section>
    </article>
</template>

<script setup>
import { computed } from 'vue'
import { getTasksByStatus } from '@/composables/useTasks.js'

const finishedTasks = computed(() => {
    return getTasksByStatus('finished')
})
</script>

<style scoped>
.task-finished .task-description {
    padding-bottom: 1rem;
}

.task-finished .task-title {
    background-color: var(--light-green);
    border-color: 2px solid var(--dark-green);
}
</style>