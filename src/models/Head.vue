<script>
import {useHead} from '@vueuse/head'


export default{

    name: 'HeadComponent',
    props: {
        title: {
            type: String,
            required: false,
            default: 'ISVE-Head-Title'
        },
        description: {
            type: String,
            required: false,
            defult: 'ISVE är en idiell förening.'
        },
<<<<<<< HEAD
=======
        link: {
            type: String,
            required: false,
            default: 'https://8080-idx-ingenskavaensamgit-1727586663556.cluster-p6qcyjpiljdwusmrjxdspyb5m2.cloudworkstations.dev/print.svg'
        }
>>>>>>> 90f73656804e49d4b8bd4d7c8f06d861b6fe9a1b

    },
    setup(props) {
        useHead({
            title: props.title,
            link: [
<<<<<<< HEAD
                {
                    rel: 'icon',
                    href: require("@/assets/images/ISVE-Pictures/print_transparent.svg")
                }
            ] ,
=======
               props.link
            ],
>>>>>>> 90f73656804e49d4b8bd4d7c8f06d861b6fe9a1b
            meta: [
                {
                    name: 'description',
                    content: props.description
                },
                {
                    name: 'viewport',
                    content: 'width:=device-width, initial-scale=1'
                }
            ]
        })
    }
};
</script>

<template



</template>

<style scoped>

</style>


