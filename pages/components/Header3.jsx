'use client'
import React from 'react'

const Header3 = () => {
  return (
    <div className='mt-5 flex item-center justify-center p-4 border border-gray-200 border-2'>
    <div className='flex p-3'>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="56" height="56" rx="28" fill="#FFEFD6"></rect> <g clip-path="url(#clip0)"> <path d="M43.4629 24.9706C43.4096 24.863 43.3168 24.6099 43.2009 24.2937C42.8146 23.2387 42.0751 23.3548 42.0751 23.3548C42.0751 23.3548 42.2252 23.6018 41.9748 24.2423C41.8994 24.6801 39.3527 27.9335 38.892 27.0953C38.853 27.0244 38.8429 26.9417 38.8523 26.8617C38.9963 25.6378 39.0445 24.3851 38.9986 23.1215C38.7933 17.2803 36.6132 11.1832 32.8602 6.39269C32.8494 6.37917 32.8396 6.36662 32.8288 6.35406C32.77 6.27932 32.7109 6.20487 32.6514 6.13071C32.6513 6.13062 32.6512 6.13052 32.6512 6.13042V6.12994C32.4909 5.93092 32.328 5.73403 32.1624 5.53955C31.7332 5.03548 31.5152 5.46239 31.0476 4.99145C30.8953 4.83791 30.6281 4.92965 30.6035 5.14305C30.0612 9.93939 28.9194 11.7818 27.6855 13.2709C26.1221 14.9161 23.7463 16.8486 22.7687 19.4345C22.286 20.4933 21.4636 21.5142 21.2125 22.5555C21.1719 22.7698 20.8805 22.7903 20.7653 22.6628C19.8005 21.7182 19.081 19.8628 18.7935 18.214C18.6962 17.6564 18.3402 18.0929 18.3489 17.6258C18.3469 17.4752 18.1622 17.4008 18.0532 17.508C13.0378 22.4086 11.4735 29.2221 12.3842 36.3727C12.5326 37.5604 12.5794 38.7522 12.8859 39.8733C13.9009 43.7544 16.6448 46.7636 19.809 48.9462C22.6607 50.9131 25.7867 52.2687 29.4689 51.939C29.4677 51.9389 29.4664 51.9387 29.4653 51.9386C37.5725 51.3468 43.6767 45.476 44.8186 37.5577C45.6277 32.5656 44.5259 27.9552 43.4629 24.9706Z" fill="#F9AF38"></path> <path d="M29.0957 51.9683C21.4669 52.4607 14.3078 47.1507 12.4097 39.891C12.1032 38.7699 11.8291 37.5145 11.6807 36.3268C10.77 29.1762 13.3479 21.4385 18.3634 16.5379C18.4724 16.4307 18.6571 16.5051 18.6591 16.6557C18.6502 17.1231 18.6984 17.6561 18.7956 18.2143C14.798 23.0975 12.8331 29.9458 13.6456 36.3268C13.794 37.5145 14.0681 38.7699 14.3746 39.891C16.1086 46.523 22.2342 51.5289 29.0957 51.9683Z" fill="#F48931"></path> <path d="M39.0776 27.2468C39.0863 27.2478 39.095 27.2488 39.1037 27.2488H39.0767L39.0776 27.2468Z" fill="#F48931"></path> <path d="M22.7706 18.3677C22.6193 18.6554 22.4798 18.9432 22.3501 19.2281L22.3491 19.2261C22.4788 18.9413 22.6183 18.6545 22.7706 18.3677Z" fill="#F48931"></path> <path d="M37.864 33.6528C37.6473 33.1121 37.588 32.9516 37.4543 32.683C37.4066 32.5873 37.2629 32.6058 37.2417 32.7101C37.17 33.0617 37.1532 33.3054 36.9694 33.776C36.6815 34.5302 36.0767 35.1959 35.4905 35.7411C35.4126 35.8148 35.3007 35.7944 35.2427 35.725C35.2162 35.6789 35.201 35.6343 35.2054 35.5987C35.7579 31.0758 34.2929 25.9628 31.2888 22.1281C31.2818 22.1193 31.2752 22.1115 31.2684 22.1033C31.2554 22.0868 31.2424 22.0704 31.2295 22.054C30.8299 21.5494 30.507 21.2828 30.0547 20.8276C29.9545 20.7268 29.78 20.7867 29.7639 20.9269C29.4088 24.0681 28.8392 25.7268 28.0311 26.7018C27.2443 27.652 26.4367 27.9167 25.5345 29.2725C24.71 30.5125 24.2672 31.6237 24.0173 32.642C23.9849 32.7739 23.4572 32.8871 23.3671 32.7843C23.11 32.4921 22.8048 32.0715 22.545 31.4954C22.3716 31.1108 22.2508 30.7294 22.1671 30.3712C22.0256 29.765 21.8239 29.6596 21.8201 29.284C21.819 29.1851 21.6976 29.1368 21.6263 29.2069C18.1285 32.6246 17.0942 37.564 18.0476 42.4875C19.3755 49.3449 24.7136 52.0103 28.5828 51.9508C28.752 51.9482 28.9678 51.9818 29.1939 51.9645C31.5827 51.7825 36.858 50.5796 38.7932 44.0252C39.9009 40.2736 39.0702 36.6616 38.2722 34.4032C38.1702 34.1139 37.864 33.6528 37.864 33.6528Z" fill="#DF646E"></path> <path d="M24.3565 30.6353L24.0156 31.5043C24.1129 31.2224 24.2259 30.9307 24.3565 30.6353Z" fill="#DC4955"></path> <path d="M29.2592 51.9587C29.0107 51.9857 28.7721 51.9799 28.5953 51.9925C24.7254 52.0321 18.8857 49.4963 17.5584 42.6393C16.6044 37.7155 18.2923 32.1901 21.7898 28.7727C21.8615 28.7022 21.9824 28.7505 21.9834 28.8499C21.9873 29.2256 22.0227 29.7644 22.1641 30.3708C19.6294 33.7679 18.5104 38.4243 19.3268 42.6393C20.5313 48.858 25.4679 51.5464 29.2592 51.9587Z" fill="#DC4955"></path> <path d="M26.2689 47.0235C26.1713 47.0235 26.0721 47.0043 25.9768 46.9639C25.6033 46.8051 25.4314 46.3788 25.5929 46.0117L29.7857 36.4818C29.9472 36.1148 30.3809 35.9459 30.7544 36.1045C31.1279 36.2633 31.2998 36.6896 31.1382 37.0567L26.9455 46.5866C26.8252 46.86 26.5538 47.0235 26.2689 47.0235Z" fill="#F5FCFF"></path> <path d="M24.6086 41.1112C24.6 41.1112 24.5915 41.1112 24.5828 41.1111C23.1807 41.0963 22.0536 39.8339 22.0705 38.2971C22.0873 36.7695 23.2283 35.5369 24.6191 35.5369C24.6274 35.5369 24.6357 35.5369 24.644 35.537C25.3444 35.5444 25.9929 35.8552 26.4702 36.4124C26.9206 36.9382 27.1643 37.6267 27.1564 38.351C27.1484 39.0754 26.8897 39.7585 26.4278 40.2746C25.9444 40.8148 25.2992 41.1112 24.6086 41.1112ZM24.619 36.9853C24.0335 36.9853 23.5521 37.5784 23.5441 38.3128C23.536 39.0509 24.0091 39.6566 24.5987 39.6628C24.864 39.6693 25.1198 39.5431 25.3212 39.318C25.5502 39.0621 25.6786 38.7131 25.6828 38.3354C25.6869 37.9576 25.5662 37.606 25.343 37.3454C25.1465 37.1161 24.8927 36.9882 24.6282 36.9854C24.6251 36.9853 24.622 36.9853 24.619 36.9853Z" fill="#F5FCFF"></path> <path d="M31.9789 47.7355C31.9705 47.7355 31.9624 47.7355 31.9539 47.7354C30.5519 47.7205 29.4248 46.4581 29.4416 44.9214C29.4585 43.3937 30.5994 42.1611 31.9902 42.1611C31.9985 42.1611 32.0069 42.1611 32.0152 42.1612C33.4173 42.1761 34.5444 43.4385 34.5276 44.9752V44.9753C34.5107 46.5028 33.3696 47.7355 31.9789 47.7355ZM31.9901 43.6096C31.4045 43.6096 30.9233 44.2027 30.9153 44.9371C30.9071 45.6752 31.3802 46.2808 31.9698 46.287C32.556 46.2959 33.0458 45.6978 33.0539 44.9596V44.9597C33.062 44.2214 32.589 43.6159 31.9993 43.6096C31.9963 43.6096 31.9931 43.6096 31.9901 43.6096ZM33.7907 44.9675H33.7917H33.7907Z" fill="#F5FCFF"></path> <path d="M22.9706 8.18038C22.6319 9.9446 21.4674 10.8489 20.9599 11.2499C20.8657 11.3243 20.7271 11.298 20.6669 11.195C20.3422 10.6398 19.5719 9.4134 19.9103 7.65024C19.987 7.25085 19.9486 6.80183 20.115 6.457C20.6836 5.27833 21.6379 4.44412 22.0306 4.13386C22.1248 4.0594 22.2633 4.08577 22.3235 4.1887C22.5793 4.62595 23.1748 5.77506 23.251 7.10484C23.2715 7.46348 23.0424 7.8058 22.9706 8.18038Z" fill="#DF646E"></path> <path d="M23.1824 8.20935C22.8445 9.97358 21.3983 11.2502 20.8904 11.6509C20.796 11.7253 20.6575 11.6992 20.5976 11.5968C20.2734 11.0416 19.4 9.33819 19.7389 7.57493C19.8224 7.13942 19.9737 6.73385 20.1624 6.36401C20.238 7.69274 20.8334 8.84185 21.0888 9.27928C21.1487 9.38164 21.2873 9.40771 21.3816 9.33336C21.7638 9.03208 22.6784 8.23349 23.2502 7.10466C23.2718 7.46388 23.2541 7.83565 23.1824 8.20935Z" fill="#DC4955"></path> <path d="M44.7532 13.7725C45.1065 15.3704 44.2831 16.6178 43.9672 17.1255C43.9091 17.219 43.783 17.2458 43.6908 17.1844C43.189 16.8504 41.9794 16.0939 41.6262 14.4956C41.5673 14.2295 41.3847 13.9451 41.3857 13.684C41.3912 12.3776 42.0438 11.1977 42.307 10.7745C42.3652 10.6811 42.4912 10.6542 42.5835 10.7156C42.9658 10.9703 43.9125 11.6693 44.4975 12.6952C44.68 13.0153 44.6692 13.3925 44.7532 13.7725Z" fill="#DF646E"></path> <path d="M44.0723 17.4506C44.0143 17.5433 43.8876 17.5704 43.7962 17.5095C43.2942 17.1754 41.8215 16.0755 41.4678 14.4774C41.3951 14.1491 41.3745 13.8198 41.3912 13.5011C41.9758 14.5276 42.9219 15.2267 43.305 15.4817C43.3964 15.5425 43.5231 15.5155 43.5811 15.4228C43.8316 15.0201 44.4368 13.9289 44.4967 12.6958C44.6795 13.0154 44.8268 13.3669 44.9113 13.7474C45.264 15.3455 44.3877 16.9427 44.0723 17.4506Z" fill="#DC4955"></path> <path d="M31.229 22.0537C30.7987 24.3529 30.0451 25.6932 29.3613 26.5188C28.5744 27.469 27.8464 27.7771 26.9435 29.1328C26.5113 29.7827 26.1193 30.7648 25.8363 31.5547C25.5602 32.3233 24.8205 32.837 23.9903 32.8399L23.4941 32.8419C23.8301 32.6928 23.793 31.9032 24.0169 31.5045C24.3096 30.7075 24.6911 29.837 25.1751 29.1328C26.078 27.7771 26.806 27.469 27.5929 26.5188C28.4005 25.5435 29.3044 23.8517 29.66 20.7105C29.6757 20.5705 29.8506 20.5106 29.9508 20.611C30.3458 21.0098 30.723 21.4289 31.0777 21.8654C31.1288 21.9282 31.1789 21.9909 31.229 22.0537Z" fill="#DC4955"></path> <path d="M38.2702 34.4033C38.2589 34.4241 38.2465 34.4456 38.2334 34.4676C37.7391 35.295 36.82 35.7871 35.8438 35.7871H35.3887L35.3897 35.7861C35.425 35.7832 35.4604 35.7697 35.4899 35.7407C36.0764 35.1961 36.5539 34.4207 36.8417 33.6665C36.993 33.2784 37.0972 32.9104 37.1699 32.5956C37.1699 32.5947 37.1699 32.5947 37.1699 32.5937C37.1846 32.528 37.1984 32.4633 37.2111 32.4035C37.2327 32.2992 37.3762 32.2799 37.4233 32.3755C37.5579 32.6449 37.7544 33.064 37.9715 33.6038V33.6047C38.0688 33.8471 38.17 34.1146 38.2702 34.4033Z" fill="#DC4955"></path> <path d="M39.1042 27.249H39.0771L39.0781 27.2471C39.0868 27.248 39.0955 27.249 39.1042 27.249Z" fill="#F48931"></path> <path d="M30.3746 4.22801C29.8323 9.02436 28.452 11.6074 27.218 13.0965C25.6549 14.7419 23.3265 16.6423 22.349 19.2283L22.348 19.2264C22.1215 19.7241 21.9144 20.2597 21.7304 20.7958L21.729 20.7936C21.7008 20.8771 21.6746 20.9607 21.6455 21.0437C21.6457 21.0441 21.6459 21.0446 21.6461 21.045C21.4755 21.5649 21.3283 22.0802 21.2133 22.5559C21.1916 22.6737 21.0924 22.7336 20.9893 22.7413V22.7423H21.6796C22.5464 22.7423 23.3123 22.1846 23.5608 21.3684C23.7875 20.6245 24.0731 19.7525 24.3129 19.2264L24.3139 19.2283C25.2914 16.6423 27.6198 14.7419 29.1829 13.0965C30.299 11.7494 31.5359 9.50718 32.1627 5.54032C31.7343 5.03626 31.2863 4.54764 30.8187 4.07641C30.6664 3.92287 30.3992 4.01461 30.3746 4.22801Z" fill="#F48931"></path> <path d="M41.9047 22.0827C41.7789 22.7036 41.5913 23.3709 41.3407 24.0111C41.329 24.079 41.273 24.2205 41.1858 24.4065C41.1763 24.4267 41.1666 24.4472 41.1564 24.4683C41.1527 24.476 41.1488 24.484 41.145 24.4918C41.1068 24.5705 41.0639 24.6557 41.017 24.7457C41.0085 24.7622 40.9999 24.7786 40.9911 24.7953C40.4845 25.7586 39.561 27.2188 39.088 27.2247L39.0742 27.2489L39.1724 27.2476C40.3886 27.2323 41.5301 26.6649 42.261 25.7093C42.6662 25.1795 43.0517 24.633 43.2015 24.294C42.8154 23.2395 42.1748 21.4821 41.9047 22.0827Z" fill="#F48931"></path> </g> <defs> <clipPath id="clip0"> <rect width="48" height="48" fill="white" transform="translate(4 4)"></rect> </clipPath> </defs> </svg>
     <h1>
        Get Exclusive offers
     </h1>
    </div>
  <div className='flex gap-3 '>
  <input
  type="email"
  className='outline-none border-gray-200 border-1 border py-2 px-1'
  placeholder='Enter your email'
  ></input>
   <button className='rounded-lg py-2 px-3 bg-red-600'>
    Notify
   </button>
  </div>

     
    </div>
  )
}

export default Header3