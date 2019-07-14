<template>
    <div>
        <p>{{content}}</p>
    </div>
</template>

<script>
export default {
    props:{
        content:{
            type:String,
            required:true
        }
    }
}
</script>
