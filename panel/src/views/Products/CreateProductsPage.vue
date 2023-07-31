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
                                        <h6 class="header-pretitle">Productos</h6>
                                        <!-- Title -->
                                        <h1 class="header-title">Nuevo Producto</h1>
                                    </div>
                                </div> <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">
                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <a class="nav-link active">Todos los usuarios</a>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/product/create" class="nav-link">Nuevo Producto</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-7">
                            <div class="row justify-content-between align-items-center">
                                <div class="col">
                                    <div class="row align-items-center">
                                        <div class="col-auto">

                                            <!-- Avatar -->
                                            <div class="avatar">
                                                <img class="avatar-img rounded-circle"
                                                    src="assets/img/avatars/profiles/avatar-1.jpg" alt="...">
                                            </div>

                                        </div>
                                        <div class="col ms-n2">
                                            <!-- Heading -->
                                            <h4 class="mb-1"><b>Portada</b></h4>
                                            <!-- Text -->
                                            <small class="text-muted">PNG or JPG no bigger than 1000px wide and tall.</small>
                                        </div>
                                    </div> <!-- / .row -->
                                </div>
                                <div class="col-auto">
                                    <!-- Button -->
                                    <label for="file-upload" class="btn btn-sm btn-primary">Upload</label>
                                    <input style="display:none" id="file-upload" type="file" />
                                </div>
                            </div> <!-- / .row -->

                            <!-- Divider -->
                            <hr class="my-5">

                            <div class="row">
                                <div class="col-12">

                                    <!-- Email address -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="mb-1">Título del producto</label>
                                        <!-- Form text -->
                                        <small class="form-text text-muted">This contact will be shown to others publicly, so choose it carefully.</small>
                                        <!-- Input -->
                                        <input type="email" class="form-control" placeholder="Título del producto">
                                    </div>

                                </div>
                                <div class="col-12 col-md-6">
                                    <!-- First name -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="form-label"> Categoria</label>

                                        <!-- Input -->
                                        <select name="" class="form-select">
                                            <option value="" disabled selected>Seleccionar</option>
                                            <option value="Categoria 1">Categoria 1</option>
                                            <option value="Categoria 2">Categoria 2</option>
                                            <option value="Categoria 3">Categoria 3</option>
                                        </select>

                                    </div>

                                </div>
                                <div class="col-12 col-md-6">
                                    <!-- Last name -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="form-label">Precio</label>
                                        <!-- Input -->
                                        <input type="number" class="form-control" placeholder="Precio">
                                    </div>
                                </div>
                                <div class="col-12 col-md-12">
                                    <!-- Phone -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="form-label">Extracto</label>
                                        <!-- Input -->
                                        <textarea class="form-control" id="" rows="3" placeholder="Extracto"></textarea>
                                    </div>
                                </div>
                            </div> <!-- / .row -->

                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <!-- Public profile -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="mb-1">Producto publicado</label>

                                        <!-- Form text -->
                                        <small class="form-text text-muted">Making your profile public means that anyone on the Dashkit network will be ableto find you.</small>

                                        <div class="row">
                                            <div class="col-auto">

                                                <!-- Switch -->
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="switchOne" />
                                                    <label class="form-check-label" for="switchOne"></label>
                                                </div>

                                            </div>
                                            <div class="col ms-n2">
                                                <!-- Help text -->
                                                <small class="text-muted">Borrador activado</small>
                                            </div>
                                        </div> <!-- / .row -->
                                    </div>

                                </div>
                                <div class="col-12 col-md-6">

                                    <!-- Allow for additional Bookings -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="mb-1">En descuento</label>

                                        <!-- Form text -->
                                        <small class="form-text text-muted">
                                            If you are available for hire outside of the current situation, you can
                                            encourage others to hire you.
                                        </small>

                                        <div class="row">
                                            <div class="col-auto">

                                                <!-- Switch -->
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="switchTwo" />
                                                    <label class="form-check-label" for="switchTwo"></label>
                                                </div>

                                            </div>
                                            <div class="col ms-n2">
                                                <!-- Help text -->
                                                <small class="text-muted">Descuento desactivado</small>
                                            </div>
                                        </div> <!-- / .row -->
                                    </div>

                                </div>
                            </div> <!-- / .row -->
                            <!-- Divider -->
                            <hr class="mt-4 mb-5">
                            <!-- Button -->
                            <button class="btn btn-primary">Save changes</button>
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

export default {
    name: 'CreateProductsPage',
    components: {
        SidebarPage,
        TopNavPage
    },
}
</script>
