---
layout: post
title: "06_頁籤切換頁面"
date: 2016-04-30 14:57:25 +0800
comments: true
categories: ["psd-to-html"]
keywords: "js"
tags: [js]
description: "運用javascript，達成點選頁籤，來切換不同頁面的功能。並運用類別判斷是否有開啟js的功能，以便使用不需js的方式來顯示資料。"
demoPic: "/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/00_demo.jpg"
oriVideo_link: "http://net.tutsplus.com/tutorials/site-builds/convert-a-warm-cheerful-web-design-to-html-and-css/#chapter6"
---
<div id="intro">
    <img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/00_demo.jpg" class="demo_img" alt="運用javascript，達成點選頁籤，來切換不同頁面的功能。並運用類別判斷是否有開啟js的功能，以便使用不需js的方式來顯示資料。">
    <p>運用javascript，達成點選頁籤，來切換不同頁面的功能。並運用類別判斷是否有開啟js的功能，以便使用不需js的方式來顯示資料。</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />



## 確認js可以運行


<p>目前頁籤標題的部份，還需要運用javascript，才能達成點按頁籤標題切換頁籤頁面的效果</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.00.32.53.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.00.32.53.jpg"/>




<p>為了完成頁籤點按的功能，需運用jquery，因此在置入jquery.min.js後，在置入自訂的script.js</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.01.08.00.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.01.08.00.jpg"/>




<p>為了確認scripts.js可運作，先寫alert(&#x27;hi&#x27;)來確保js可正確運行</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.01.12.53.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.01.12.53.jpg"/>



## document新增類別js，來區分不同功能的css


<p>為了確保沒有開啟js的瀏灠器也可正常顯示頁籤功能(tab)，需設置有開啟js的和沒開啟js的二種tab顯示方式。因此能運行js的瀏灠器會套用類別名稱className = &#x27;.js&#x27;，用來區分二種樣式的不同。</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.02.22.07.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.02.22.07.jpg"/>



## 新增js變數-ul、tabHeading，用js來代表html物件


<p>開始寫js的部份，程式初始化時(Site.init())，先取得代表頁籤頁面(tabs)的變數</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.03.20.93.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.03.20.93.jpg"/>




<p>先返回html的部份，觀察頁籤頁面(tabs)，所包含的物件有哪些，你會看到它是由3個&lt;ul&gt;所組成(comments、categories、archieves)。程式碼太多的話，可點選最左側的欄位，將程式碼暫時收合，方便觀察</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.03.37.40.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.03.37.40.jpg"/>




<p>可看到程式碼收合後，更能看清楚其架構</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.03.43.93.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.03.43.93.jpg"/>




<p>返回js的編輯畫面， 新增變數ul來代表所有tabs之內的&lt;ul&gt;</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.04.18.20.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.04.18.20.jpg"/>




<p>新增變數tabHeadings，代表頁籤標題</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.04.44.93.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.04.44.93.jpg"/>



## 不顯示tabs之內的&lt;h4&gt;


<p>js可以運作的版本，必需把頁籤頁面中不需要的標題&lt;h4&gt;給隱藏住，我們不需要讓使用者看到多餘的標題。</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.05.10.27.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.05.10.27.jpg"/>




<p>運行結果， 可看到目前的頁籤頁面中，有多餘的標題，那要如何把它們隱藏呢?</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.05.15.20.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.05.15.20.jpg"/>




<p>返回js的編輯畫面， 可以考慮用jquery的remove()的方法，先找到tabs內所有的&lt;h4&gt;再將其移除</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.05.36.47.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.05.36.47.jpg"/>




<p>但直接修改css會更簡單，將.tabs內的&lt;h4&gt;設定為不要顯示。<br />完成了移除不必要標題的功能</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.06.14.93.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.06.14.93.jpg"/>



## 只顯示第一個&lt;ul&gt;，其餘不顯示


<p>接下來，要製做的功能為:隱藏所有的頁籤頁面(除了第一個以外)</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.06.33.00.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.06.33.00.jpg"/>




<p>uls.not(&#x27;:first&#x27;).hide();//除了第一個&lt;ul&gt;之外，其餘都隱藏。<br />此外，故意寫錯，把ul寫成uls，觀察firebug如何顯示錯誤。</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.06.55.87.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.06.55.87.jpg"/>




<p>運行結果， 可看到console的除錯資訊，讓你知道變數寫錯了。</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.07.08.53.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.07.08.53.jpg"/>




<p>將變數全部修正為uls</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.07.14.93.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.07.14.93.jpg"/>




<p>運行結果， 完成了只顯示第一個頁籤頁面，而其餘都隱藏的功能。不過，這是jquery的寫法，我們可以單單用css就可完成此功能了，接下來， 來用css的寫法來完成此功能。</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.07.19.93.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.07.19.93.jpg"/>




<p>先將所有.tab內的&lt;ul&gt;都設為不要顯示，在加入只有第一個&lt;ul&gt;需顯示的功能</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.07.59.87.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.07.59.87.jpg"/>




<p>但是這樣要寫二行，太麻煩了。可將此二行的功能整理為一行就好。</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.08.33.13.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.08.33.13.jpg"/>




<p>完成後，替此段css留段註解。<br />完成了只顯示第一個頁籤頁面的功能。</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.08.44.87.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.08.44.87.jpg"/>



## 完成點選頁籤標題，來切換頁面的功能


<p>接下來， 要完成點選頁籤標題，來切換頁面的功能</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.08.59.73.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.08.59.73.jpg"/>




<p>委派&lt;li&gt;來監聽click事件，新增變數li來代表目前被點選的&lt;li&gt;</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.09.34.80.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.09.34.80.jpg"/>




<p>新增變數hash，用來代表所點選的超連結的路徑</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.09.45.87.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.09.45.87.jpg"/>




<p>變數設完後，下一步為:改變目前所點選的&lt;li&gt;的樣式，讓使用者知道目前所點選的是哪一個&lt;li&gt;</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.09.54.80.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.09.54.80.jpg"/>




<p>利用siblings()來取得同一層的所有&lt;li&gt;，用removeClass()先把目前的樣式給移除掉</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.10.34.80.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.10.34.80.jpg"/>




<p>使用end()來跳回目前點選的&lt;li&gt;，並用addClass()來加入樣式。完成了設定點選標題，設定標題樣式的功能。</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.10.58.00.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.10.58.00.jpg"/>




<p>接下來， 要取得目前所點選的超連結，以便切換到所對應的頁籤頁面</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.11.27.00.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.11.27.00.jpg"/>




<p>hash變數代表目前所點選的超連結路徑</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.11.36.80.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.11.36.80.jpg"/>




<p>接下來， 要顯示所對應的頁籤頁面</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.12.20.93.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.12.20.93.jpg"/>




<p>先隱藏所有的uls，用filter()來過濾出目前所點選的頁面，並只顯示目前所點選的頁面。</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.12.29.93.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.12.29.93.jpg"/>




<p>如果只用show()的話，就只會單純的顯示頁面。<br />因此，可以運用特效函數，如:fadeIn()造成淡入的效果，來使頁面更加活潑</p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.13.26.93.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.13.26.93.jpg"/>




<p>由於點選超連結時，系統會有預設的動作。這些預設的動作會影響到我們自製的點選動作，所以使用e.preventDefault();來將預設的動作關閉。<br /></p>
<img src="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.13.48.60.jpg" alt="/images/coding-note/html/psd-to-html/06_build  the tabbing system with javascript/06_build  the tabbing system with javascript-0.13.48.60.jpg"/>


