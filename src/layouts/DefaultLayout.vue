<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useBreakpoint } from 'vuestic-ui'

const breakpoints = useBreakpoint()

const isSidebarVisible = ref(breakpoints.smUp)

watchEffect(() => {
    isSidebarVisible.value = breakpoints.smUp
})

const menu = [
    { icon: 'home', title: 'Home' },
    { icon: 'phone', title: 'About' },
]
</script>

<template>
    <VaLayout
        :top="{ fixed: true, order: 1 }"
        :left="{
            fixed: true,
            absolute: breakpoints.smDown,
            order: 2,
            overlay: breakpoints.smDown && isSidebarVisible,
        }"
        @left-overlay-click="isSidebarVisible = false"
    >
        <template #top>
            <VaNavbar>
                <template #left>
                    <VaButton
                        preset="secondary"
                        :icon="isSidebarVisible ? 'menu_open' : 'menu'"
                        @click="isSidebarVisible = !isSidebarVisible"
                    />
                </template>
            </VaNavbar>
            <VaDivider style="margin: 0" />
        </template>

        <template #left>
            <VaSidebar v-model="isSidebarVisible">
                <VaSidebarItem
                    v-for="{ icon, title } in menu"
                    :key="icon"
                    :to="{ name: title }"
                >
                    <VaSidebarItemContent>
                        <VaIcon :name="icon" />
                        <VaSidebarItemTitle>
                            {{ title }}
                        </VaSidebarItemTitle>
                    </VaSidebarItemContent>
                </VaSidebarItem>
            </VaSidebar>
        </template>

        <template #content>
            <main>
                <article>
                    <router-view />
                </article>
            </main>
        </template>
    </VaLayout>
</template>
