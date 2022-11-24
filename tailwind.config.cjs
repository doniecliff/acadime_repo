/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{jsx,js}",
    "./src/components/*.{jsx,js}",
    "./src/*/*.{jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        fc_prim: "#050760",
        fc_prim_a2: "#696AA0",
        fc_txt1: "#04ABF8",
        fc_dark: "#303030",
        fc_black: "#000000",

        fc_sec: "#F5F5F5",
        fc_cardbg: "#FDFDFD",

        fc_sect1: "#DBDBFF2E",
        fc_ibg: "#C6E7F6",

        fc_fq: "#F2FBFF",
        fc_fqd: "#F8FDFF",

        fc_sc1: "#A7E3FF",
        fc_sc2: "#B9E9FF",
        fc_sct: "#E6F7FFB2",

        fb: "#3A5897",
        linkdn: "#0077B7",
        twit: "#1D9BF0",

        fc_muted: "#6B8A8E",
        testr: "#E40000",
        testy: "#EFCD43",
      },
      backgroundImage: {
        'services': ["url('/src/assets/img/bg/Rectangle 49.png')", "url('/src/assets/img/bg/pexels-pixabay-270348 1.png')"],
        'back-floor': "url('/src/assets/img/bg/Vector.svg')"
      }
      // shadow
    },
  },
  plugins: [],
}
//fem-code palette
// #F5F5F5  main bg
// #FDFDFD  card/compo bg
// 0px 4px 20px rgba(0, 0, 0, 0.15)  box-shadow //
// #DBDBFF2E   section(missnStatemnt) diff bg

// #A7E3FF  sky bg      sc (small-compo; btn, links)
// #050760  dark-blue   h1-h6
// #04ABF8  sky txt
// #303030  black/dark      p
// #000000  normal black    other txt, footer-txt, bg-img(under-txt)

// #C6E7F6 sky bg-img; icon-lik
// #B9E9FF sky card-btn
// #E6F7FFB2   sky 4 each-faq


// #F2FBFF sky  each faq -- find even lighter; below
// #F8FDFF   #dee7eb 