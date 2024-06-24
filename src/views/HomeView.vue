<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'
import { VaSpacer } from 'vuestic-ui/web-components'

const mask = ref('+91')
const store = useCounterStore()
</script>

<template>
    <div class="p-2">
        <h1>Home</h1>

        <!-- {{ store.doubleCount }} -->

        <div class="flex">
            <div class="flex flex-col md:col-6">
                <div class="flex justify-content-between">
                    <VaButton
                        icon="remove"
                        @click="store.decrement"
                    >
                    </VaButton>
                    <VaSpacer class="spacer" />
                    <VaChip outline>
                        {{ store.count }}
                    </VaChip>
                    <VaSpacer class="spacer" />
                    <VaButton
                        icon="add"
                        @click="store.increment"
                    >
                    </VaButton>
                </div>
            </div>
            <div class="flex flex-col md:col-6">
                <VaInput
                    v-model="mask"
                    v-mask="'+##-##########'"
                    type="tel"
                    name="mask"
                    maxlength="14"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.bi {
    cursor: pointer;
}
</style>
