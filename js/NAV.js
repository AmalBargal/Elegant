const createNav =() => {
    let nav =document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav-free-shipping">
             <p class="free-shipping">FREE SHIPPING ON ORDERS OVER 1000LE</p>
        </div>
        <div class="nav">
            <img src="./img/asset 1.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand , products">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="./img/user.png" alt=""></a>
                <a href="#"><img src="./img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="link-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">Men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
}
createNav()