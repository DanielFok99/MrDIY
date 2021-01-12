const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//BackEnd
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();

mix.styles([
    // 'public/assets/css/bootstrap.min.css',
    'public/assets/css/font-awesome.min.css',
    'public/assets/css/themify-icons.css',
    'public/assets/css/metisMenu.css',
    'public/assets/css/owl.carousel.min.css',
    'public/assets/css/slicknav.min.css',
    'public/assets/css/amcharts.css',
    'public/assets/css/jquery.dataTables.css',
    'public/assets/css/dataTables.bootstrap4.min.css',
    'public/assets/css/responsive.bootstrap.min.css',
    'public/assets/css/responsive.jqueryui.min.css',
    'public/assets/css/typography.css',
    'public/assets/css/custom-font.css',
    'public/assets/css/default-css.css',
    'public/assets/css/styles.css',
    'public/assets/css/responsive.css',
], 'public/css/app2.css').sourceMaps();

mix.babel([
    // 'public/assets/js/popper.min.js',
    // 'public/assets/js/bootstrap.min.js',
    'public/assets/js/vendor/modernizr-2.8.3.min.js',
    // 'public/assets/js/maps.js',
    'public/assets/js/owl.carousel.min.js',
    'public/assets/js/metisMenu.min.js',
    'public/assets/js/jquery.slimscroll.min.js',
    'public/assets/js/jquery.slicknav.min.js',
    'public/assets/js/jquery.dataTables.js',
    'public/assets/js/jquery.dataTables.min.js',
    'public/assets/js/dataTables.bootstrap4.min.js',
    'public/assets/js/dataTables.responsive.min.js',
    'public/assets/js/responsive.bootstrap.min.js',
    'public/assets/js/line-chart.js',
    'public/assets/js/bar-chart.js',
    'public/assets/js/pie-chart.js',
    'public/assets/js/scripts.js',
    'public/assets/js/plugins.js',
], 'public/js/app2.js');


//FrontEnd
mix.js('resources/js/frontend/app.js', 'public/js/frontend')
    .sass('resources/sass/frontend/app.scss', 'public/css/frontend')
    .sourceMaps();


mix.styles([
    'resources/assets/css/style.css',
    'resources/assets/css/etalage.css',
    'resources/assets/css/megamenu.css',
], 'public/css/frontend2.css');


mix.scripts([
    'resources/assets/js/megamenu.js',
    'resources/assets/js/jquery.etalage.min.js',
    'resources/assets/js/menu_jquery.js',
    'resources/assets/js/simpleCart.min.js'
], 'public/js/frontend2.js');
