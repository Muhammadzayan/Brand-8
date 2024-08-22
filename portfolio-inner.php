<?php include('includes/header.php') ?>
<title>Portfolio Inner</title>

</head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css">

<body class="case-main portfolio-inner-page">
    <header class="an-header light-header">
        <?php include('includes/menu.php') ?>
    </header>
    <main>
        <!-- <section class="an-banner port-bnr">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-left ">
                        <h2 class="lgt" data-aos="fade-right" data-aos-delay="100">
                            Our work
                        </h2>
                        <p class="case-pra" data-aos="fade-right" data-aos-delay="300">We build brands designed to
                            transform
                            business, customer, and employee experiences.</p>
                    </div>
                </div>
            </div>
        </section> -->

        <section class="portfiolo-slider">
            <div class="container-fluid">
                <div class="row">
                    <div class="slider-for">
                        <div class="item">
                            <img src="assets/img/port-1.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-2.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-3.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-4.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-5.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-6.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-7.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-8.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-9.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-10.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-11.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-12.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-13.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-14.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-15.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-16.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-17.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-18.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-19.png" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-20.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-21.jpeg" />
                        </div>
                    </div>

                    <div class="slider-nav">
                    <div class="item">
                            <img src="assets/img/port-1.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-2.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-3.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-4.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-5.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-6.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-7.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-8.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-9.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-10.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-11.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-12.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-13.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-14.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-15.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-16.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-17.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-18.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-19.png" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-20.jpeg" />
                        </div>
                        <div class="item">
                            <img src="assets/img/port-21.jpeg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <?php include('includes/footer.php') ?>
        <script>
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.slider-nav',
            autoplay: true,
              prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-caret-left' aria-hidden='true'></i></button>",
             nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-caret-right' aria-hidden='true'></i></button>"
        });
        $('.slider-nav').slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            infinite: true,
            arrows: false,
            centerPadding: '0px',
             prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-caret-left' aria-hidden='true'></i></button>",
             nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-caret-right' aria-hidden='true'></i></button>",
             responsive: [
        {breakpoint: 734, settings: {slidesToShow: 4}}
    ]
        });
        </script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min.js"></script>