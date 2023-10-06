const menuLefts = document.querySelectorAll(".category-item");
menuLefts.forEach((menuLeft)=> {
    menuLeft.onclick= () => {
        document.querySelector(".category-item--active.category-item").classList.remove("category-item--active")
        menuLeft.classList.add("category-item--active")
    }
})


const searchHeaders = document.querySelectorAll(".home-filter__btn.btn");
searchHeaders.forEach((searchHeader) => {
    searchHeader.onclick = () => {
        document.querySelector(".home-filter__btn.btn.btn--primary").classList.remove("btn--primary")
        searchHeader.classList.add("btn--primary")
    }
})
const productList = document.querySelector(".sm-gutter")
const productItems = [
    {
        img: "/img/emchandai.jpg",
        name : "Hộp Carton bảo vệ mũ bảo hiểm - Thùng Carton tặng kèm cho nón bảo hiểm nửa đầu",
        priceOld : "1.200.000",
        priceNew : "900.000",
        productSold : "29",
        productBrand: "nike",

    }
];

const modal = document.querySelector(".modal")
const formSub = document.querySelector(".auth-form.sub")
const formLogin = document.querySelector(".auth-form.login");
const spanSub = document.querySelector(".auth-form__switch-btn.sub")
const spanLogin = document.querySelector(".auth-form__switch-btn.login");
const btnHeaderSub = document.querySelector(".header__navbar-item.sub")
const btnHeaderlogin = document.querySelector(".header__navbar-item.login")
const btnBacks = document.querySelectorAll(".auth-form__controls-back")


//dang nhap 
btnHeaderSub.onclick = () => {
    modal.style.display = "flex";
    formSub.style.display = "block";
    formLogin.style.display = "none";

}
btnBacks.forEach((btnBack) => {
    btnBack.onclick = () => {
        modal.style.display = "none";
        formSub.style.display = "none";
    }

})
spanSub.onclick = () => {
    formSub.style.display = "none";
    formLogin.style.display = "block";
}
//login
btnHeaderlogin.onclick = () => {
    modal.style.display = "flex";
    formSub.style.display = "none";
    formLogin.style.display = "block";
}
spanLogin.onclick = () => {
    formSub.style.display = "block";
    formLogin.style.display = "none";
}