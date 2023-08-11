<template>
    <div>
        <SidebarPage></SidebarPage>
        <div class="main-content">
            <TopNavPage></TopNavPage>

            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">

                        <!-- Header -->
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <!-- Pretitle -->
                                        <h6 class="header-pretitle">Categorias</h6>
                                        <!-- Title -->
                                        <h1 class="header-title">Categorias</h1>
                                    </div>
                                </div> <!-- / .row -->

                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-12">
                                <button v-if="!section_form" class="btn btn-dark btn-5m" v-on:click="section_form = true">Nueva categoria</button>
                                <button v-if="section_form" class="btn btn-dark btn-5m" v-on:click="section_form = false">Agregar</button>
                            </div>
                            <div class="col-12 mt-3" v-if="section_form">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="nueva categoria" v-model="new_category">
                                    <button class="btn btn-dark" v-on:click="create_category()">Nueva categoria</button>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <ul class="list-group list-group-flush list my-n3">
                                    <li class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto">

                                                <!-- Avatar -->
                                                <a href="profile-posts.html" class="avatar">
                                                    <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-5.jpg"
                                                        alt="..." class="avatar-img rounded-circle">
                                                </a>

                                            </div>
                                            <div class="col ms-n2">

                                                <!-- Title -->
                                                <h4 class="mb-1 name">
                                                    <a href="profile-posts.html">Miyah Myles</a>
                                                </h4>

                                                <!-- Time -->
                                                <p class="small mb-0">
                                                    <span class="text-success">●</span> Online
                                                </p>

                                            </div>
                                            <div class="col-auto">

                                                <!-- Button -->
                                                <a href="#!" class="btn btn-sm btn-danger text-white"
                                                    style="margin-right: 1rem;">
                                                    Quitar
                                                </a>
                                                <a href="#!" class="btn btn-sm btn-dark text-white">
                                                    Subcategoria
                                                </a>

                                            </div>
                                        </div>
                                        <!-- / .row -->
                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <ul class="list-group mt-4">

                                                    <li class="list-group-item d-flex justify-content-between align-items-center"
                                                        style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                        Morbi leo risus
                                                        <a href="#!" class="btn btn-sm btn-danger text-white">
                                                            Quitar
                                                        </a>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center"
                                                        style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                        Morbi leo risus
                                                        <a href="#!" class="btn btn-sm btn-danger text-white">
                                                            Quitar
                                                        </a>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center"
                                                        style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                        Morbi leo risus
                                                        <a href="#!" class="btn btn-sm btn-danger text-white">
                                                            Quitar
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto">

                                                <!-- Avatar -->
                                                <a href="profile-posts.html" class="avatar">
                                                    <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-5.jpg"
                                                        alt="..." class="avatar-img rounded-circle">
                                                </a>

                                            </div>
                                            <div class="col ms-n2">

                                                <!-- Title -->
                                                <h4 class="mb-1 name">
                                                    <a href="profile-posts.html">Ryu Duke</a>
                                                </h4>

                                                <!-- Time -->
                                                <p class="small mb-0">
                                                    <span class="text-success">●</span> Online
                                                </p>

                                            </div>
                                            <div class="col-auto">

                                                <a href="#!" class="btn btn-sm btn-danger text-white"
                                                    style="margin-right: 1rem;">
                                                    Quitar
                                                </a>
                                                <a href="#!" class="btn btn-sm btn-dark text-white">
                                                    Subcategoria
                                                </a>
                                            </div>
                                        </div>
                                        <!-- / .row -->
                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <ul class="list-group mt-4">

                                                    <li class="list-group-item d-flex justify-content-between align-items-center"
                                                        style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                        Morbi leo risus
                                                        <a href="#!" class="btn btn-sm btn-danger text-white">
                                                            Quitar
                                                        </a>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center"
                                                        style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                        Morbi leo risus
                                                        <a href="#!" class="btn btn-sm btn-danger text-white">
                                                            Quitar
                                                        </a>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center"
                                                        style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                        Morbi leo risus
                                                        <a href="#!" class="btn btn-sm btn-danger text-white">
                                                            Quitar
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto">

                                                <!-- Avatar -->
                                                <a href="profile-posts.html" class="avatar">
                                                    <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-5.jpg"
                                                        alt="..." class="avatar-img rounded-circle">
                                                </a>

                                            </div>
                                            <div class="col ms-n2">

                                                <!-- Title -->
                                                <h4 class="mb-1 name">
                                                    <a href="profile-posts.html">Glen Rouse</a>
                                                </h4>

                                                <!-- Time -->
                                                <p class="small mb-0">
                                                    <span class="text-warning">●</span> Busy
                                                </p>

                                            </div>
                                            <div class="col-auto">

                                                <a href="#!" class="btn btn-sm btn-danger text-white"
                                                    style="margin-right: 1rem;">
                                                    Quitar
                                                </a>
                                                <a href="#!" class="btn btn-sm btn-dark text-white">
                                                    Subcategoria
                                                </a>

                                            </div>
                                        </div>
                                        <!-- / .row -->
                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <ul class="list-group mt-4">

                                                    <li class="list-group-item d-flex justify-content-between align-items-center"
                                                        style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                        Morbi leo risus
                                                        <a href="#!" class="btn btn-sm btn-danger text-white">
                                                            Quitar
                                                        </a>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center"
                                                        style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                        Morbi leo risus
                                                        <a href="#!" class="btn btn-sm btn-danger text-white">
                                                            Quitar
                                                        </a>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center"
                                                        style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                        Morbi leo risus
                                                        <a href="#!" class="btn btn-sm btn-danger text-white">
                                                            Quitar
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> <!-- / .row -->
            </div>
        </div>
    </div>
</template>

<script>
import SidebarPage from '../../components/SidebarPage.vue';
import TopNavPage from '../../components/TopNavPage.vue';
import axios from 'axios';

export default {
    name: 'IndexCategoryPage',
    data(){
        return {
            section_form : false,
            new_category: '',
        }
    },

    methods: {
        create_category(){
            console.log(this.new_category);
            axios.post(this.$url+'/create_category',{title : this.new_category}, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization' : this.$store.state.token
              }
            }).then( (result) => {
                if(result.data.message){
                    this.$notify({
                        group: 'foo',
                        title: 'ERROR',
                        text: result.data.message,
                        type: 'error'
                    });
                }else{
                this.new_category = '';
                this.$notify({
                        group: 'foo',
                        title: 'SUCCESS',
                        text: 'Se registro la categoria',
                        type: 'success'
                    });
                }
            })
        }
    },

    components: {
        SidebarPage,
        TopNavPage
    },
}
</script>
