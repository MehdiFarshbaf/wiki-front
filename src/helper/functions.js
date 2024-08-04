import {appConfig} from "./config";

export const changeTitlePage = (title = '') => {
    title === "" ? document.title = appConfig.pageTitle : `${appConfig.pageTitle} | ${title}`
}

export const copyTextToClipboard = (text, message) => {
    if ('clipboard' in navigator) {
        // toast.success(message)
        return navigator.clipboard.writeText(text);
    } else {
        return document.execCommand('copy', true, text);
    }
}

export const numberWithCommas = (x) => {
    if (x == null) {
        x = ''
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
