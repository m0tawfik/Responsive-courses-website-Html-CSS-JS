document.addEventListener("DOMContentLoaded", function () {
  // Mobile Header
  let openMobileList = document.getElementById("openMobileList");
  let closeMobileList = document.getElementById("closeMobileList");

  openMobileList.addEventListener('click', function () {
    let mobileList = document.getElementById("mobileList");
    mobileList.style.display = 'inline';
  });
  closeMobileList.addEventListener('click', function () {
    let mobileList = document.getElementById("mobileList");
    mobileList.style.display = 'none';
  });


  let moreCourcesBtn = document.getElementById("moreCourcesBtn");

  moreCourcesBtn.addEventListener('click', function () {
    let moreCoursesBox = document.getElementById("moreCoursesBox");
    let allCoursesBtn = document.getElementById("allCourses");
    moreCoursesBox.style.display = "block";
    moreCourcesBtn.style.display = "none"
    allCoursesBtn.style.display = "inline-block"
  });

  let arrowUpBtn = document.getElementById("arrowUp");
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 400) {
      arrowUpBtn.style.display = 'block';
    } else {
      arrowUpBtn.style.display = 'none';
    }

    arrowUpBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    });
  });
});