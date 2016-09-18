---
layout: post
title: "05a_建構header區塊的css"
date: 2016-04-30 14:57:25 +0800
comments: true
categories: ["psd-to-html"]
keywords: "css,psd"
tags: [css,psd]
description: "量測psd圖檔的header區塊的樣式，並逐步轉為css的樣式。並運用註解將各區塊的css分類，以便易於搜尋。"
demoPic: "/images/coding-note/html/psd-to-html/05a_buildCss_header_section/00_demo.jpg"
oriVideo_link: "http://code.tutsplus.com/tutorials/convert-a-warm-cheerful-web-design-to-html-and-css--net-16799#chapter5a"
---
<div id="intro">
    <img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/00_demo.jpg" class="demo_img" alt="量測psd圖檔的header區塊的樣式，並逐步轉為css的樣式。並運用註解將各區塊的css分類，以便易於搜尋。">
    <p>量測psd圖檔的header區塊的樣式，並逐步轉為css的樣式。並運用註解將各區塊的css分類，以便易於搜尋。</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />



## Espresso編輯器即時預覽html


<p>使用Espresso，來編輯html的專案，因為此編輯器提供html的即時預覽的功能，因此不需在瀏灠器和編輯器間不斷來回切換，也不需一直按重新整理。</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.00.24.00.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.00.24.00.jpg"/>




<p>開啟即時預預覽的功能</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.00.42.00.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.00.42.00.jpg"/>



## global css設定


<p>容器用的元件，一律設為 display:block，讓其內部的元素以區塊的方式排列</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.01.30.00.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.01.30.00.jpg"/>




<p>至photoshop中，使用滴管工具，來量測背景顏色(#f8eedf)</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.01.47.00.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.01.47.00.jpg"/>




<p>將剛才量測的顏色設為背景顏色，並設置背景圖片。但會發現背景有問題，背景圖片預設填滿了整個網頁。</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.02.22.00.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.02.22.00.jpg"/>




<p>我們只需要背景圖往橫向的部份填滿即可(x軸)，所以設為repeat-x，可看到背景就會設為我們想要的樣子</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.02.36.00.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.02.36.00.jpg"/>




<p>&lt;header&gt;內的超連結，不需有底線，並設為黑色。只有滑鼠移過時，在顯示底線即可</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.03.07.00.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.03.07.00.jpg"/>




<p>設定段落的文字大小為12px，文字每行間的距離設為18px</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.03.15.80.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.03.15.80.jpg"/>




<p>接下來要設定文字的字體，可到photoshop中，量測原始圖檔的字體為-Verdana</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.03.24.80.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.03.24.80.jpg"/>




<p>設定字體時，除了設定理想中設定的字體(Verdana)，也需考慮使用者的電腦可能沒有該字體，所以也需加入系統預設的字體(如:helvetica , arial , sansserif)</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.03.37.30.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.03.37.30.jpg"/>




<p>設定所有的標題的字體，全部設為大寫，且非粗體</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.04.38.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.04.38.10.jpg"/>




<p>接下來設定標題字的顏色及陰影，量測字顏色為#3da2b4</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.04.50.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.04.50.10.jpg"/>




<p>陰影顏色為#231914</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.05.24.60.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.05.24.60.jpg"/>




<p>完成了h3標題的陰影設定</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.05.34.20.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.05.34.20.jpg"/>




<p>繼續設定其字體大小(24px)和行距(24px)</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.05.50.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.05.50.10.jpg"/>




<p>我們目前以經完成了一些不同類別的css設定，為了觀看上方便，我們需插入分隔用的snippet，來將這些css加以分類</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.05.58.60.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.05.58.60.jpg"/>




<p>插入snippet後，會自動產生分隔用的區塊，並可自行命名該區塊的名稱</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.06.01.90.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.06.01.90.jpg"/>




<p>&lt;li&gt;的左間距設為0，且不需要預設的樣式</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.06.24.20.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.06.24.20.jpg"/>




<p>&lt;ul&gt;也是容器，日後內部的子元件&lt;li&gt;有設背景時，身為其父層的&lt;ul&gt;的背景會被蓋掉，所以設為overflow:hidden來防此這種情況</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.06.43.90.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.06.43.90.jpg"/>




<p>24格的容器需和其內部放置的元件有間隔，所以設其左右內距各為5px</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.07.10.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.07.10.10.jpg"/>




<p>有所多的元件需設定為有圓角的框線，所以將圓角的設定獨立為一個類別.rounded</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.07.36.50.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.07.36.50.jpg"/>



## HEADER的CSS設定


<p>整體的css設定完了，接下來就開始&lt;header&gt;專用的css</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.07.50.100.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.07.50.100.jpg"/>




<p>設定&lt;header&gt;的背景顏色為紅色、防止內部子元件溢出、字顏色為白色</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.08.02.40.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.08.02.40.jpg"/>




<p>可看到目前的&lt;header&gt;容器的分佈範圍</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.08.06.90.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.08.06.90.jpg"/>




<p>接下來開始設定標題的樣式</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.08.26.40.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.08.26.40.jpg"/>




<p>量測標題的陰影顏色(#d09539)</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.08.35.100.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.08.35.100.jpg"/>




<p>並分別設定其內距、陰影、字體大小</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.08.52.90.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.08.52.90.jpg"/>




<p>使用尺規工具量測，可看到內距為-38px，和我們所設的30px相當接近</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.09.14.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.09.14.10.jpg"/>




<p>設定標題超連結的顏色為白色</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.09.51.50.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.09.51.50.jpg"/>



## &lt;NAV&gt;的CSS設定


<p>完成了&lt;header&gt;標題的部份，接下來是&lt;nav&gt;的部份</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.10.03.100.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.10.03.100.jpg"/>




<p>&lt;nav&gt;為父容器，是父容器就要避免子容器溢位的情況發生，所以要設overflow:hidden。設置為靠左浮動、上外距為5px、高度(58px)、行高(line-height)讓文字能垂置對齊</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.10.09.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.10.09.10.jpg"/>




<p>在&lt;li&gt;可設置浮動、間距，但是設定顏色是沒有用的，需在其內部的&lt;a&gt;內設定才有作用</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.11.32.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.11.32.10.jpg"/>




<p>設定&lt;a&gt;的文字大小、顏色、及陰影</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.11.36.80.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.11.36.80.jpg"/>




<p>但此&lt;a&gt;的階層是屬於&lt;header&gt;內的&lt;nav&gt;，所以樣式設定時，寫成header nav a 會較精準</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.13.51.90.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.13.51.90.jpg"/>




<p>&lt;a&gt;的樣式設完後，接著設定此超連結被滑過、選取時的樣式及特效</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.17.11.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.17.11.10.jpg"/>



## SOCIAL ICON的CSS設定


<p>&lt;nav&gt;的部份設完了，接下來是SOCIAL ICON的部份</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.17.26.40.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.17.26.40.jpg"/>




<p>#headSocial需固定在靠上30px，且靠右5px的位置，所以使用absolute來指定放置的位置，以便不受其它元件浮動(float)的影響</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.17.28.60.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.17.28.60.jpg"/>




<p>為了讓其內部的#headSocial能固定於24格的父容器內，需設定24格的容器為relative，不然會跑到父容器之外的位置</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.18.10.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.18.10.10.jpg"/>




<p>確定好#headSocail能指定在固定的位置後，接下來將其內部的&lt;li&gt;設為水平排列</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.18.27.30.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.18.27.30.jpg"/>




<p>可看到目前的#headSocial的排列方式，成功設為水平排列了。但是位置間有點太擠了點</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.18.29.60.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.18.29.60.jpg"/>




<p>為此設定其內部的&lt;img&gt;，浮動向左、左間距為23px、重整時的特效</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.18.53.90.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.18.53.90.jpg"/>




<p>可看到目前的#headSocial看起來就美觀多了，但其內部的&lt;img&gt;需加入滑鼠滑動時的特效，好讓使用者能得到視覺上的回饋，知道這是可點選的超連結</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.18.59.90.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.18.59.90.jpg"/>




<p>設定&lt;img&gt;滑過時，其框線的圓角特效</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.19.08.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.19.08.10.jpg"/>




<p>運行結果，可看到滑過icon時，icon的框線會設為圓型，來產生視覺回饋</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.19.19.90.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.19.19.90.jpg"/>




<p>既然我們只需要框線圓角的特效，就沒必要套用全部的特效了。所以可將all的特效改成-webkit-border就好</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.19.41.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.19.41.10.jpg"/>




<p>就樣就完成了所有圓角化的特效了</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.19.43.90.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.19.43.90.jpg"/>




<p>最後為搜尋框的部份</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.20.23.100.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.20.23.100.jpg"/>




<p>搜尋框為向右浮動，上邊距為19px</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.20.25.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.20.25.10.jpg"/>



## HEADER FORM的CSS設定


<p>運行結果，完成了目前搜尋框的排放位置。但其標題文字的樣式還需設定</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.20.39.100.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.20.39.100.jpg"/>




<p>設定搜尋框標題文字的樣式</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.20.52.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.20.52.10.jpg"/>




<p>完成了搜尋框的標題樣式設定，但搜尋框內的顏色不該是白色的，原始圖檔中是有加入漸層顏色的。</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.21.20.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.21.20.10.jpg"/>




<p>加入搜尋框內的背景漸層，漸層由左上(#247083)至左下(#339aa7)，我們接下來就來看是如何量測這些顏色的</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.22.27.60.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.22.27.60.jpg"/>




<p>運用photoshop的滴管工具，量出了上層的顏色(#247083)</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.22.32.80.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.22.32.80.jpg"/>




<p>量出了下層的顏色(#339aa7)</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.22.37.90.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.22.37.90.jpg"/>




<p>為了確保該漸層在各瀏灠器中都能正確顯示，分別寫入了各主流瀏灠器的漸層寫法，完成了漸層的設定</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.23.34.70.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.23.34.70.jpg"/>




<p>設定該搜尋框的內距、邊線顏色(#206577)、字顏色、左外距</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.23.37.40.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.23.37.40.jpg"/>




<p>經量測可確定邊線顏色為#206577</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.23.48.40.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.23.48.40.jpg"/>




<p>完成了框尋框的所有設定了</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.24.01.60.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.24.01.60.jpg"/>



## #headSocial內icon的滑鼠滑過特效


<p>最後在#headSocial的icon圖片上，修正特效的設定，使其在滑鼠滑過時，能產生白色的邊線，使特效更明顯</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.24.29.20.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.24.29.20.jpg"/>




<p>有用到特效的地方，就要寫入各個瀏灠器運做特效的寫法。</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.26.09.100.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.26.09.100.jpg"/>



## 截取search icon的圖形


<p>最後的部份，讓我們到photoshop抓取搜尋框的放大鏡圖檔</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.26.48.80.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.26.48.80.jpg"/>




<p>另存新檔為-searchIcon.png</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.27.15.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.27.15.10.jpg"/>




<p>將該放大鏡圖檔，做為搜尋框背景圖片的一部份。完成了header的所有部份</p>
<img src="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.28.06.10.jpg" alt="/images/coding-note/html/psd-to-html/05a_buildCss_header_section/05a_buildCss_header_section-0.28.06.10.jpg"/>


