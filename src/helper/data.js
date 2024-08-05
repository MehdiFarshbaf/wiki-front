import BazaarIcon from '../assets/images/downloadIcons/Bazaar.png'
import MyketIcon from '../assets/images/downloadIcons/Myket.png'
import TestFlightIcon from '../assets/images/downloadIcons/TestFlight.png'
import DirectAPKIcon from '../assets/images/downloadIcons/DirectAPK.png'
import WebAppIcon from '../assets/images/downloadIcons/WebApp.png'
import SibAppIcon from '../assets/images/downloadIcons/SibApp.png'

//import social icons for footer
import instagramIcon from '../assets/images/socialsIcons/instagram.svg'
import telegramIcon from '../assets/images/socialsIcons/telegram.svg'
import youtube from '../assets/images/socialsIcons/youtube.svg'
import aparatIcon from '../assets/images/socialsIcons/aparat.svg'

//import namads for footer
import eNAMAD from '../assets/images/namds/eNAMAD.ir.png'
import AnjomanSenfi from '../assets/images/namds/AnjomanSenfi.png'
import NezamSenfi from '../assets/images/namds/NezamSenfi.png'

// import brands
import fastBrand from '../assets/images/brands/Faraaz.png'
import gardeshBrand from '../assets/images/brands/Gardeshgary.png'
import thBrand from '../assets/images/brands/3.png'

export const downloadWays = [
    {id: 0, name: "", image: BazaarIcon},
    {id: 1, name: "", image: MyketIcon},
    {id: 2, name: "", image: TestFlightIcon},
    {id: 3, name: "", image: DirectAPKIcon},
    {id: 4, name: "", image: WebAppIcon},
    {id: 5, name: "", image: SibAppIcon},
]
export const socialsFooter = [
    {id: 0, name: "", image: instagramIcon},
    {id: 1, name: "", image: telegramIcon},
    {id: 2, name: "", image: youtube},
    {id: 3, name: "", image: aparatIcon},
]
export const symbolsFooter = [
    {id: 0, name: "", image: NezamSenfi},
    {id: 1, name: "", image: AnjomanSenfi},
    {id: 2, name: "", image: eNAMAD},

]

export const navList = [
    {id: 0, label: "خرید خودرو", subMenu: null, path: "/"},
    {
        id: 1, label: "ابزارها", subMenu: [
            {id: 0, label: "محاسبه گر اقساط", path: '/'},
            {id: 1, label: "بررسی خودروها", path: '/'},
            {id: 2, label: "مقایسه خودروها", path: '/'},
            {id: 3, label: "تخمین قیمت خودرو", path: '/'}
        ]
    },
    {id: 2, label: "قیمت روز", subMenu: null, path: "/"},
    {id: 3, label: "مجله خودرو", subMenu: null, path: "/"},
    {
        id: 4, label: "ویکی", subMenu: [
            {id: 0, label: "درباره ما", path: '/about-us'},
            {id: 1, label: "قوانین و مقررات", path: '/rule'}
        ]
    }
]

export const brands = [
    {id: 0, title: "بانک گردشگری", image: fastBrand, fee: "26"},
    {id: 1, title: "فراز اندیشان", image: gardeshBrand, fee: "26"},
    {id: 2, title: "واسپاری فردا", image: thBrand, fee: "26"},
    {id: 3, title: "بانک گردشگری", image: fastBrand, fee: "26"},
    {id: 4, title: "فراز اندیشان", image: gardeshBrand, fee: "26"},
    {id: 5, title: "واسپاری فردا", image: thBrand, fee: "26"},
    {id: 6, title: "بانک گردشگری", image: fastBrand, fee: "26"},
    {id: 7, title: "فراز اندیشان", image: gardeshBrand, fee: "26"},
    {id: 8, title: "واسپاری فردا", image: thBrand, fee: "26"},
]
export const listMonth = [
    {id: 0, label: "12 ماهه"},
    {id: 1, label: "24 ماهه"},
    {id: 2, label: "36 ماهه"}
]
export const listDistance = [
    {id: 0, label: "2 ماهه"},
    {id: 1, label: "6 ماهه"},
]
export const userMenu = [
    {id: 0, label: "پرونده های من", path: "/"},
    {id: 1, label: "آگهی های من", path: "/"},
    {id: 2, label: "گوش به زنگ!", path: "/"},
    {id: 3, label: "استعلامات", path: "/"}
]
export const listCars = [
    {id: 0, name: "ایران خودرو"},
    {id: 1, name: "بنز"},
    {id: 2, name: "تراکتور"},
    {id: 3, name: "دورچرخه"},
]