<template>
    <nav>
        <RouterLink to="/" active-class="selected">
            <button>
                <span class="material-icons">home</span>
            </button>
        </RouterLink>
        <RouterLink to="/add" active-class="selected">
            <button>
                <span class="material-icons">add</span>
            </button>
        </RouterLink>
        <RouterLink to="/pending" active-class="selected">
            <button>
                <span class="material-icons">access_time</span>
            </button>
        </RouterLink>
        <RouterLink to="/finished" active-class="selected">
            <button>
                <span class="material-icons">check</span>
            </button>
        </RouterLink>
        <RouterLink to="/canceled" active-class="selected">
            <button>
                <span class="material-icons">close</span>
            </button>
        </RouterLink>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

let isSelected = ref(false)
</script>

<style scoped>
    nav {
        width: 7rem;
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
        height: calc(100vh - 2rem);
        background-color: var(--color-primary);
        border-radius: 0 1rem 1rem 0;
        align-items: center;
        box-shadow: 10px 1px 29px -18px rgba(0, 0, 0, 0.57);
        -webkit-box-shadow: 10px 1px 29px -18px rgba(0, 0, 0, 0.57);
        -moz-box-shadow: 10px 1px 29px -18px rgba(0, 0, 0, 0.57);
    }

    button {
        background-color: none;
        border-radius: 0.5rem;
        border: none;
        width: fit-content;
        padding: 0.8rem 1.2rem;
        font-size: medium;
        transition: transform 0.1s ease;
    }

    .selected button {
        background-color: var(--color-secundary);
    }

    button:hover,
    button:active {
        background-color: var(--color-secundary);
        transform: scale(0.9);
    }

    button {
        background-color: transparent;
    }

    button span.material-icons {
        font-size: 26px;
        color: var(--suavized-white);
    }

    button.active span.material-icons {
        font-weight: bolder;
    }
</style>