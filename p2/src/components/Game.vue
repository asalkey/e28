<template>
    <div>
        <form @submit.prevent="guessGame" >
            <label>Your guess:</label>
            <input type="number" name="choice" min="1" max="10">
            <input type="submit" name="submit" />
        </form>
        <template id="result" v-if="didPlay">
            <p v-if="choice == randomNum"> You win!</p>
            <p v-else> Guessed wrong, I was thinking {{randomNum}}</p>
            <button @click="resetGame">Play Again</button>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Game',
    data: function() {
        return{
            choice:null,
            randomNum:null,
            didPlay:false,
        }
    },
    methods: {
        guessGame : function(e){
            //get a random number
            this.randomNum = Math.floor(Math.random() * 10) + 1;
            //get the user's number
            this.choice = e.target[0].value;
            //check if user is playing incorrectly
            if(this.choice < 1 || this.choice > 10 || this.didPlay == true ){
                alert("You can't do that!");
                return;
            }
            //disable inputs and set didPlay to tru
            this.didPlay = true;
            e.target[0].disabled = true;
            e.target[1].disabled = true;
        },
        resetGame : function(){
            //reset game
            this.randomNum = null;
            this.choice = null;
            this.didPlay = null;
            document.forms[0].elements[0].value = '';
            document.forms[0].elements[0].disabled = false;
            document.forms[0].elements[1].disabled = false;
        }
    }
}

</script>

<style>
#result{
    display:none;
    background: blueviolet;
    color: white;
    padding: 10px;
    margin-top: 30px;
    border: thin dotted darkkhaki;
}

</style>
