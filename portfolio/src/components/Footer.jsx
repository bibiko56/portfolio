import { useEffect, useRef } from 'react';

function Footer(){
    return <footer class="main-footer">
    <div class="footer-content">
        <div class="footer-top">
            <div class="footer-brand">
                <span class="brand-name">EMANUEL MOSQUEDA</span>
                <span class="brand-tag">Designer & IT Student</span>
            </div>
            
            <div class="footer-links">
                <a href="https://www.instagram.com/3mnl.mp3/?hl=en" target="_blank" class="f-link"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/bibiko56" target="_blank" class="f-link"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.facebook.com/emanuel.mosqueda.7503" class="f-link"><i class="fa-brands fa-facebook"></i></a>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2026 — ALL RIGHTS RESERVED</p>
            <p class="location-stamp">ILOILO, PH</p>
        </div>
    </div>
</footer>
}

export default Footer;