/*------------------*/
/*   Lazy loading   */
/*------------------*/


document.addEventListener("DOMContentLoaded", function () {
  const imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target
        console.log("lazy loading ", lazyImage)
        lazyImage.src = lazyImage.dataset.src
        lazyImage.classList.remove("lazy-img");
        imgObserver.unobserve(lazyImage);
      }
    })
  });
  const arr = document.querySelectorAll('img.lazy-img')
  arr.forEach((v) => {
    imageObserver.observe(v);
  })
})




/*-------------------------*/
/*   Hamburger Animation   */
/*-------------------------*/

document.getElementById('hamburger').addEventListener("click", function () {
  document.getElementsByTagName('header')[0].classList.toggle("on-mobile");
  document.body.classList.toggle("no-scroll");

  if (window.innerWidth <= 1024) {
    if (window.scrollY > 0) {
      if (document.getElementsByTagName('header')[0].classList.contains("on-mobile")) {
        document.getElementById('hamburger-container').classList.remove("on");
      } else {
        document.getElementById('hamburger-container').classList.add("on");
      }
    }


  }
})



/*-------------*/
/*   Nav Mob   */
/*-------------*/

Array.from(document.querySelectorAll('#nav-links a')).forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementsByTagName('header')[0].classList.remove("on-mobile");
    document.body.classList.remove("no-scroll");
    // document.html.classList.remove("no-scroll");
  })
})



/*----------------*/
/*   Nav Scroll   */
/*----------------*/

document.addEventListener('scroll', function (e) {
  if (window.innerWidth > 1024) {
    if (window.scrollY > 0) {
      document.getElementsByTagName('nav')[0].classList.add("on");
    } else {
      document.getElementsByTagName('nav')[0].classList.remove("on");
    }
  } else {
    if (window.scrollY > 0) {
      document.getElementById('hamburger-container').classList.add("on");
    } else {
      document.getElementById('hamburger-container').classList.remove("on");
    }
  }
});



/*--------------*/
/*   Form Mob   */
/*--------------*/

document.getElementById('form-btn').addEventListener("click", function () {
  document.getElementById('form1').classList.add("on");
})

document.getElementById('form-x').addEventListener("click", function () {
  document.getElementById('form1').classList.remove("on");
})

/*-------------*/
/*   Sliders   */
/*-------------*/

var slider1 = new Swiper('#slider1', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
});

var slider2 = new Swiper('#slider2', {
  loop: true,
  loopedSlides: 5,
  centeredSlides: true,
  slidesPerView: 1,


  pagination: {
    el: '.swiper-pagination',
  },
});

var slider3 = new Swiper('#slider3', {
  loop: true,
  loopedSlides: 5,
  centeredSlides: true,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
  },
});



/*-------------------*/
/*  Form Validation  */
/*-------------------*/

let phone = document.getElementById("form1-phone");


phone.addEventListener('input', function () {
  this.value = this.value.match(/\d*\.?\d+/);
})



document.getElementById('form1-submit').addEventListener('click', function (e) {
  e.preventDefault();

  validateEmpty(document.form1.name, 'form1-name');
  validatePhone(document.form1.phone, 'form1-phone');
  // validateEmail(document.form1.email, 'form1-email');

  let validName = validateEmpty(document.form1.name, 'form1-name') === "" ? true : false;
  let validPhone = validatePhone(document.form1.phone, 'form1-phone') === "" ? true : false;
  // let validEmail = validateEmail(document.form1.email, 'form1-email') === "" ? true : false;


  const formData = {
    name: document.form1.name.value,
    phone: document.form1.phone.value,
    email: document.form1.email.value
  }


  if (validName && validPhone) {
    // fetch('/api/', {
    //   method: 'POST',
    //     credentials: "include",
    //   headers: {
    //     'Content-Type': 'application/json',
    //    'Accept':       'application/json' ,
    //  'action':'contact_form' 
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response)
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  }
})

document.getElementById('form2-submit').addEventListener('click', function (e) {
  e.preventDefault();

  validateEmpty(document.form2.name, 'form2-name');
  validatePhone(document.form2.phone, 'form2-phone');
  // validateEmail(document.form2.email, 'form2-email');

  let validName = validateEmpty(document.form2.name, 'form2-name') === "" ? true : false;
  let validPhone = validatePhone(document.form2.phone, 'form2-phone') === "" ? true : false;
  // let validEmail = validateEmail(document.form2.email, 'form2-email') === "" ? true : false;


  const formData = {
    name: document.form2.name.value,
    phone: document.form2.phone.value,
    email: document.form2.email.value
  }


  if (validName && validPhone) {

  }
})


function validateEmpty(field, id) {
  var error = "";

  console.log("validate works " + document.getElementById(id).nextElementSibling.innerHTML);
  if (field.value.length == 0) {
    document.getElementById(id).nextElementSibling.classList.add("on");
    var error = "1";
  } else {
    document.getElementById(id).nextElementSibling.classList.remove("on");
  }
  return error;
}

function trim(s) {
  return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(email, id) {
  var error = "";
  var temail = trim(email.value);
  var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
  var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;
  var emailErrorMsg = document.getElementById(id).nextElementSibling;


  emailErrorMsg.classList.remove("on");

  if (email.value == "") {
    emailErrorMsg.classList.add("on");
    emailErrorMsg.innerHTML = "*???? ???????? ?????? ????";
    var error = "2";
  } else if (!emailFilter.test(temail)) {
    emailErrorMsg.classList.add("on");
    emailErrorMsg.innerHTML = "*???????????? ?????????? ?????????? ???? ????????????";
    var error = "3";
  } else if (email.value.match(illegalChars)) {
    emailErrorMsg.classList.add("on");
    emailErrorMsg.innerHTML = "*2???????????? ?????????? ?????????? ???? ????????????";
    var error = "4";
  }

  return error;
}

function validatePhone(phone, id) {
  var error = "";
  var regex = /^0([50|52|53|54|55|56|57|58|72|74|76|77]{2})+[0-9]{7}$/;
  var phoneErrorMsg = document.getElementById(id).nextElementSibling;

  phoneErrorMsg.classList.remove("on");

  if (phone.value == "") {
    phoneErrorMsg.classList.add("on");
    phoneErrorMsg.innerHTML = "*???? ???????? ?????? ????";
    var error = '5';
  } else if (regex.exec(phone.value) === null) {
    phoneErrorMsg.classList.add("on");
    phoneErrorMsg.innerHTML = "*????' ???? ????????";
    var error = "6";
  } else if (phone.length < 10) {
    phoneErrorMsg.classList.add("on");
    phoneErrorMsg.innerHTML = "*????????2";
    var error = "7";
  }

  return error;
}

/* #Tabs
  ======================================================= */
const tabs = document.querySelectorAll('.tabs');

if (tabs) {
  tabs.forEach((tab) => {
    const tabBtns = tab.querySelectorAll('.tab-btn');
    const tabPanels = tab.querySelectorAll('.tab-panel');

    tabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const tabPanel = tab.querySelector(tabBtn.dataset.tab);

        tabBtns.forEach((btn) => {
          if (btn == tabBtn) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });

        tabPanels.forEach((panel) => {
          if (panel == tabPanel) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });

      });
    });
  });
}

/* #Accordion
================================================== */
const accordions = document.querySelectorAll('.accordion');

if (accordions) {
  accordions.forEach((accordion) => {
    const collapsibles = accordion.querySelectorAll('.collapsible');

    accordion.addEventListener('click', (e) => {
      if (e.target.closest('.collapse-toggler')) {
        e.preventDefault();

        const collapsible = e.target.closest('.collapsible');
        const collapse = collapsible.querySelector('.collapse');

        if (!accordion.classList.contains('no-close')) {
          collapsibles.forEach((coll) => {
            if (coll.classList.contains('show') && coll != collapsible) {
              collCollapse = coll.querySelector('.collapse');

              coll.classList.remove('show');
              gsap.to(collCollapse, {
                height: '0'
              });
            }
          });
        }

        collapsible.classList.toggle('show');

        if (collapsible.classList.contains('show')) {
          gsap.to(collapse, {
            height: 'auto',
            duration: .4,
            ease: 'power1.inOut'
          });
        } else {
          gsap.to(collapse, {
            height: '0'
          });
        }
      }
    });
  })
}