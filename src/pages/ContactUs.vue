<template>
  <form @submit.prevent="postContact()">
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name"
            v-model="contact.name">
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com"
            v-model="contact.email">
    </div>
    <div class="mb-3">
        <label for="message" class="form-label"></label>
        <textarea class="form-control" id="message" rows="3"
            v-model="contact.message">{{ contact.message }}</textarea>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

</template>

<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'ContactUs',
    data() {
        return {
            store,
            contact: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        postContact() {
            console.log(this.contact);
            axios
                .post(this.store.baseUrl + this.store.endPoints.contacts, this.contact)
                .then((res) => {
                    console.log(res.data);
                })
        }
    }
}
</script>

<style lang="scss" scoped></style>