<template>
    <div class="leftCategory">    
        <div v-for="list in categorys" v-bind:key="list.gender">
            {{list.name}}
        </div>      
    </div>
</template>

<script>
export default {
    props: [
        'categorys'
    ]
}
</script>

<style scoped>

.isclick{
    color: red;
}

</style>
