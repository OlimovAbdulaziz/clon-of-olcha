import React from 'react'

function FooterTop() {
    return (

        <div className="footer__top">
            <div className="footer__top-wrapper">
                <div className="footer__top-details">
                    <h2>Bizning mobil ilovamiz APPGallery, App <br /> Store vs Google Play-da</h2>
                    <div className="footer__icons">
                        <img style={{ paddingLeft: "20px" }} src="https://olcha.uz/_nuxt/appstore.32a5f67a.svg" alt="" />
                        <img src="https://olcha.uz/_nuxt/googleplay.4ba35be8.svg" alt="" />
                        <img src="https://olcha.uz/_nuxt/app-gallery.879faacf.svg" alt="" />
                    </div>
                </div>
                <div className="footer__image">
                    <img className='last__image' src="https://olcha.uz/_nuxt/footer-img.745872f8.webp" alt="" />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default FooterTop