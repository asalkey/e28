<template>
    <div id="post-page" v-if='post'>
        <h1 data-test='post-title' class='post-title'>{{post.post_title}}</h1>
        <h1 data-test='post-author' class='post-author'>{{post.post_author}}</h1>
        <span data-test='post-date' class='post-date'>{{post.post_date}}</span>
        <div class='post-content'>{{post.post_content}}</div>
        <hr>
        <transition name='fade'>
            <div data-test='faves-confirmation' class='alert alert-success' v-if='favesAdded'>You faved this!</div>
        </transition>
        <button data-test='faves-button' class='btn btn-primary' @click='fave(post.id)'> add to faves </button>
        <hr>
        <div class='ratings' v-if='!post.post_rating'>
            <transition name='fade'>
                <div data-test='rating-confirmation' class='alert alert-success' v-if='ratingAdded'>Rating added!</div>
            </transition>
            <div id="ratings-form">
                <h5>Rate this post: </h5>
                <div class="alert alert-danger" v-if='formHasErrors'>Correct any errors before submitting</div>
                <form @submit.prevent="handleSubmit(post)">
                    <div class="form-group">
                        <label> Name: </label>
                        <input data-test='rating-author' type="text" :class='{ "form-input-error": $v.rating.author.$error }' class="form-control" placeholder="Enter your name" v-model="$v.rating.author.$model" />
                    <div v-if='$v.rating.author.$error'>
                            <div class='alert alert-warning' v-if='!$v.rating.author.required'>Your name is required.</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Feedback: </label>
                        <textarea data-test='rating-comment' class="form-control"  v-model="$v.rating.comment.$model"></textarea>
                        <div v-if='$v.rating.comment.$error'>
                            <div class='alert alert-warning' v-if='!$v.rating.comment.minLength'>Feedback needs to be atleast 30 characters</div>
                            <div class='alert alert-warning' v-if='!$v.rating.comment.required'>Please enter feedback</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Score:</label>
                        <input data-test='rating-score' type="number" min="0" max="10" class="form-control"  v-model="$v.rating.score.$model"/>
                        <div v-if='$v.rating.score.$error'>
                            <div class='alert alert-warning' v-if='!$v.rating.score.required'>Enter a score</div>
                            <div class='alert alert-warning' v-if='!$v.rating.score.between'>Enter a score between 0-10</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input data-test='rating-button' type="submit" value="Submit review" class="btn btn-info"/>
                    </div>
                </form>
            </div>
        </div>
        <router-link :to='{ name:"posts"}'> Back to all posts</router-link>
    </div>
</template>

<script>
import * as app from './../../app.js';
import { required, between,minLength } from 'vuelidate/lib/validators';

export default {
    name: 'PostPage',
    props: ['id'],
    data: function(){
        return {
            rating: {
                author: '',
                score: '',
                comment:'',
            },
            formHasErrors: false,
            ratingAdded: false,
            favesAdded: false,
            hideForm:false,
        }
            
    },
    validations: {
        rating: {
            author: {
                required,
            },
            score: {
                required,
                between: between(0, 10)
            },
            comment: {
                required,
                minLength: minLength(30)
            }
        }
    },
    watch: {
        '$v.$anyError': function() {
            this.formHasErrors = this.$v.$anyError;
        }
    },
    computed: {
        post: function() {
            return this.$store.getters.getPostByID(this.id);
        }
    },
    methods: {
        fave: function (id) {
            let faves = new app.Faves();
            faves.create(id);
            
            this.favesAdded = true;
                
            setTimeout(() => (this.favesAdded = false), 2000)
        },
        handleSubmit: function(post){
            this.$v.$touch();
            
            let correctID = post.id - 1;
            let ratings = {"post_rating": this.rating};
            let newPost = {...post,...ratings}
            
            if (!this.$v.$invalid) {
                app.axios.put(app.config.api + 'posts/' + correctID + '.json', newPost) .then(response => {
                        this.$store.commit('updatePost', this.rating );
                });
                
                this.formHasErrors = false;
                this.ratingAdded = true;
                
                document.getElementById("ratings-form").innerHTML = ""; 
                
                setTimeout(() => (this.ratingAdded = false), 2000)
            }else{
                this.formHasErrors = this.$v.$anyError;
            }
        }
  }
};
</script>

<style scoped>
</style>
