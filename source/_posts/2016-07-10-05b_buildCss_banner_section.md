---
layout: post
title: "05b_banner"
date: 2016-04-30 14:57:25 +0800
comments: true
categories: ["psd-to-html"]
keywords: "css,psd"
tags: [css,psd]
description: "建立banner，設計可隨內文增多而延展的背景。
Breadcrumbs(麵包屑的應用)，以及用web developer工具修改細部css。"
demoPic: "/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/00_demo.jpg"
oriVideo_link: "http://code.tutsplus.com/tutorials/convert-a-warm-cheerful-web-design-to-html-and-css--net-16799#chapter5b"
---
<div id="intro">
    <img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/00_demo.jpg" class="demo_img" alt="建立banner，設計可隨內文增多而延展的背景。
Breadcrumbs(麵包屑的應用)，以及用web developer工具修改細部css。">
    <p>建立banner，設計可隨內文增多而延展的背景。
Breadcrumbs(麵包屑的應用)，以及用web developer工具修改細部css。</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />



## #banner-wrap背景延伸


<p>接下來開始進行BANNER的部份</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.00.28.60.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.00.28.60.jpg"/>




<p>在PSD的原始圖內解說，當內文超過原定範圍時，背景該如何自動延伸</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.00.45.60.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.00.45.60.jpg"/>




<p>banner-wrap負責放背景、banner負責放內文</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.00.55.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.00.55.00.jpg"/>




<p>設定為clear:both，來確保其它層的物件不會應浮動的關係而移到banner層</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.01.15.70.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.01.15.70.jpg"/>




<p>可看到header層的物件，都能固定在預定的位置，而不會跑到banner層來</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.01.19.40.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.01.19.40.jpg"/>




<p>試著在#banner內設置背景，看會有何問題</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.01.47.30.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.01.47.30.jpg"/>




<p>可看到背景不應設在#banner層，因背景不只有24格而已，而是會佔滿整個網頁，所以背景應設在#banner-wrap層才對</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.01.51.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.01.51.00.jpg"/>




<p>因此，將清除浮動和背景的設定，設至在#banner-wrap中</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.02.09.90.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.02.09.90.jpg"/>




<p>運行結果，可到到即使新增一堆內文，背景也會隨之延伸</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.02.27.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.02.27.00.jpg"/>




<p>為了使#banner-wrap和#banner之間留一點間距，設置其內距patting-bottom:15px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.02.47.60.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.02.47.60.jpg"/>



## #banner的背景和框線(border)


<p>#banner-wrap的外框線也是有顏色的，至photoshop中量取其邊線的顏色(#bba67b)</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.03.00.20.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.03.00.20.jpg"/>




<p>#banner-wrap的部份設置完畢，接下來設置#banner的背景圖片</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.03.56.80.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.03.56.80.jpg"/>




<p>背景顏色是正確的，但是正正方方的不好看，所以因將其邊線設置圓角</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.00.80.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.00.80.jpg"/>




<p>在#banner加入自訂的圓角類別-rounded</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.09.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.09.00.jpg"/>




<p>運行結果，可看到#banner有圓角框線了。但是#banner和header區的&lt;nav&gt;太接近了</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.10.90.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.10.90.jpg"/>



## #banner和&lt;header&gt;的內距(padding)


<p>因此將#banner外距設為45px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.29.30.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.29.30.jpg"/>




<p>但設置完margin-top後，卻發現背景有問題，竟然出現了#banner-wrap的背景</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.34.10.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.34.10.jpg"/>




<p>改為內距padding-top，在來觀察背景問題解決了沒</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.43.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.43.00.jpg"/>




<p>運行結果，可看到padding-top解決了背景問題</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.45.60.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.45.60.jpg"/>




<p>背景的間距問題最好是集中在#banner-wrap內，因為它是專門負責放背景的，所以將padding-top從#banner移到#banner-wrap內</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.53.60.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.53.60.jpg"/>




<p>運行結果，可看到背景依然正確</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.54.70.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.04.54.70.jpg"/>




<p>#banner-wrap的部份設置完畢，接下來設置#banner的內容。首先，需設置其標題的內距，所以至photoshop中，量測其上內距、左內距</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.05.16.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.05.16.00.jpg"/>




<p>將#banner的上下內距設為50px，左右內距設為40px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.05.31.30.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.05.31.30.jpg"/>




<p>運行結果，可看到完成了內距的設定</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.05.38.40.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.05.38.40.jpg"/>



## #banner的寬度


<p>#banner的寬度需設為880px，因為24格的960寬度為880px+左右外距(40px*2)，所以#banner實際上的寬度只有880px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.06.25.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.06.25.00.jpg"/>




<p>並設定文字顏色為白色，並設置排列為relative，好確保內部元件如要設置為absolute時，只會在#banner區內移動，而不會跑到其它層</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.06.31.80.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.06.31.80.jpg"/>




<p>運行結果，可看到顏色被成功設置了</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.06.34.40.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.06.34.40.jpg"/>



## firebug debug css


<p>故意將color的css給寫錯，看看要如何debug</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.07.21.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.07.21.00.jpg"/>




<p>在firebug中檢視目前套用在&lt;h2&gt;上的css</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.08.06.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.08.06.00.jpg"/>




<p>可看到沒有出現剛才故意打錯的color部份的css</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.08.31.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.08.31.00.jpg"/>




<p>經過這個實驗，我們就可了解以後css錯誤時，該如何檢查了。因此我們再量測正確的color值，修正color的錯誤</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.09.02.10.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.09.02.10.jpg"/>



## #banner之內的&lt;img&gt;、&lt;p&gt;、&lt;button&gt;的設定


<p>#featured是用來放置#banner內2張圖片的區塊，將其指定為在#banner內的絕對位置，靠右40px、靠上35px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.10.27.10.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.10.27.10.jpg"/>




<p>圖片是排好了，但是和文字的位置太接近了</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.10.43.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.10.43.00.jpg"/>




<p>至photoshop中量測，可發現文字距離右邊界的間距為517px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.11.25.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.11.25.00.jpg"/>




<p>所以將標題和文字，設為離右內距517px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.11.32.60.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.11.32.60.jpg"/>




<p>運行結果，可看到文字和圖片間的間距看起來不會這麼擠了</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.11.34.80.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.11.34.80.jpg"/>




<p>接下來，設定按鈕間的間距為20px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.12.13.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.12.13.00.jpg"/>




<p>至photoshop中量測，可發現原始設計距離為29px，和我們剛才輸入的20px差不多，完成了按鈕的間距設定</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.12.17.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.12.17.00.jpg"/>




<p>接下來，設定#featured內，那2張圖片間重疉距離。由於要使第1張圖可指定位移位置，設為relative、靠左160px、靠上14px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.13.26.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.13.26.00.jpg"/>




<p>可看到第一張圖經位移後，重疉一部份到第2張圖上了</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.13.28.50.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.13.28.50.jpg"/>




<p>讓我們回到photoshop中，仔細看這2張圖片間的關係(有陰影、且第一張圖蓋住了第2張圖的一部份)</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.13.38.10.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.13.38.10.jpg"/>




<p>因此，在第一張圖設置陰影</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.14.13.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.14.13.00.jpg"/>




<p>運行結果，可看到陰影被成功設置了</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.14.19.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.14.19.00.jpg"/>




<p>為了確保所有瀏灠器都能運行陰影，寫入各個瀏灠器的陰影css的寫法，完成了圖片陰影的設置</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.14.33.40.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.14.33.40.jpg"/>



## breadcrumbs的背景漸層、z-index、圓角


<p>在PSD檔中，解釋導覽列(breadcrumbs)的部份</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.14.40.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.14.40.00.jpg"/>




<p>開始寫BREADCRUMBS的css部份，由於BREADCRUMBS為#banner的子階層，我們使用/**/來做為子階層的標記</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.15.05.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.15.05.00.jpg"/>




<p>在psd檔中，檢測出該導覽列的背景是有漸層的，因此先量測背景顏色(#257386)</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.15.15.90.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.15.15.90.jpg"/>




<p>量測完後，加入背景的顏色-background:#257386</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.15.31.70.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.15.31.70.jpg"/>




<p>漸層為由上至下分佈，所以先量測上面的顏色(#298192)</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.15.38.70.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.15.38.70.jpg"/>




<p>在量測下面的顏色(#247184)</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.02.20.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.02.20.jpg"/>




<p>在將漸層顏色依序寫入css中</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.10.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.10.00.jpg"/>




<p>漸層設好了，但是這個導覽列太窄了，應該將高度加高一點</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.14.80.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.14.80.jpg"/>




<p>因此設其行高(line-height)為43px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.20.50.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.20.50.jpg"/>




<p>但此導覽列(#breadcrumbs)的行高加高後，有點檔住了#banner的咖啡色背景，所以應該降低導覽列的堆疉順序(z-index)</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.24.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.24.00.jpg"/>




<p>為了設置z-index，需指定排列方式為relative，在將z-index設為2</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.49.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.49.00.jpg"/>




<p>運行結果，設了z-index後，也是沒有作用。原因是因為我們尚為設置#banner的z-index</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.58.60.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.16.58.60.jpg"/>




<p>將#banner的z-index設為3(因為#breadcrumbs的值為2，需設的比它大一層才行)</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.17.12.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.17.12.00.jpg"/>




<p>我們希望導覽列(#breadcrumbs)的上端部份呈現一點點被#banner蓋住的效果，所以將#breadcrumbs的上邊界(top)設為-6px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.17.27.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.17.27.00.jpg"/>




<p>運行結果，#banner和#breadcrumbs的重疉問題被解決了，但是加一點圓角會好看一些</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.17.34.10.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.17.34.10.jpg"/>




<p>所以將#breadcrumbs加入了自訂的圓角設定(rounded)</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.17.46.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.17.46.00.jpg"/>




<p>運行結果，是有圓角了，但沒有對齊好，而且字和左邊界的距離太近了</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.17.49.90.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.17.49.90.jpg"/>




<p>因此，設定上下內距為0且左右內距為40px，來讓字和邊距且有點距離。並且設定#breadcrumbs的寬度和#banner一樣都為880px，來和#banner對齊</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.11.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.11.00.jpg"/>




<p>運行結果，可看到成功對齊了</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.12.70.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.12.70.jpg"/>




<p>再來為其文字加入陰影</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.36.20.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.36.20.jpg"/>




<p>運行結果，陰影是設好了，但是超連結的文字顏色需統一為白色</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.39.10.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.39.10.jpg"/>




<p>設定超連結的文字為白色且為粗體</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.53.50.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.53.50.jpg"/>




<p>運行結果，完成了#breadcrumb內的所有文字設定了</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.56.30.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.56.30.jpg"/>



## 在瀏覽器內修改css


<p>目前文字和右邊界的距離是根據psd檔所設計的間距(517px)，但有時psd檔的設計和實際網頁輸出時的情形會略有不同，所以應根據實際網頁的情況來決定距離為多少較美觀</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.59.90.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.18.59.90.jpg"/>




<p>因此將右內距改為400px</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.19.13.30.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.19.13.30.jpg"/>




<p>運行結果，右內距改為400px後的效果</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.19.15.30.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.19.15.30.jpg"/>




<p>其餘還有許多排版上的細節，可切換至firebug，檢示其原始碼，可看到每個html tag，而其右側所對應的Layout排版資訊，可直接修改如padding、margin的數值</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.19.39.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.19.39.00.jpg"/>




<p>要觀察各物件間有無對齊，可使用miscellaneous工具的display Rule的功能，來產生檢查排版用格線</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.19.49.10.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.19.49.10.jpg"/>




<p>運用此格線比對時，可發現標題和圖片的上邊界不一樣</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.19.54.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.19.54.00.jpg"/>




<p>此時打開firebug，再微調上邊界，使其對齊</p>
<img src="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.20.14.00.jpg" alt="/images/coding-note/html/psd-to-html/05b_buildCss_banner_section/05b_buildCss_banner_section-0.20.14.00.jpg"/>


