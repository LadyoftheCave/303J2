<template>
    <article>
        <div class="blue_div">
            <img :src="sectionimage" alt="Button Image" @click="navigate">
        </div>
        <h3>{{ title }}</h3>
        <p>{{ korteText }}</p>
    </article>
</template>
<script>
import { useRouter } from 'vue-router'

export default {
    name: 'Container',
    props: {
        sectionimage : String,
        title: String,
        korteText: String,
        link: String
    },
    setup(props) {
        const router = useRouter()

        const navigate = () => {
            router.push(props.link)
        }

        return {
            navigate
        }
    }
}
</script>
<style scoped>

img {
    block-size: 70%;
    margin-top: 1rem;
    cursor: pointer;
}

h3 {
    text-transform: uppercase;
    color: #1e292f;
    margin-bottom: -1rem;
    font-size: .75rem;
}

p {
    font-weight: 250;
    font-size: .8rem;
}

button {
    border: 0;
    background-color: #1e292f;
    color: white;
    padding: .3rem .5rem .3rem .5rem;
    inline-size: 7rem;
    font-family: 'HvDTrial Brandon Grotesque', sans-serif;
    font-weight: 100;
    
}

article {
    /* box-shadow: 1px 5px 9px #c1c0c0; */
    /* border: 1px solid #1e292f; */
  width: 48%;
  height: 13rem;
  border-radius: 20px;
  /* padding: 1rem; */
  box-sizing: border-box;
  margin-top: 1rem;
  text-align: center;
  overflow: hidden;
  display:flex;
    flex-direction: column;
    align-items: center;
}

.blue_div {
    width: 6.5rem;
    height: 6.5rem;
    background-color: #00a9a2;
    /* height: 9rem; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-image: url('../assets/city_blue.jpg'); */
    background-position:center;
    background-size:cover;
    border-radius: 50%;
}

</style>