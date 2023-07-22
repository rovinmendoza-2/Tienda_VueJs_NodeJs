<template>
    <div class="d-flex align-items-center bg-auth border-top border-top-2 border-primary" style="height: 100% !important">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-5 col-xl-4 my-5">

                    <!-- Heading -->
                    <h1 class="display-4 text-center mb-3">
                        Iniciar sesión
                    </h1>

                    <!-- Subheading -->
                    <p class="text-muted text-center mb-5">
                        Panel administrador
                    </p>

                    <!-- Form -->
                    <form>

                        <div v-if="msm_error" class="alert alert-danger" role="alert">
                            {{ msm_error }}
                        </div>


                        <!-- Email address -->
                        <div class="form-group">

                            <!-- Label -->
                            <label class="form-label">
                                Correo eletrónico
                            </label>

                            <!-- Input -->
                            <input type="email" class="form-control" v-model="email" placeholder="name@address.com">

                        </div>

                        <!-- Password -->
                        <div class="form-group">
                            <div class="row">
                                <div class="col">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Contraseña
                                    </label>

                                </div>

                            </div> <!-- / .row -->

                            <!-- Input group -->
                            <div class="input-group input-group-merge">

                                <!-- Input -->
                                <input class="form-control" v-model="password" type="password"
                                    placeholder="Enter your password">

                                <!-- Icon -->
                                <span class="input-group-text">
                                    <i class="fe fe-eye"></i>
                                </span>

                            </div>
                        </div>

                        <!-- Submit -->
                        <button class="btn btn-lg w-100 btn-primary mb-3" type="button" v-on:click="validar()">
                            Ingresar
                        </button>
                    </form>

                </div>
            </div> <!-- / .row -->
        </div> <!-- / .container -->
    </div>
</template>
  
<script>
export default {
    name: 'LoginPage',
}
</script>
  