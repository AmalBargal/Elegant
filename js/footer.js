const createFooter = () => {
    let footer =document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="./img/Asset 1.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirt</a></li>
                    <li><a href="#" class="footer-link">sweatshirt</a></li>
                    <li><a href="#" class="footer-link">shirt</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sportswear</a></li>
                    <li><a href="#" class="footer-link">watches</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirt</a></li>
                    <li><a href="#" class="footer-link">sweatshirt</a></li>
                    <li><a href="#" class="footer-link">shirt</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sportswear</a></li>
                    <li><a href="#" class="footer-link">watches</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Elegant business concept is to offer fashion and quality at the best price in a sustainable way.</p>
        <p class="info">support emails-helps@elegant,customersupport@elegant</p>
        <p class="info">telephone - 799756 , 85588</p>
        <div class="footer-soical-container">
            <div>
                <a href="#" class="social-link">terms&conditions</a>
                <a href="#" class="social-link">privacy policy</a>
            </div>
            <div>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">twitter</a>
            </div>
            
        
        </div>
        <p class="footer-credit">Elegant,best apprels online store</p>
    `;
}

createFooter();