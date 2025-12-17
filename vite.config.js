import { defineConfig } from 'vite'

export default defineConfig({
    // Setting base to './' allows the deploy to work in a subdirectory
    // (like username.github.io/repo-name/) or at the root.
    base: './'
})
