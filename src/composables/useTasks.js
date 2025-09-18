import { ref, watch } from 'vue'

const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
const tasks = ref(storedTasks)

// Sincroniza automaticamente com o localStorage
watch(tasks, (newTasks) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks))
}, { deep: true })

export function addTask(newTask) {
    tasks.value.push(newTask)
}

export function getTasksByStatus(status) {
    return tasks.value.filter(task => task.status === status)
}

export function countTasksByStatus(status) {
    return getTasksByStatus(status).length
}

export function updateTaskStatus(modifiedTask, updatedStatus) {
    const task = tasks.value.find(task => task.title === modifiedTask.title)
    if (task) {
        task.status = updatedStatus
    }
}