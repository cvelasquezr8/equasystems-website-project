import"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";import"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";import"./header.astro_astro_type_script_index_0_lang.e2488edc.js";const t=document.querySelectorAll(".slider-slide");let e=0;const s=1e4;function i(){t[e].classList.remove("active"),e=(e+1)%t.length,t[e].classList.add("active")}setInterval(i,s);t[e].classList.add("active");