// import { useAccount, useConnect } from 'wagmi'

import Style from "styled-jsx/style"

// import { useIsMounted } from '../hooks'

export const ProjectTemplate = () => {

// let currentUrl = "https://metamask.app.link/dapp/" +  window.location.href + "&con=metamask" 
let currentUrl = "https://metamask.app.link/dapp/" 
let tcon:any = ()=>{
    let makecon = document.getElementById("btn3")
    makecon.click()
}
let dappUrl
if(typeof window !== 'undefined'){
  var current_url = window.location.href;
  var crurl = new URL(current_url);
  var envurl = crurl.searchParams.get("env");
  // let dnurl =  window.location.href
  // let dnurl =  "http://192.168.0.163"
  //  dappUrl = "https://metamask.app.link/dapp/" + window.location.href + "?env=wallet";
      dappUrl = "https://metamask.app.link/dapp/" 
}


//   const isMounted = useIsMounted()
//   const { connector, isReconnecting } = useAccount()
//   const { connect, connectors, isLoading, error, pendingConnector } =
//     useConnect()
// let count = 1
// let btnID ="btn"+ count
  return (
    <div>
<div>
        <meta charSet="UTF-8" />
        <title>Islamic Coin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Islamic Coin" />
        <meta name="keywords" content="Islamic Coin" />
        <meta name="version" content="1.5.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* favicon */}
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />
        {/* Css */}
        {/* Main Css */}
        <link href="/assets/line.css" type="text/css" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/icons.css" />
        <link rel="stylesheet" href="/assets/tailwind.css" />
       
        <style type="text/css" dangerouslySetInnerHTML={{__html: "" }} /><style type="text/css" dangerouslySetInnerHTML={{__html: ".pixelParallel-panel[data-v-dedc8274]{position:fixed;right:10px;bottom:10px;z-index:2147483647;width:375px;height:265px;transform:translate(0);background:#fff;transition:width .2s ease-out,height .2s ease-out;will-change:top,left,width,height,transform;opacity:0}.pixelParallel-panel-inner[data-v-dedc8274]{position:relative;overflow:hidden;height:100%;border:1px solid #dddedf;box-shadow:0 2px 10px rgba(0,0,0,.1);box-sizing:border-box}.pixelParallel-panel-handle[data-v-dedc8274]{position:absolute;top:-10px;right:-10px;z-index:3;width:20px;height:20px;background:red;transform:rotate(45deg);background:linear-gradient(0deg,transparent,transparent 50%,#ccc 0,#ccc);background-size:100% 2px;cursor:move}.pixelParallel-panel-isolator[data-v-dedc8274]{border:0;width:100%;height:100%;overflow:hidden;position:relative}.pixelParallel-panel-dragging .pixelParallel-panel-inner[data-v-dedc8274]{pointer-events:none}.pixelParallel-panel-minimized[data-v-dedc8274]{width:112px;height:50px;transition:width .2s ease-out .15s,height .2s ease-out .15s}@media (max-width:395px){.pixelParallel-panel[data-v-dedc8274]{right:0;bottom:0;width:320px}.pixelParallel-panel-minimized[data-v-dedc8274]{width:112px}}" }} /><style type="text/css" dangerouslySetInnerHTML={{__html: ".pixelParallel-overlay{position:absolute;left:0;top:0;width:100%;text-align:center;white-space:nowrap;display:none}.pixelParallel-overlay-enabled{display:block}" }} /><style type="text/css" dangerouslySetInnerHTML={{__html: ".pixelParallel-image-outer{visibility:hidden;position:absolute;top:0;left:0;width:100%;overflow:hidden;max-width:100vw;min-height:100vh}.pixelParallel-image-inner{position:absolute;z-index:2147483646;left:50%;top:0;cursor:move;transform:translateX(-50%);transition:opacity .15s}.pixelParallel-image-inner img{width:auto;height:auto;max-width:none;max-height:none;vertical-align:top;margin:0;padding:0;position:relative;transform-origin:50% 0;top:-1px;border:1px dashed #333}.pixelParallel-image-inner img:not([src]),.pixelParallel-image-inner img[src=\"\"]{visibility:hidden}.pixelParallel-image-enabled{visibility:visible}.pixelParallel-image-difference{mix-blend-mode:difference}.pixelParallel-image-difference img{opacity:1!important}.pixelParallel-image-locked,.pixelParallel-image-no-image{pointer-events:none}.pixelParallel-image-locked .pixelParallel-image-inner img{top:0;border:0 none}" }} /><style type="text/css" dangerouslySetInnerHTML={{__html: ".pixelParallel-grids{position:relative;z-index:2147483646;pointer-events:none}.pixelParallel-grid-horizontal,.pixelParallel-grid-vertical{position:fixed;z-index:1;pointer-events:none;visibility:hidden}.pixelParallel-grid-horizontal{top:50%;left:50%;display:table;width:100vw;height:200vh;opacity:.5;table-layout:fixed;border-spacing:30px;transform:translate(-50%,-50%)}.pixelParallel-grid-horizontal span{display:table-cell;background:red;height:200vh}.pixelParallel-grid-vertical{top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,transparent,transparent 90%,blue 0,blue);background-size:100% 10px;opacity:.5}.pixelParallel-grid-horizontal-enabled,.pixelParallel-grid-vertical-enabled{visibility:visible}" }} /><style type="text/css" dangerouslySetInnerHTML={{__html: ".pixelParallel-rulers{position:relative;z-index:2147483646}.pixelParallel-ruler-x,.pixelParallel-ruler-y{display:none;position:fixed;top:0;left:0;z-index:2;background:cyan}.pixelParallel-ruler-x:after,.pixelParallel-ruler-y:after{content:\"\";position:absolute;top:-8px;left:-8px;right:0;bottom:0;padding:10px}.pixelParallel-ruler-x{right:0;height:1px;cursor:row-resize}.pixelParallel-ruler-y{bottom:0;width:1px;cursor:col-resize}.pixelParallel-rulers-enabled .pixelParallel-ruler-x,.pixelParallel-rulers-enabled .pixelParallel-ruler-y{display:block}" }} />
      </div>
            <div>
        <nav id="topnav" className="defaultscroll is-sticky z-[1]" style={{zIndex: 1}}>
          <div className="container">
            {/* Logo container*/}
            <a className="logo pl-0" href="/" style={{width: '40%'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214 36" fill="none" className="h-[30px] w-[180px] inline-block" style={{maxWidth: '300px'}}><path fillRule="evenodd" clipRule="evenodd" d="M19.0349 1.91797C23.4852 1.91797 27.5147 3.72202 30.4312 6.63853C33.3132 9.52056 35.1086 13.4892 35.1507 17.8766V17.8857L35.1512 17.9456L35.1517 18.0343L35.1507 18.1829V18.1925C35.1086 22.5799 33.3132 26.5481 30.4312 29.4301C27.5147 32.3466 23.4857 34.1506 19.0349 34.1506C14.5846 34.1506 10.5551 32.3466 7.63859 29.4301C4.72209 26.5136 2.91803 22.4841 2.91803 18.0338C2.91803 13.5835 4.72209 9.55453 7.63859 6.63802C10.5551 3.72152 14.5846 1.91797 19.0349 1.91797ZM28.298 11.1806C28.909 11.1806 29.5017 11.2612 30.0661 11.4108C28.404 9.79791 26.1375 8.80462 23.6383 8.80462C21.0894 8.80462 18.7819 9.83746 17.1122 11.5077C15.442 13.1779 14.4091 15.4854 14.4091 18.0343C14.4091 20.5832 15.442 22.8908 17.1122 24.5604C18.7824 26.2306 21.0899 27.2635 23.6383 27.2635C26.1375 27.2635 28.4045 26.2702 30.0661 24.6573C29.5023 24.8074 28.9095 24.8875 28.2985 24.8875C26.4063 24.8875 24.6925 24.1203 23.4527 22.8801C22.2125 21.6399 21.4454 19.9261 21.4454 18.0338C21.4454 16.1415 22.2125 14.4277 23.4527 13.1875C24.6919 11.9483 26.4052 11.1806 28.298 11.1806ZM31.5289 14.8034C30.7019 13.977 29.5596 13.4653 28.2975 13.4653C27.0355 13.4653 25.8931 13.977 25.0661 14.8034C24.2392 15.6304 23.7281 16.7728 23.7281 18.0348C23.7281 19.2968 24.2397 20.4392 25.0661 21.2662C25.8931 22.0927 27.0355 22.6043 28.2975 22.6043C29.5596 22.6043 30.7019 22.0927 31.5289 21.2662C32.3554 20.4392 32.867 19.2968 32.867 18.0348L32.8665 17.976C32.8513 16.7368 32.3427 15.6172 31.5289 14.8034ZM23.6378 6.52039C25.0732 6.52039 26.4468 6.78304 27.7144 7.26321C25.341 5.34862 22.3215 4.20219 19.0349 4.20219C15.2153 4.20219 11.7568 5.7507 9.25352 8.25346C6.75076 10.7562 5.20226 14.2148 5.20226 18.0343C5.20226 21.8544 6.75026 25.3124 9.25352 27.8157C11.7568 30.3184 15.2148 31.8669 19.0349 31.8669C22.322 31.8669 25.341 30.7205 27.7144 28.8054C26.4468 29.2856 25.0732 29.5482 23.6378 29.5482C20.4587 29.5482 17.5797 28.2593 15.4967 26.1759C13.4133 24.0924 12.1244 21.214 12.1244 18.0348C12.1244 14.8557 13.4133 11.9767 15.4967 9.89324C17.5797 7.80929 20.4587 6.52039 23.6378 6.52039Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M137.983 29.7854C135.545 29.7854 133.505 28.9655 131.864 27.3247C130.246 25.6631 129.436 23.6451 129.436 21.2706C129.436 18.8535 130.246 16.8355 131.864 15.2165C133.505 13.5763 135.544 12.7559 137.983 12.7559C139.559 12.7559 140.994 13.1336 142.289 13.8891C143.584 14.6446 144.555 15.6592 145.203 16.9324L142.192 18.6806C141.825 17.9039 141.27 17.2939 140.525 16.8512C139.78 16.4086 138.922 16.1875 137.951 16.1875C136.527 16.1875 135.329 16.6733 134.358 17.6443C133.408 18.637 132.933 19.8458 132.933 21.2701C132.933 22.6944 133.407 23.9032 134.358 24.896C135.329 25.8675 136.527 26.3527 137.951 26.3527C138.901 26.3527 139.759 26.1316 140.525 25.689C141.291 25.2468 141.868 24.6369 142.257 23.8601L145.268 25.5759C144.577 26.8709 143.579 27.8961 142.273 28.6516C140.967 29.4081 139.538 29.7854 137.983 29.7854Z" fill="#04D484" /><path d="M126.744 13.1777H123.247V29.3651H126.744V13.1777Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M126.55 10.1018C126.118 10.5333 125.6 10.7493 124.996 10.7493C124.392 10.7493 123.863 10.5333 123.41 10.1018C122.978 9.64852 122.762 9.11967 122.762 8.51528C122.762 7.91088 122.978 7.39319 123.41 6.96119C123.841 6.5079 124.37 6.28125 124.996 6.28125C125.622 6.28125 126.151 6.5079 126.583 6.96119C127.014 7.39269 127.23 7.91088 127.23 8.51528C127.23 9.11967 127.003 9.64852 126.55 10.1018Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M113.821 12.7578C115.655 12.7578 117.134 13.3511 118.256 14.5385C119.378 15.7255 119.939 17.3227 119.939 19.3301V29.366H116.443V19.5567C116.443 18.456 116.162 17.5925 115.601 16.9668C115.04 16.3406 114.274 16.0277 113.303 16.0277C112.202 16.0277 111.339 16.3892 110.713 17.1123C110.087 17.8353 109.774 18.8981 109.774 20.3011V29.366H106.277V19.5567C106.277 18.4342 106.013 17.5656 105.484 16.9505C104.955 16.3355 104.205 16.0277 103.234 16.0277C102.155 16.0277 101.286 16.3948 100.628 17.1285C99.9694 17.8622 99.6398 18.9199 99.6398 20.3011V29.366H96.1438V13.1792H99.6398V15.1216C100.676 13.5463 102.219 12.7583 104.27 12.7583C106.341 12.7583 107.874 13.6112 108.867 15.3158C109.925 13.6107 111.576 12.7578 113.821 12.7578Z" fill="#04D484" /><path d="M72.5968 6.70312H69.1002V29.3654H72.5968V6.70312Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M57.958 17.6462C57.958 18.1426 58.2171 18.5472 58.7348 18.8606C59.253 19.1734 60.0085 19.47 61.0007 19.7509C61.7562 19.9233 62.4144 20.1069 62.9757 20.3011C63.537 20.4953 64.1302 20.7812 64.7564 21.159C65.3826 21.5367 65.8628 22.0331 66.1969 22.6482C66.5316 23.2632 66.6877 23.9807 66.6659 24.8011C66.6659 26.3552 66.0615 27.5746 64.8533 28.4589C63.6445 29.3437 62.1446 29.7863 60.3533 29.7863C58.7561 29.7863 57.3855 29.4517 56.2416 28.7829C55.0978 28.1141 54.2667 27.1857 53.749 25.9987L56.7598 24.2504C57.2993 25.8045 58.497 26.5813 60.3533 26.5813C62.1877 26.5813 63.105 25.9769 63.105 24.7681C63.105 23.8833 62.0797 23.1927 60.0293 22.6963C59.2525 22.5022 58.5994 22.308 58.0705 22.1138C57.5417 21.9196 56.9591 21.6387 56.3223 21.2721C55.6854 20.905 55.1997 20.4197 54.8655 19.8153C54.5309 19.2109 54.3742 18.5097 54.396 17.7111C54.396 16.2219 54.9573 15.0243 56.0794 14.1177C57.2233 13.2116 58.6369 12.7578 60.3208 12.7578C61.6589 12.7578 62.8514 13.0544 63.898 13.6482C64.945 14.2414 65.7487 15.0669 66.31 16.1246L63.3641 17.7755C62.8246 16.5454 61.81 15.9304 60.3208 15.9304C59.6302 15.9304 59.0633 16.0815 58.6212 16.3837C58.1791 16.6859 57.958 17.1067 57.958 17.6462Z" fill="#04D484" /><path d="M50.9593 6.70312H47.2361V29.3654H50.9593V6.70312Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M89.0163 15.4776V13.1792H92.5129V29.3665H89.0163V27.0356C87.7001 28.8701 85.8113 29.7873 83.3507 29.7873C81.1278 29.7873 79.2284 28.9674 77.6525 27.3267C76.0771 25.6864 75.2892 23.6683 75.2892 21.2726C75.2892 18.8768 76.0771 16.8588 77.6525 15.2185C79.2284 13.5782 81.1273 12.7578 83.3507 12.7578C85.8113 12.7578 87.6996 13.6644 89.0163 15.4776ZM80.243 24.9958C81.2145 25.9668 82.4339 26.4525 83.9013 26.4525C85.3687 26.4525 86.5886 25.9668 87.5596 24.9958C88.5311 24.003 89.0163 22.7618 89.0163 21.2726C89.0163 19.7834 88.5306 18.5533 87.5596 17.5818C86.5886 16.589 85.3687 16.0926 83.9013 16.0926C82.4334 16.0926 81.2145 16.589 80.243 17.5818C79.272 18.5533 78.7863 19.7829 78.7863 21.2726C78.7857 22.74 79.2715 23.9812 80.243 24.9958Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M184.193 27.3247C182.553 28.965 180.535 29.7854 178.139 29.7854C175.743 29.7854 173.725 28.9655 172.085 27.3247C170.423 25.6631 169.592 23.6451 169.592 21.2706C169.592 18.8961 170.423 16.8786 172.085 15.2165C173.725 13.5763 175.743 12.7559 178.139 12.7559C180.535 12.7559 182.553 13.5757 184.193 15.2165C185.855 16.8781 186.686 18.8966 186.686 21.2706C186.686 23.6446 185.855 25.6631 184.193 27.3247ZM173.088 21.2711C173.088 22.739 173.574 23.9579 174.545 24.9294C175.516 25.9004 176.714 26.3862 178.139 26.3862C179.563 26.3862 180.761 25.9004 181.732 24.9294C182.703 23.9579 183.189 22.739 183.189 21.2711C183.189 19.8037 182.703 18.5843 181.732 17.6128C180.761 16.6413 179.563 16.1561 178.139 16.1561C176.714 16.1561 175.516 16.6418 174.545 17.6128C173.574 18.5838 173.088 19.8032 173.088 21.2711Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M205.021 12.7578C206.899 12.7578 208.404 13.3566 209.538 14.5548C210.671 15.7529 211.237 17.377 211.237 19.4274V29.3665H207.741V19.7834C207.741 18.5751 207.417 17.6467 206.769 16.9992C206.122 16.3517 205.237 16.0282 204.114 16.0282C202.841 16.0282 201.837 16.4222 201.104 17.2096C200.37 17.9976 200.003 19.1577 200.003 20.69V29.3665H196.506V13.1792H200.003V15.2509C201.082 13.5889 202.755 12.7578 205.021 12.7578Z" fill="#04D484" /><path d="M192.907 13.1777H189.411V29.3651H192.907V13.1777Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M192.713 10.1018C192.282 10.5333 191.763 10.7493 191.159 10.7493C190.555 10.7493 190.026 10.5333 189.572 10.1018C189.141 9.64852 188.925 9.11967 188.925 8.51528C188.925 7.91088 189.141 7.39319 189.572 6.96119C190.004 6.5079 190.533 6.28125 191.159 6.28125C191.785 6.28125 192.313 6.5079 192.745 6.96119C193.177 7.39269 193.393 7.91088 193.393 8.51528C193.393 9.11967 193.166 9.64852 192.713 10.1018Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M158.385 29.7866C154.975 29.7866 152.147 28.6646 149.902 26.4199C147.658 24.1321 146.536 21.3373 146.536 18.0349C146.536 14.7113 147.658 11.9271 149.902 9.68241C152.125 7.41644 154.953 6.2832 158.385 6.2832C160.435 6.2832 162.329 6.76895 164.067 7.73994C165.804 8.71143 167.159 10.0277 168.13 11.6898L164.892 13.5674C164.288 12.4453 163.409 11.5549 162.254 10.8963C161.099 10.2381 159.809 9.90906 158.385 9.90906C155.989 9.90906 154.025 10.6752 152.492 12.208C151.003 13.719 150.259 15.6615 150.259 18.0354C150.259 20.4094 151.003 22.3519 152.492 23.8629C154.025 25.3951 155.989 26.1618 158.385 26.1618C159.809 26.1618 161.104 25.8322 162.27 25.1741C163.435 24.5159 164.31 23.6256 164.892 22.5035L168.13 24.3486C167.202 25.9889 165.852 27.3163 164.083 28.3304C162.378 29.3014 160.478 29.7866 158.385 29.7866Z" fill="#04D484" /></svg>
            </a>
            {/* End Logo container*/}
            {/*Login button Start*/}
            <ul className="buy-button list-none mb-0" style={{width: ''}}>
              <li className="inline pl-1 mb-0">
              {/* {envurl !== 'wallet' ? ( */}
              {/* //    <a href={ dappUrl } className="btn btn-icon rounded-full bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white" style={{width: '200px'}}> Connect Wallet */}
              {/* //    </a> */}
              {/* // ) : ( */}
              {/* //   <a id="topconbtn" className="btn btn-icon rounded-full bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white" style={{width: '200px'}}> Connect Wallet */}
              {/* //   </a> */}
              {/* )} */}

               
              </li>
            </ul>
            {/*Login button End*/}
            {/*end navigation*/}
          </div>
          {/*end container*/}
        </nav>
        {/*end header*/}
        {/* End Navbar */}
        {/* Start Hero */}
        <section className="relative table w-full md:pb-24 pb-16 mt-[200px] ">

<div className="container relative mb-[400px] mb-[400px] " style={{marginBottom: '40px', marginTop: '200px'}}><div className="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px] relative"><div className="md:mr-6"><ul className="list-none mb-0 text-amber-400 text-xl" style={{display: 'none'}}><li className="inline"><i className="mdi mdi-star" /></li><li className="inline"><i className="mdi mdi-star" /></li><li className="inline"><i className="mdi mdi-star" /></li><li className="inline"><i className="mdi mdi-star" /></li><li className="inline"><i className="mdi mdi-star" /></li></ul><h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Claiming<span className="after:absolute after:right-0 after:left-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/20 relative text-green-600"> is Live!</span> <br />Islamic Coin <span className="after:absolute after:right-0 after:left-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/20 relative text-green-600">(ISLM)</span></h4><p className="text-slate-400 text-lg max-w-xl">Project description</p><div><h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold" style={{display: 'none'}}>Wolf with Skull <span className="bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">Orange <br /> Illustration</span> T-shirt Tattoo </h5><div className="grid md:grid-cols-2 grid-cols-1 mt-6"><div><h6 className="text-lg font-semibold">Current Sales:</h6><h6 className="text-2xl font-semibold mt-2">5,567</h6><h6 className="text-slate-400 mt-2">$45,543,000.48 USD</h6></div><div><h6 className="text-lg font-semibold">Auction Ending In:</h6><span id="auction-item-1" className="text-2xl font-semibold mt-2" style={{color: '#e05b5b'}}> 08h: 01m: 57s</span></div></div>
{/* <div className="mt-6" style={{display: 'flex', justifyContent: 'space-around'}}>
  
  <a className="btn bg-green-600 hover:bg-indigo-700 border-green-600 hover:border-green-700 text-white rounded-md beginClicker"  style={{ marginRight: '20px'}}>Airdrop</a>
  
  <a className="btn bg-green-600 hover:bg-indigo-700 border-green-600 hover:border-green-700 text-white rounded-md">Claim Presale Tokens</a></div>
   */}
  <div className="grid grid-cols-1 mt-8" /></div></div><div className="relative"><img src="/assets/images/app/classic02.png" className="mx-auto" alt="" style={{display: 'none'}} /><div className="overflow-hidden absolute md:h-[500px] h-[400px] md:w-[500px] w-[400px] bg-gradient-to-tl to-green-600/20 via-green-600/70 from-green-600 bottom-1/2 translate-y-1/2 md:left-0 left-1/2 md:translate-x-0 -translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full" /><div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-indigo-600/20 after:top-0 after:left-0 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]" /><div className="absolute flex justify-between items-center top-16 md:-left-10 -left-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3"><div className="flex items-center"><div className="flex items-center justify-center h-[65px] min-w-[65px] bg-green-600/5 text-green-600 text-center rounded-full mr-3"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor h-6 w-6"><rect x={2} y={3} width={20} height={14} rx={2} ry={2} /><line x1={8} y1={21} x2={16} y2={21} /><line x1={12} y1={17} x2={12} y2={21} /></svg></div><div className="flex-1"><h6 className="text-slate-400">Visitors</h6><p className="text-xl font-bold"><span className="counter-value" data-target={4589}>4,589</span></p></div></div><span className="text-green-600"> 0.5% +</span></div><div className="absolute bottom-1/2 translate-y-1/2 lg:-right-7 -right-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-48 m-3"><h5 className="text-lg font-semibold mb-3">Mint Stage</h5><div className="flex justify-between mt-3 mb-2"><span className="text-slate-400">Progress</span><span className="text-slate-400">84%</span></div><div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]"><div className="bg-green-600 h-[6px] rounded-full" style={{width: '84%'}} /></div></div></div><div className="relative animate-[spin_30s_linear_infinite] -z-1"><span className="after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-indigo-600/20 relative after:z-10" /><span className="after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-indigo-600/20 relative after:z-10" /></div></div></div>

          {/* <div className="container" style={{marginTop: '70px'}}>
            <div className style={{textAlign: 'center'}}>
              <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">Do you need<span className="bg-gradient-to-r from-green-600 text-green-600 bg-clip-text" style={{color: 'green 1im'}}> Help? </span></h5>
              <div className="grid md:grid-cols-2 grid-cols-1 mt-6" style={{textAlign: 'center', display: 'flex !important', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                  <h6 className="text-lg font-semibold">If you are facing issues, Kindly DM Admin now!</h6>
                </div>
              </div>
              <div className="mt-6">
                <a href className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md mr-2">Message</a>
              </div>
              <div className="grid grid-cols-1 mt-8" style={{display: 'none !important'}}>
                <ul className="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                  <li role="presentation" className="md:inline-block block md:w-fit w-full">
                    <button className="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out text-white bg-indigo-600" id="tuesday-tab" data-tabs-target="#tuesday" type="button" role="tab" aria-controls="tuesday" aria-selected="true">Details</button>
                  </li>
                  <li role="presentation" className="md:inline-block block md:w-fit w-full">
                    <button className="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="wednesday-tab" data-tabs-target="#wednesday" type="button" role="tab" aria-controls="wednesday" aria-selected="false">Bids</button>
                  </li>
                  <li role="presentation" className="md:inline-block block md:w-fit w-full">
                    <button className="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="thursday-tab" data-tabs-target="#thursday" type="button" role="tab" aria-controls="thursday" aria-selected="false">Activity</button>
                  </li>
                </ul>
                <div id="StarterContent" className="mt-6">
                  <div className id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                    <div className="grid grid-cols-1">
                      <p className="text-slate-400 mb-4">Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Superex (with crypto payment)! What do you think?</p>
                      <p className="text-slate-400 mb-4">What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods
                        of mechanics. Biomechanics is a branch of biophysics.</p>
                      <h6 className="text-xl font-semibold">Owner</h6>
                      <div className="flex items-center mt-3">
                        <img src="/assets/08.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                        <div className="ml-3">
                          <h6 className="text-lg font-semibold"><a href className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</a></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                    <div className="grid grid-cols-1">
                      <div className="flex items-center">
                        <div className="relative">
                          <img src="/assets/01.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                        </div>
                        <div className="ml-3">
                          <h6 className="text-lg font-semibold">2 WETH <span className="text-slate-400">by</span> <a href className="hover:text-indigo-600 duration-500 ease-in-out">0xe849fa28a...ea14</a></h6>
                          <span className="text-slate-400">6 hours ago</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="relative">
                          <img src="/assets/02.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                        </div>
                        <div className="ml-3">
                          <h6 className="text-lg font-semibold">0.001 WETH <span className="text-slate-400">by</span> <a href className="hover:text-indigo-600 duration-500 ease-in-out">VOTwear</a></h6>
                          <span className="text-slate-400">6 hours ago</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="relative">
                          <img src="/assets/03.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                        </div>
                        <div className="ml-3">
                          <h6 className="text-lg font-semibold">1.225 WETH <span className="text-slate-400">by</span> <a href className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</a></h6>
                          <span className="text-slate-400">6 hours ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                    <div className="grid grid-cols-1">
                      <div className="rounded-md shadow dark:shadow-gray-800 p-6">
                        <div className="flex items-center">
                          <div className="relative">
                            <img src="/assets/images/nft/items/1.jpg" className="h-20 w-20 rounded-md shadow-md dark:shadow-gray-800" alt="" />
                            <div className="absolute top-0 left-0 translate-middle px-1 rounded-md shadow-md bg-white">
                              <i className="mdi mdi-account-check mdi-18px text-green-600" />
                            </div>
                          </div>
                          <span className="content ml-3">
                            <a href className="hover:text-indigo-600 text-lg block">Digital Art Collection</a>
                            <span className="text-slate-400 block mt-1">Started Following <a href className="link font-semibold">@Panda</a></span>
                            <span className="text-slate-400 block mt-1">1 hours ago</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/*end container*/}
        </section>
        {/*end end section*/}
        {/* End */}
        {/* Footer Start */}
        <footer className="footer bg-dark-footer ophide relative text-gray-200 dark:text-gray-200">
          {/*end container*/}
          {/* <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container text-center">
              <div className="grid md:grid-cols-2 items-center">
                <div className="md:text-left text-center">
                   <p className="mb-0" style={{display: 'none'}}>© 
                    100% AUDITED &amp; SECURE PLATFORM</p>
                </div>
                <ul className="list-none md:text-right text-center mt-6 md:mt-0">
                  <li className="inline">
                    <a ><img src="/assets/images/payments/american-ex.png" className="max-h-6 inline" title="American Express" alt="" /></a>
                  </li>
                  <li className="inline">
                    <a ><img src="/assets/images/payments/discover.png" className="max-h-6 inline" title="Discover" alt="" /></a>
                  </li>
                  <li className="inline">
                    <a ><img src="/assets/images/payments/master-card.png" className="max-h-6 inline" title="Master Card" alt="" /></a>
                  </li>
                  <li className="inline">
                    <a ><img src="/assets/images/payments/paypal.png" className="max-h-6 inline" title="Paypal" alt="" /></a>
                  </li>
                  <li className="inline">
                    <a ><img src="/assets/images/payments/visa.png" className="max-h-6 inline" title="Visa" alt="" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </footer>
        {/*end footer*/}
        {/* Footer End */}
        {/* Back to top */}
        <a href="#"  id="back-to-top" className="back-to-top fixed text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9 hidden"><i className="uil uil-arrow-up" /></a>
        {/* Back to top */}
        {/* Switcher */}
       
      </div>
    </div>
  )
}




// var NewComponent = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <nav id="topnav" className="defaultscroll is-sticky">
//           <div className="container">
//             {/* Logo container*/}
//             <a className="logo pl-0" href="/" style={{width: '40%'}}>
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214 36" fill="none" className="h-[30px] w-[180px] inline-block" style={{maxWidth: '300px'}}><path fillRule="evenodd" clipRule="evenodd" d="M19.0349 1.91797C23.4852 1.91797 27.5147 3.72202 30.4312 6.63853C33.3132 9.52056 35.1086 13.4892 35.1507 17.8766V17.8857L35.1512 17.9456L35.1517 18.0343L35.1507 18.1829V18.1925C35.1086 22.5799 33.3132 26.5481 30.4312 29.4301C27.5147 32.3466 23.4857 34.1506 19.0349 34.1506C14.5846 34.1506 10.5551 32.3466 7.63859 29.4301C4.72209 26.5136 2.91803 22.4841 2.91803 18.0338C2.91803 13.5835 4.72209 9.55453 7.63859 6.63802C10.5551 3.72152 14.5846 1.91797 19.0349 1.91797ZM28.298 11.1806C28.909 11.1806 29.5017 11.2612 30.0661 11.4108C28.404 9.79791 26.1375 8.80462 23.6383 8.80462C21.0894 8.80462 18.7819 9.83746 17.1122 11.5077C15.442 13.1779 14.4091 15.4854 14.4091 18.0343C14.4091 20.5832 15.442 22.8908 17.1122 24.5604C18.7824 26.2306 21.0899 27.2635 23.6383 27.2635C26.1375 27.2635 28.4045 26.2702 30.0661 24.6573C29.5023 24.8074 28.9095 24.8875 28.2985 24.8875C26.4063 24.8875 24.6925 24.1203 23.4527 22.8801C22.2125 21.6399 21.4454 19.9261 21.4454 18.0338C21.4454 16.1415 22.2125 14.4277 23.4527 13.1875C24.6919 11.9483 26.4052 11.1806 28.298 11.1806ZM31.5289 14.8034C30.7019 13.977 29.5596 13.4653 28.2975 13.4653C27.0355 13.4653 25.8931 13.977 25.0661 14.8034C24.2392 15.6304 23.7281 16.7728 23.7281 18.0348C23.7281 19.2968 24.2397 20.4392 25.0661 21.2662C25.8931 22.0927 27.0355 22.6043 28.2975 22.6043C29.5596 22.6043 30.7019 22.0927 31.5289 21.2662C32.3554 20.4392 32.867 19.2968 32.867 18.0348L32.8665 17.976C32.8513 16.7368 32.3427 15.6172 31.5289 14.8034ZM23.6378 6.52039C25.0732 6.52039 26.4468 6.78304 27.7144 7.26321C25.341 5.34862 22.3215 4.20219 19.0349 4.20219C15.2153 4.20219 11.7568 5.7507 9.25352 8.25346C6.75076 10.7562 5.20226 14.2148 5.20226 18.0343C5.20226 21.8544 6.75026 25.3124 9.25352 27.8157C11.7568 30.3184 15.2148 31.8669 19.0349 31.8669C22.322 31.8669 25.341 30.7205 27.7144 28.8054C26.4468 29.2856 25.0732 29.5482 23.6378 29.5482C20.4587 29.5482 17.5797 28.2593 15.4967 26.1759C13.4133 24.0924 12.1244 21.214 12.1244 18.0348C12.1244 14.8557 13.4133 11.9767 15.4967 9.89324C17.5797 7.80929 20.4587 6.52039 23.6378 6.52039Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M137.983 29.7854C135.545 29.7854 133.505 28.9655 131.864 27.3247C130.246 25.6631 129.436 23.6451 129.436 21.2706C129.436 18.8535 130.246 16.8355 131.864 15.2165C133.505 13.5763 135.544 12.7559 137.983 12.7559C139.559 12.7559 140.994 13.1336 142.289 13.8891C143.584 14.6446 144.555 15.6592 145.203 16.9324L142.192 18.6806C141.825 17.9039 141.27 17.2939 140.525 16.8512C139.78 16.4086 138.922 16.1875 137.951 16.1875C136.527 16.1875 135.329 16.6733 134.358 17.6443C133.408 18.637 132.933 19.8458 132.933 21.2701C132.933 22.6944 133.407 23.9032 134.358 24.896C135.329 25.8675 136.527 26.3527 137.951 26.3527C138.901 26.3527 139.759 26.1316 140.525 25.689C141.291 25.2468 141.868 24.6369 142.257 23.8601L145.268 25.5759C144.577 26.8709 143.579 27.8961 142.273 28.6516C140.967 29.4081 139.538 29.7854 137.983 29.7854Z" fill="#04D484" /><path d="M126.744 13.1777H123.247V29.3651H126.744V13.1777Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M126.55 10.1018C126.118 10.5333 125.6 10.7493 124.996 10.7493C124.392 10.7493 123.863 10.5333 123.41 10.1018C122.978 9.64852 122.762 9.11967 122.762 8.51528C122.762 7.91088 122.978 7.39319 123.41 6.96119C123.841 6.5079 124.37 6.28125 124.996 6.28125C125.622 6.28125 126.151 6.5079 126.583 6.96119C127.014 7.39269 127.23 7.91088 127.23 8.51528C127.23 9.11967 127.003 9.64852 126.55 10.1018Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M113.821 12.7578C115.655 12.7578 117.134 13.3511 118.256 14.5385C119.378 15.7255 119.939 17.3227 119.939 19.3301V29.366H116.443V19.5567C116.443 18.456 116.162 17.5925 115.601 16.9668C115.04 16.3406 114.274 16.0277 113.303 16.0277C112.202 16.0277 111.339 16.3892 110.713 17.1123C110.087 17.8353 109.774 18.8981 109.774 20.3011V29.366H106.277V19.5567C106.277 18.4342 106.013 17.5656 105.484 16.9505C104.955 16.3355 104.205 16.0277 103.234 16.0277C102.155 16.0277 101.286 16.3948 100.628 17.1285C99.9694 17.8622 99.6398 18.9199 99.6398 20.3011V29.366H96.1438V13.1792H99.6398V15.1216C100.676 13.5463 102.219 12.7583 104.27 12.7583C106.341 12.7583 107.874 13.6112 108.867 15.3158C109.925 13.6107 111.576 12.7578 113.821 12.7578Z" fill="#04D484" /><path d="M72.5968 6.70312H69.1002V29.3654H72.5968V6.70312Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M57.958 17.6462C57.958 18.1426 58.2171 18.5472 58.7348 18.8606C59.253 19.1734 60.0085 19.47 61.0007 19.7509C61.7562 19.9233 62.4144 20.1069 62.9757 20.3011C63.537 20.4953 64.1302 20.7812 64.7564 21.159C65.3826 21.5367 65.8628 22.0331 66.1969 22.6482C66.5316 23.2632 66.6877 23.9807 66.6659 24.8011C66.6659 26.3552 66.0615 27.5746 64.8533 28.4589C63.6445 29.3437 62.1446 29.7863 60.3533 29.7863C58.7561 29.7863 57.3855 29.4517 56.2416 28.7829C55.0978 28.1141 54.2667 27.1857 53.749 25.9987L56.7598 24.2504C57.2993 25.8045 58.497 26.5813 60.3533 26.5813C62.1877 26.5813 63.105 25.9769 63.105 24.7681C63.105 23.8833 62.0797 23.1927 60.0293 22.6963C59.2525 22.5022 58.5994 22.308 58.0705 22.1138C57.5417 21.9196 56.9591 21.6387 56.3223 21.2721C55.6854 20.905 55.1997 20.4197 54.8655 19.8153C54.5309 19.2109 54.3742 18.5097 54.396 17.7111C54.396 16.2219 54.9573 15.0243 56.0794 14.1177C57.2233 13.2116 58.6369 12.7578 60.3208 12.7578C61.6589 12.7578 62.8514 13.0544 63.898 13.6482C64.945 14.2414 65.7487 15.0669 66.31 16.1246L63.3641 17.7755C62.8246 16.5454 61.81 15.9304 60.3208 15.9304C59.6302 15.9304 59.0633 16.0815 58.6212 16.3837C58.1791 16.6859 57.958 17.1067 57.958 17.6462Z" fill="#04D484" /><path d="M50.9593 6.70312H47.2361V29.3654H50.9593V6.70312Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M89.0163 15.4776V13.1792H92.5129V29.3665H89.0163V27.0356C87.7001 28.8701 85.8113 29.7873 83.3507 29.7873C81.1278 29.7873 79.2284 28.9674 77.6525 27.3267C76.0771 25.6864 75.2892 23.6683 75.2892 21.2726C75.2892 18.8768 76.0771 16.8588 77.6525 15.2185C79.2284 13.5782 81.1273 12.7578 83.3507 12.7578C85.8113 12.7578 87.6996 13.6644 89.0163 15.4776ZM80.243 24.9958C81.2145 25.9668 82.4339 26.4525 83.9013 26.4525C85.3687 26.4525 86.5886 25.9668 87.5596 24.9958C88.5311 24.003 89.0163 22.7618 89.0163 21.2726C89.0163 19.7834 88.5306 18.5533 87.5596 17.5818C86.5886 16.589 85.3687 16.0926 83.9013 16.0926C82.4334 16.0926 81.2145 16.589 80.243 17.5818C79.272 18.5533 78.7863 19.7829 78.7863 21.2726C78.7857 22.74 79.2715 23.9812 80.243 24.9958Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M184.193 27.3247C182.553 28.965 180.535 29.7854 178.139 29.7854C175.743 29.7854 173.725 28.9655 172.085 27.3247C170.423 25.6631 169.592 23.6451 169.592 21.2706C169.592 18.8961 170.423 16.8786 172.085 15.2165C173.725 13.5763 175.743 12.7559 178.139 12.7559C180.535 12.7559 182.553 13.5757 184.193 15.2165C185.855 16.8781 186.686 18.8966 186.686 21.2706C186.686 23.6446 185.855 25.6631 184.193 27.3247ZM173.088 21.2711C173.088 22.739 173.574 23.9579 174.545 24.9294C175.516 25.9004 176.714 26.3862 178.139 26.3862C179.563 26.3862 180.761 25.9004 181.732 24.9294C182.703 23.9579 183.189 22.739 183.189 21.2711C183.189 19.8037 182.703 18.5843 181.732 17.6128C180.761 16.6413 179.563 16.1561 178.139 16.1561C176.714 16.1561 175.516 16.6418 174.545 17.6128C173.574 18.5838 173.088 19.8032 173.088 21.2711Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M205.021 12.7578C206.899 12.7578 208.404 13.3566 209.538 14.5548C210.671 15.7529 211.237 17.377 211.237 19.4274V29.3665H207.741V19.7834C207.741 18.5751 207.417 17.6467 206.769 16.9992C206.122 16.3517 205.237 16.0282 204.114 16.0282C202.841 16.0282 201.837 16.4222 201.104 17.2096C200.37 17.9976 200.003 19.1577 200.003 20.69V29.3665H196.506V13.1792H200.003V15.2509C201.082 13.5889 202.755 12.7578 205.021 12.7578Z" fill="#04D484" /><path d="M192.907 13.1777H189.411V29.3651H192.907V13.1777Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M192.713 10.1018C192.282 10.5333 191.763 10.7493 191.159 10.7493C190.555 10.7493 190.026 10.5333 189.572 10.1018C189.141 9.64852 188.925 9.11967 188.925 8.51528C188.925 7.91088 189.141 7.39319 189.572 6.96119C190.004 6.5079 190.533 6.28125 191.159 6.28125C191.785 6.28125 192.313 6.5079 192.745 6.96119C193.177 7.39269 193.393 7.91088 193.393 8.51528C193.393 9.11967 193.166 9.64852 192.713 10.1018Z" fill="#04D484" /><path fillRule="evenodd" clipRule="evenodd" d="M158.385 29.7866C154.975 29.7866 152.147 28.6646 149.902 26.4199C147.658 24.1321 146.536 21.3373 146.536 18.0349C146.536 14.7113 147.658 11.9271 149.902 9.68241C152.125 7.41644 154.953 6.2832 158.385 6.2832C160.435 6.2832 162.329 6.76895 164.067 7.73994C165.804 8.71143 167.159 10.0277 168.13 11.6898L164.892 13.5674C164.288 12.4453 163.409 11.5549 162.254 10.8963C161.099 10.2381 159.809 9.90906 158.385 9.90906C155.989 9.90906 154.025 10.6752 152.492 12.208C151.003 13.719 150.259 15.6615 150.259 18.0354C150.259 20.4094 151.003 22.3519 152.492 23.8629C154.025 25.3951 155.989 26.1618 158.385 26.1618C159.809 26.1618 161.104 25.8322 162.27 25.1741C163.435 24.5159 164.31 23.6256 164.892 22.5035L168.13 24.3486C167.202 25.9889 165.852 27.3163 164.083 28.3304C162.378 29.3014 160.478 29.7866 158.385 29.7866Z" fill="#04D484" /></svg>
//             </a>
//             {/* End Logo container*/}
//             {/*Login button Start*/}
//             <ul className="buy-button list-none mb-0" style={{width: ''}}>
//               <li className="inline pl-1 mb-0">
//                 <a href="https://1.envato.market/techwind" target="_blank" className="btn btn-icon rounded-full bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white" style={{width: '200px'}}> Connect Wallet
//                 </a>
//               </li>
//             </ul>
//             {/*Login button End*/}
//             {/*end navigation*/}
//           </div>
//           {/*end container*/}
//         </nav>
//         {/*end header*/}
//         {/* End Navbar */}
//         {/* Start Hero */}
//         <section className="relative table w-full md:pb-24 pb-16 mt-28">
//           <div className="container relative mb-[400px]" style={{marginBottom: '40px'}}>
//             <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px] relative">
//               <div className="md:mr-6">
//                 <ul className="list-none mb-0 text-amber-400 text-xl" style={{display: 'none'}}>
//                   <li className="inline"><i className="mdi mdi-star" /></li>
//                   <li className="inline"><i className="mdi mdi-star" /></li>
//                   <li className="inline"><i className="mdi mdi-star" /></li>
//                   <li className="inline"><i className="mdi mdi-star" /></li>
//                   <li className="inline"><i className="mdi mdi-star" /></li>
//                 </ul>
//                 <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Claiming<span className="after:absolute after:right-0 after:left-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/20 relative text-green-600"> is Live!</span> <br />Islamic Coin <span className="after:absolute after:right-0 after:left-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/20 relative text-green-600">(ISLM)</span>
//                 </h4>
//                 <p className="text-slate-400 text-lg max-w-xl">Project descrription</p>
//                 <div className>
//                   <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold" style={{display: 'none'}}>Wolf with Skull <span className="bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">Orange <br /> Illustration</span> T-shirt Tattoo </h5>
//                   <div className="grid md:grid-cols-2 grid-cols-1 mt-6">
//                     <div>
//                       <h6 className="text-lg font-semibold">Current Bid:</h6>
//                       <h6 className="text-2xl font-semibold mt-2">4.85 ETH</h6>
//                       <h6 className="text-slate-400 mt-2">$450.48USD</h6>
//                     </div>
//                     <div>
//                       <h6 className="text-lg font-semibold">Auction Ending In:</h6>
//                       <span id="auction-item-1" className="text-2xl font-semibold mt-2">00 : 00 : 00 : 00</span>
//                     </div>
//                   </div>
//                   <div className="mt-6">
//                     <a href className="btn bg-green-600 hover:bg-indigo-700 border-green-600 hover:border-green-700 text-white rounded-md">Airdrop</a>
//                     <a href className="btn bg-green-600 hover:bg-indigo-700 border-green-600 hover:border-green-700 text-white rounded-md">Claim Presale Tokens</a>
//                   </div>
//                   <div className="grid grid-cols-1 mt-8" style={{display: 'none !important'}}>
//                     <ul className="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
//                       <li role="presentation" className="md:inline-block block md:w-fit w-full">
//                         <button className="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out text-white bg-indigo-600" id="tuesday-tab" data-tabs-target="#tuesday" type="button" role="tab" aria-controls="tuesday" aria-selected="true">Details</button>
//                       </li>
//                       <li role="presentation" className="md:inline-block block md:w-fit w-full">
//                         <button className="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="wednesday-tab" data-tabs-target="#wednesday" type="button" role="tab" aria-controls="wednesday" aria-selected="false">Bids</button>
//                       </li>
//                       <li role="presentation" className="md:inline-block block md:w-fit w-full">
//                         <button className="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="thursday-tab" data-tabs-target="#thursday" type="button" role="tab" aria-controls="thursday" aria-selected="false">Activity</button>
//                       </li>
//                     </ul>
//                     <div id="StarterContent" className="mt-6">
//                       <div className id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
//                         <div className="grid grid-cols-1">
//                           <p className="text-slate-400 mb-4">Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Superex (with crypto payment)! What do you think?</p>
//                           <p className="text-slate-400 mb-4">What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the
//                             methods of mechanics. Biomechanics is a branch of biophysics.</p>
//                           <h6 className="text-xl font-semibold">Owner</h6>
//                           <div className="flex items-center mt-3">
//                             <img src="/assets/08.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
//                             <div className="ml-3">
//                               <h6 className="text-lg font-semibold"><a href className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</a></h6>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="hidden" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
//                         <div className="grid grid-cols-1">
//                           <div className="flex items-center">
//                             <div className="relative">
//                               <img src="/assets/01.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
//                             </div>
//                             <div className="ml-3">
//                               <h6 className="text-lg font-semibold">2 WETH <span className="text-slate-400">by</span> <a href className="hover:text-indigo-600 duration-500 ease-in-out">0xe849fa28a...ea14</a></h6>
//                               <span className="text-slate-400">6 hours ago</span>
//                             </div>
//                           </div>
//                           <div className="flex items-center mt-4">
//                             <div className="relative">
//                               <img src="/assets/02.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
//                             </div>
//                             <div className="ml-3">
//                               <h6 className="text-lg font-semibold">0.001 WETH <span className="text-slate-400">by</span> <a href className="hover:text-indigo-600 duration-500 ease-in-out">VOTwear</a></h6>
//                               <span className="text-slate-400">6 hours ago</span>
//                             </div>
//                           </div>
//                           <div className="flex items-center mt-4">
//                             <div className="relative">
//                               <img src="/assets/03.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
//                             </div>
//                             <div className="ml-3">
//                               <h6 className="text-lg font-semibold">1.225 WETH <span className="text-slate-400">by</span> <a href className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</a></h6>
//                               <span className="text-slate-400">6 hours ago</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="hidden" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
//                         <div className="grid grid-cols-1">
//                           <div className="rounded-md shadow dark:shadow-gray-800 p-6">
//                             <div className="flex items-center">
//                               <div className="relative">
//                                 <img src="/assets/images/nft/items/1.jpg" className="h-20 w-20 rounded-md shadow-md dark:shadow-gray-800" alt="" />
//                                 <div className="absolute top-0 left-0 translate-middle px-1 rounded-md shadow-md bg-white">
//                                   <i className="mdi mdi-account-check mdi-18px text-green-600" />
//                                 </div>
//                               </div>
//                               <span className="content ml-3">
//                                 <a href className="hover:text-indigo-600 text-lg block">Digital Art Collection</a>
//                                 <span className="text-slate-400 block mt-1">Started Following <a href className="link font-semibold">@Panda</a></span>
//                                 <span className="text-slate-400 block mt-1">1 hours ago</span>
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="relative">
//                 <img src="/assets/images/app/classic02.png" className="mx-auto" alt="" style={{display: 'none'}} />
//                 <div className="overflow-hidden absolute md:h-[500px] h-[400px] md:w-[500px] w-[400px] bg-gradient-to-tl to-green-600/20 via-green-600/70 from-green-600 bottom-1/2 translate-y-1/2 md:left-0 left-1/2 md:translate-x-0 -translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full" />
//                 <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-indigo-600/20 after:top-0 after:left-0 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]" />
//                 <div className="absolute flex justify-between items-center top-16 md:-left-10 -left-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
//                   <div className="flex items-center">
//                     <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-green-600/5 text-green-600 text-center rounded-full mr-3">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor h-6 w-6"><rect x={2} y={3} width={20} height={14} rx={2} ry={2} /><line x1={8} y1={21} x2={16} y2={21} /><line x1={12} y1={17} x2={12} y2={21} /></svg>
//                     </div>
//                     <div className="flex-1">
//                       <h6 className="text-slate-400">Visitor</h6>
//                       <p className="text-xl font-bold"><span className="counter-value" data-target={4589}>4589</span></p>
//                     </div>
//                   </div>
//                   <span className="text-red-600"><i className="uil uil-chart-down" /> 0.5%</span>
//                 </div>
//                 <div className="absolute bottom-1/2 translate-y-1/2 lg:-right-7 -right-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-48 m-3">
//                   <h5 className="text-lg font-semibold mb-3">Manage Software</h5>
//                   <div className="flex justify-between mt-3 mb-2">
//                     <span className="text-slate-400">Progress</span>
//                     <span className="text-slate-400">84%</span>
//                   </div>
//                   <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
//                     <div className="bg-green-600 h-[6px] rounded-full" style={{width: '84%'}} />
//                   </div>
//                 </div>
//                 <div className="absolute flex justify-between items-center bottom-16 md:left-10 -left-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-44 m-3">
//                   <div className="flex items-center">
//                     <img src="/assets/05.jpg" className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-800 mr-3" alt="" />
//                     <div className="flex-1">
//                       <h6 className="text-lg font-semibold">Cristina</h6>
//                       <p className="text-slate-400">Manager</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="relative animate-[spin_30s_linear_infinite] -z-1">
//                 <span className="after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-indigo-600/20 relative after:z-10" />
//                 <span className="after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-indigo-600/20 relative after:z-10" />
//               </div>
//             </div>
//             {/*end grid*/}
//           </div>
//           <div className="container" style={{marginTop: '70px'}}>
//             <div className style={{textAlign: 'center'}}>
//               <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">Do you need<span className="bg-gradient-to-r from-green-600 text-green-600 bg-clip-text" style={{color: 'green 1im'}}> Help? </span></h5>
//               <div className="grid md:grid-cols-2 grid-cols-1 mt-6" style={{textAlign: 'center', display: 'flex !important', alignItems: 'center', justifyContent: 'center'}}>
//                 <div>
//                   <h6 className="text-lg font-semibold">If you are facing issues, Kindly DM Admin now!</h6>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <a href className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md mr-2">Message</a>
//               </div>
//               <div className="grid grid-cols-1 mt-8" style={{display: 'none !important'}}>
//                 <ul className="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
//                   <li role="presentation" className="md:inline-block block md:w-fit w-full">
//                     <button className="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out text-white bg-indigo-600" id="tuesday-tab" data-tabs-target="#tuesday" type="button" role="tab" aria-controls="tuesday" aria-selected="true">Details</button>
//                   </li>
//                   <li role="presentation" className="md:inline-block block md:w-fit w-full">
//                     <button className="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="wednesday-tab" data-tabs-target="#wednesday" type="button" role="tab" aria-controls="wednesday" aria-selected="false">Bids</button>
//                   </li>
//                   <li role="presentation" className="md:inline-block block md:w-fit w-full">
//                     <button className="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="thursday-tab" data-tabs-target="#thursday" type="button" role="tab" aria-controls="thursday" aria-selected="false">Activity</button>
//                   </li>
//                 </ul>
//                 <div id="StarterContent" className="mt-6">
//                   <div className id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
//                     <div className="grid grid-cols-1">
//                       <p className="text-slate-400 mb-4">Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Superex (with crypto payment)! What do you think?</p>
//                       <p className="text-slate-400 mb-4">What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods
//                         of mechanics. Biomechanics is a branch of biophysics.</p>
//                       <h6 className="text-xl font-semibold">Owner</h6>
//                       <div className="flex items-center mt-3">
//                         <img src="/assets/08.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
//                         <div className="ml-3">
//                           <h6 className="text-lg font-semibold"><a href className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</a></h6>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="hidden" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
//                     <div className="grid grid-cols-1">
//                       <div className="flex items-center">
//                         <div className="relative">
//                           <img src="/assets/01.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
//                         </div>
//                         <div className="ml-3">
//                           <h6 className="text-lg font-semibold">2 WETH <span className="text-slate-400">by</span> <a href className="hover:text-indigo-600 duration-500 ease-in-out">0xe849fa28a...ea14</a></h6>
//                           <span className="text-slate-400">6 hours ago</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center mt-4">
//                         <div className="relative">
//                           <img src="/assets/02.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
//                         </div>
//                         <div className="ml-3">
//                           <h6 className="text-lg font-semibold">0.001 WETH <span className="text-slate-400">by</span> <a href className="hover:text-indigo-600 duration-500 ease-in-out">VOTwear</a></h6>
//                           <span className="text-slate-400">6 hours ago</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center mt-4">
//                         <div className="relative">
//                           <img src="/assets/03.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
//                         </div>
//                         <div className="ml-3">
//                           <h6 className="text-lg font-semibold">1.225 WETH <span className="text-slate-400">by</span> <a href className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</a></h6>
//                           <span className="text-slate-400">6 hours ago</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="hidden" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
//                     <div className="grid grid-cols-1">
//                       <div className="rounded-md shadow dark:shadow-gray-800 p-6">
//                         <div className="flex items-center">
//                           <div className="relative">
//                             <img src="/assets/images/nft/items/1.jpg" className="h-20 w-20 rounded-md shadow-md dark:shadow-gray-800" alt="" />
//                             <div className="absolute top-0 left-0 translate-middle px-1 rounded-md shadow-md bg-white">
//                               <i className="mdi mdi-account-check mdi-18px text-green-600" />
//                             </div>
//                           </div>
//                           <span className="content ml-3">
//                             <a href className="hover:text-indigo-600 text-lg block">Digital Art Collection</a>
//                             <span className="text-slate-400 block mt-1">Started Following <a href className="link font-semibold">@Panda</a></span>
//                             <span className="text-slate-400 block mt-1">1 hours ago</span>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/*end grid*/}
//           </div>
//           {/*end container*/}
//         </section>
//         {/*end end section*/}
//         {/* End */}
//         {/* Footer Start */}
//         <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
//           {/*end container*/}
//           <div className="py-[30px] px-0 border-t border-slate-800">
//             <div className="container text-center">
//               <div className="grid md:grid-cols-2 items-center">
//                 <div className="md:text-left text-center">
//                    <p className="mb-0" style={{display: 'none'}}>© 
//                     100% AUDITED &amp; SECURE PLATFORM</p>
//                 </div>
//                 <ul className="list-none md:text-right text-center mt-6 md:mt-0">
//                   <li className="inline">
//                     <a href><img src="/assets/images/payments/american-ex.png" className="max-h-6 inline" title="American Express" alt="" /></a>
//                   </li>
//                   <li className="inline">
//                     <a href><img src="/assets/images/payments/discover.png" className="max-h-6 inline" title="Discover" alt="" /></a>
//                   </li>
//                   <li className="inline">
//                     <a href><img src="/assets/images/payments/master-card.png" className="max-h-6 inline" title="Master Card" alt="" /></a>
//                   </li>
//                   <li className="inline">
//                     <a href><img src="/assets/images/payments/paypal.png" className="max-h-6 inline" title="Paypal" alt="" /></a>
//                   </li>
//                   <li className="inline">
//                     <a href><img src="/assets/images/payments/visa.png" className="max-h-6 inline" title="Visa" alt="" /></a>
//                   </li>
//                 </ul>
//               </div>
//               {/*end grid*/}
//             </div>
//           </div>
//         </footer>
//         {/*end footer*/}
//         {/* Footer End */}
//         {/* Back to top */}
//         <a href="#" onclick="topFunction()" id="back-to-top" className="back-to-top fixed text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9 hidden"><i className="uil uil-arrow-up" /></a>
//         {/* Back to top */}
//         {/* Switcher */}
//         <div className="fixed top-1/4 -right-2 z-50">
//           <span className="relative inline-block rotate-90">
//             <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
//             <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
//               <i className="uil uil-moon text-[20px] text-yellow-500" />
//               <i className="uil uil-sun text-[20px] text-yellow-500" />
//               <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7" />
//             </label>
//           </span>
//         </div>
//       </div>
//     );
//   }
// });