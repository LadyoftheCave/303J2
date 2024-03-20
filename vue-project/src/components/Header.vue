<template>
<header>

        <div class="black--menu">                
            
            <nav>
                <div class="imgcontainer">            
                    <RouterLink to="/"><img alt="Vue logo" src="../assets/real_estate_care.svg" id="real_estate"/></RouterLink>
                </div>

                <div class="linkcontainer">
                <RouterLink to="/"><img alt="Vue logo" src="../assets/bell.svg" id="settings"/></RouterLink>
                    <RouterLink to="/settings"><img alt="Vue logo" src="../assets/settings.svg" id="settingsTwo"/></RouterLink></div>
      </nav>

    
    </div>
    <img id="header_photo" src="../assets/huis.png" alt="">

    </header>

</template>
<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
div.blue--menu {
background-color: #00a9a2;
  height: 2rem;
  width: 100%;
}
div.black--menu {
    background-color: #1e292f;
    height: 4rem;
    display: flex;
    justify-content: flex-start;
    inline-size: 100%;
    background-position: center;
}

header {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    inline-size: 100%;
    padding-right: 1rem;
}

#settings, #settingsTwo {
    inline-size: 1.2rem;
    margin-inline-start: .3rem;
    position: relative;
    z-index: 10;

}

.linkcontainer {
    margin-block-start: 0.6rem;
}

img#header_photo {
    margin-top: -3rem;
    position: relative;
}

header::after {
    content: "";
    background-image: url('../assets/streep_groen.svg');
    background-size: 100% 100%;
    display: inline-block;
    width: 445px;
    height: 119px;
    position: absolute;
    bottom: -1rem;
    left: -2rem;
    z-index: 1;

}


</style>