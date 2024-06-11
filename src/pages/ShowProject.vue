<template>
ciao {{ slug }}

</template>

<script>
import axios from 'axios';

export default {
    name: 'ShowProject',
    data() {
        return {
        
        slug: this.$route.params.slug,

        }
        
    }
    
}

</script>

<style lang="scss" scoped>  
</style>