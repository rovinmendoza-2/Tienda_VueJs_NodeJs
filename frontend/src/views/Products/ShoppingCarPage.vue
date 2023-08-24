<template>
    <div style="background: rgb(250 236 255)" class="pb-5">
        <!-- Hero Section-->
        <section class="hero" style="margin-top: 8rem !important">
            <div class="container">
                <!-- Breadcrumbs -->
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active">Carrito</li>
                </ol>
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                    <h1 class="hero-heading">Carrito de campras</h1>
                    <div class="row">
                        <div class="col-xl-8 offset-xl-2">
                            <p class="lead text-muted">Bienvenido 😁</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Shopping Cart Section-->
        <section>
            <div class="container">
                <div class="row mb-5">
                    <div class="col-lg-8">
                        <div class="cart">
                            <div class="cart-wrapper">
                                <div class="cart-header text-center" style="background-color: aquamarine !important">
                                    <div class="row">
                                        <div class="col-5 text-white">Producto</div>
                                        <div class="col-2 text-white">Precio</div>
                                        <div class="col-2 text-white">Cantidad</div>
                                        <div class="col-2 text-white">Subtotal</div>
                                        <div class="col-1"></div>
                                    </div>
                                </div>
                                <div class="cart-body" style="background-color: white !important">
                                    <!-- Product-->
                                    <div class="cart-item">
                                        <div class="row d-flex align-items-center text-center">
                                            <div class="col-5">
                                                <div class="d-flex align-items-center"><a href="detail.html"><img
                                                            class="cart-item-img"
                                                            src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-ian-dooley-347968-unsplash.jpg"
                                                            alt="..."></a>
                                                    <div class="cart-title text-start"><a class="text-uppercase text-dark"
                                                            href="detail.html"><strong>Skull Tee</strong></a><br><span
                                                            class="text-muted text-sm">Size:
                                                            Large</span><br><span class="text-muted text-sm">Colour:
                                                            Green</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-2">$65.00</div>
                                            <div class="col-2">
                                                4
                                            </div>
                                            <div class="col-2 text-center">$260.00</div>
                                            <div class="col-1 text-center">
                                                <a class="cart-remove" href="#">
                                                    <img src="/assets/media/borrar.png" style="18px">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="my-5 d-flex justify-content-between flex-column flex-lg-row">
                            <router-link class="btn btn-link text-muted" to="/shop">Continuar comprando
                            </router-link>
                            <a class="btn btn-dark">Proceed to checkout
                                <i class="fa fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="block mb-5">
                            <div class="block-header">
                                <h6 class="text-uppercase mb-0">Order Summary</h6>
                            </div>
                            <div class="block-body bg-light pt-1">
                                <p class="text-sm">Shipping and additional costs are calculated based on values you have
                                    entered.</p>
                                <ul class="order-summary mb-0 list-unstyled">
                                <li class="order-summary-item"><span>Order Subtotal </span><span>$390.00</span></li>
                                <li class="order-summary-item"><span>Shipping and handling</span><span>$10.00</span>
                                </li>
                                <li class="order-summary-item"><span>Tax</span><span>$0.00</span></li>
                                <li class="order-summary-item border-0"><span>Total</span><strong
                                        class="order-summary-total">$400.00</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div></template>

<script>

export default {
    name: 'ShoppingCartPage',
    data(){
        return {

        }
    },

    methods: {

    }
}
</script>