import App from 'next/app';
import "../style/global.sass";

function MyApp({ Component, pageProps }) {
    var ie = false;
    if (typeof window !== "undefined") {
        ie = msieversion() !== 0;
    }

    return !ie ? 
        <Component {...pageProps} /> 
    : 
        <div>
            <img src={require("../res/img/Inspector.png")}/>
            <p style={{fontSize:"1.5rem"}}>GOOD MORNING INSPECTOR.</p>
            <p>We've been noticing your very unorthodox Choice of Browsers</p>
            <p>You have choosen to use <b>INTERNET EXPLORER</b></p>
            <p>We consider this Choice HIGH TREASON</p>
            <p>You will be gulaged by tomorrow morning</p>
            <p  style={{color: "red", fontSize:"1.25rem"}}><b>GLORY TO ARSTOTZKA.</b></p>
        </div>
    ;
}

export default MyApp

//INTERNET EXPLORER??
function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    }
    else  // If another browser, return 0
    {
        return 0;
    }
}
