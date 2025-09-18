<template>
    <section id="section-home">
        <p class="title">Visão Geral</p>
        <article id="container-cards">
            <div id="card-finished" class="card">
                <div class="card-icon">
                    <span class="material-icons">check</span>
                </div>
                <div class="card-content">
                    <p class="card-title">Concluídas</p>
                    <p class="card-description">{{ totalFinished }} tarefas concluídas</p>
                    <button>Ver Mais</button>
                </div>
            </div>
            <div id="card-pending" class="card">
                <div class="card-icon">
                    <span class="material-icons">access_time</span>
                </div>
                <div class="card-content">
                    <p class="card-title">Pendentes</p>
                    <p class="card-description">{{ totalPending }} tarefas pendentes</p>
                    <button>Ver Mais</button>
                </div>
            </div>
            <div id="card-canceled" class="card">
                <div class="card-icon">
                    <span class="material-icons">close</span>
                </div>
                <div class="card-content">
                    <p class="card-title">Canceladas</p>
                    <p class="card-description">{{ totalCanceled }} tarefas canceladas</p>
                    <button>Ver Mais</button>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { countTasksByStatus } from '@/composables/useTasks.js'

const totalPending = computed(() => {
    return countTasksByStatus('pending')
})
const totalFinished = computed(() => {
    return countTasksByStatus('finished')
})
const totalCanceled = computed(() => {
    return countTasksByStatus('canceled')
})
</script>

<style scoped>
#section-home .title {
    margin-bottom: 2rem;
}

/* Fim dos estilos da tab home */

/* Início dos estilos do card */
#container-cards {
    display: flex;
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 3rem;
}

.card {
    display: flex;
    width: 500px;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: -3px -1px 19px -4px rgba(0, 0, 0, 0.33);
    -webkit-box-shadow: -3px -1px 19px -4px rgba(0, 0, 0, 0.33);
    -moz-box-shadow: -3px -1px 19px -4px rgba(0, 0, 0, 0.33);
}

.card-icon {
    width: 40%;
    align-content: center;
    text-align: center;
}

.card-content {
    width: 100%;
    float: left;
    padding: 1rem 1.2rem;
}

.card-title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1rem;
}

.card-description {
    font-size: 18px;
    margin-bottom: 1.5rem;
}

.card-content button {
    float: right;
}

.card .card-icon span.material-icons {
    font-size: 48px;
}

#card-finished .card-icon {
    background-color: var(--light-green);
}

#card-finished .card-icon span.material-icons {
    color: var(--dark-green);
}

#card-finished button {
    background-color: transparent;
    color: var(--dark-green);
    border: 1px solid var(--dark-green);
}

#card-finished button:hover {
    background-color: var(--dark-green);
    color: #ffff;
}

#card-pending .card-icon {
    background-color: var(--light-yellow);
}

#card-pending .card-icon span.material-icons {
    color: var(--dark-yellow);
}

#card-pending button {
    background-color: transparent;
    color: var(--dark-yellow);
    border: 1px solid var(--dark-yellow);
}

#card-pending button:hover {
    background-color: var(--light-yellow);
    border-color: var(--light-yellow);
    color: #000;
}

#card-canceled .card-icon {
    background-color: var(--light-red);
}

#card-canceled .card-icon span.material-icons {
    color: var(--dark-red);
}

#card-canceled button {
    background-color: transparent;
    color: var(--dark-red);
    border: 1px solid var(--dark-red);
}

#card-canceled button:hover {
    background-color: var(--light-red);
    border-color: var(--light-red);
    color: #fff;
}
</style>