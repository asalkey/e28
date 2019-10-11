new Vue({
    el: "#app",
    data: {
        choice:null,
        randomNum:null,
        didPlay:false,
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
}})
