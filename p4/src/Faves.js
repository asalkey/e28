export default class Faves {

    constructor() {
        this.faves = localStorage.getItem("fave") ? JSON.parse(localStorage.getItem('fave')) : [];
    }
    
    getFaves() {
        return this.faves;
    }

    update() {
        localStorage.setItem("fave", JSON.stringify(this.faves));
    }
    
    create(postID) {

        if(this.faves.includes(postID)){
            alert("This post is already in your faves");
            return;
        }
            
        this.faves.push(postID);

        this.update();
    }

    remove(postID) {
        let fave = this.getFave(postID);
        
        let faveIndex = this.faves.indexOf(postID);

        if (fave) {
            this.faves.splice(faveIndex, 1);
            this.update();
        }
    }
    
    getFave(postID) {
        return this.faves.includes(postID) || null;
    }
}
