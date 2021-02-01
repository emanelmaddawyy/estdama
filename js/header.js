$(document).ready(function () {
  const $header = $('header');
  $header.html(`<div class="top-header">
  <div class="container">
    <ul class="d-flex">
      <li>
        <i class="far fa-envelope"></i>
      </li>
      <li>
        <i class="fas fa-thumbtack"></i>
      </li>
      <li>
        <i class="fab fa-snapchat-ghost"></i>
      </li>
      <li>
        <i class="fab fa-instagram"></i>
      </li>
      <li>
        <i class="fab fa-twitter"></i>
      </li>
    </ul>
  </div>
</div>
<div class="center-header">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.html"><img src="images/logo.png" class="img-fluid logo" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">الرئيسه <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
          <div class="dropdown">
            <a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#">          تعرف علينا
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="../founders.html">المؤسيسن</a> </li>
            <li><a class="dropdown-item" href="../administrativeBoard.html">مجلس الاداره </a></li>
            <li><a class="dropdown-item" href="../systems.html">السياسات و التنظيمات</a></li>
            <li><a class="dropdown-item" href="../policy.html">الميزانيات</a></li>
            </ul>
          </div>   
          </li>
          <li class="nav-item">
          <a class="nav-link" href="../media.html">الاعلام </a>
        </li>
          <li class="nav-item">
            <a class="nav-link" href="#">العضويات </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../programs.html"> برامج التطوع  </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../contactus.html">انضم الينا </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../projects.html">المتجر </a>
          </li>
        </ul>
      <div class="ml-auto">
        <form class="form-inline my-5 my-lg-0 d-flex">
          <input type="text" id="inputSearch" class="inputSearch" />
          <button class="btn" id="searchBtn" >
          <a href="../cart.html" style="color:#fff">
           <i class="fas fa-shopping-cart"></i>
           </a>
          </button>
        </form>
      </div>
    </div>
  </div>
  </nav>
</div>`)
});