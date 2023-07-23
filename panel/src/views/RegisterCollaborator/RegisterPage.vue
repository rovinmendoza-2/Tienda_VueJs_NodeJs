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
                            <h6 class="header-pretitle">
                            Colaboradores
                            </h6>

                            <!-- Title -->
                            <h1 class="header-title">
                            Nuevo colaborador
                            </h1>

                        </div>
                        </div> <!-- / .row -->
                        <div class="row align-items-center">
                        <div class="col">

                            <!-- Nav -->
                            <ul class="nav nav-tabs nav-overflow header-tabs">
                            <li class="nav-item">
                                <a href="account-general.html" class="nav-link active">
                                Todos los colaboradores
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="account-billing.html" class="nav-link">
                                    Nuevo colaborador
                                </a>
                                
                            </li>
                            
                            </ul>

                        </div>
                        </div>
                    </div>
                    </div>

                    <!-- Form -->
                    <div class="row">
                        <div class="col-12 col-md-6">

                        <!-- First name -->
                        <div class="form-group">

                            <!-- Label -->
                            <label class="form-label">
                            Nombres
                            </label>

                            <!-- Input -->
                            <input type="text" class="form-control" v-model="collaborator.name" placeholder="Nombre">

                        </div>

                        </div>
                        <div class="col-12 col-md-6">

                        <!-- Last name -->
                        <div class="form-group">

                            <!-- Label -->
                            <label class="form-label">
                            Apellidos
                            </label>

                            <!-- Input -->
                            <input type="text" class="form-control" v-model="collaborator.lastName" placeholder="Apellido">

                        </div>

                        </div>
                        <div class="col-12">

                        <!-- Email address -->
                        <div class="form-group">

                            <!-- Label -->
                            <label class="mb-1">
                            Correo electrónico
                            </label>

                            <!-- Form text -->
                            <small class="form-text text-muted">
                            This contact will be shown to others publicly, so choose it carefully.
                            </small>

                            <!-- Input -->
                            <input type="email" class="form-control" v-model="collaborator.email" placeholder="Email">

                        </div>

                        </div>
                        
                        <div class="col-12 col-md-6">

                        <!-- Birthday -->
                        <div class="form-group">

                            <!-- Label -->
                            <label class="form-label">
                            Cargo
                            </label>

                            <!-- Input -->
                            <select name="" class="form-select" v-model="collaborator.role">
                                <option value="" disabled selected>Seleccionar</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Inventariado">Inventariado</option>
                            </select>
                        </div>

                        </div>

                    </div> <!-- / .row -->
                    <hr class="my-5">
                    <!-- Button -->
                    <button type="button" class="btn btn-primary" v-on:click="validar()">Registrarse</button>
                    <br><br>
                </div>
                </div> <!-- / .row -->
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import SidebarPage from '../../components/SidebarPage.vue';
import TopNavPage from '../../components/TopNavPage.vue';
import axios from "axios";

export default {
  name: 'RegisterPage',
  data(){
    return {
        collaborator: {
            role: ''
        }
    }
  },
  methods: {
    validar(){
        if(!this.collaborator.name){
            this.$notify({
            group: 'foo',
            title: 'ERROR',
            text: 'Ingrese los nombre',
            type: 'error'
        });
        }else if(!this.collaborator.lastName){
            this.$notify({
            group: 'foo',
            title: 'ERROR',
            text: 'Ingrese los apellidos',
            type: 'error'
        });
        }else if(!this.collaborator.email){
            this.$notify({
            group: 'foo',
            title: 'ERROR',
            text: 'Ingrese el email',
            type: 'error'
        });
        }else if(!this.collaborator.role){
            this.$notify({
            group: 'foo',
            title: 'ERROR',
            text: 'Seleccione un rol',
            type: 'error'
        });
        }else{
            this.registerUsers();
        }
    },
    registerUsers(){
    axios.post(this.$url+'/register_user_admin', this.collaborator, {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": this.$token
        }}).then( (result) =>{
            console.log(result);
        }).catch( (err) => {
            console.log(err);
        })
    },
  },
  
  components: {
    SidebarPage,
    TopNavPage
  }
}
</script>
