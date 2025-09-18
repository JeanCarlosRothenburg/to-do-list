<template>
    <article>
        <section id="section-canceled-tasks">
            <template v-if="canceledTasks.length">
            <p class="title">Tarefas Canceladas</p>
            <ul>
                <li v-for="task in canceledTasks">
                    <div class="task task-canceled">
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
                <p class="subtitle">Nenhuma tarefa cancelada</p>
            </div>
        </section>
    </article>
</template>

<script setup>
import { computed } from 'vue'
import { getTasksByStatus } from '@/composables/useTasks.js'

const canceledTasks = computed(() => {
    return getTasksByStatus('canceled')
})
</script>

<style scoped>
.task-canceled .task-description {
    padding-bottom: 1rem;
}

.task-canceled .task-title {
    background-color: var(--lighter-red);
    border-color: 2px solid var(--dark-red);
}
</style>