---
layout: post
title: "2.1_哈囉，jQuery"
date: 2016-09-12 10:00:00 +0800
comments: true
categories: [jQuery-30day]
keywords: "keyword,for"
tags: [jquery]
description: "介紹jQuery的下載方式，及其選擇器(selector)、$符號的基本應用"
demoPic: "/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/00_demo.jpg"
oriVideo_link: "https://tutsplus.com/lesson/hello-jquery/"
---
<div id="intro">
    <img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/00_demo.jpg" class="demo_img" alt="介紹jQuery的下載方式，及其選擇器(selector)、$符號的基本應用">
    <p>介紹jQuery的下載方式，及其選擇器(selector)、$符號的基本應用</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />



## 下載jquery並放至html檔中運作


<p>下載jQuery分為兩種版本<br />(Production 31K和Development 229k) </p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.00.37.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.00.37.77.jpg"/>




<p>下載Development的版本(檔案大，但適合開發用)</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.01.25.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.01.25.77.jpg"/>




<p>將此jQuery函式庫下載至本機電腦，並命名為jquery-1.7.1.js</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.01.42.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.01.42.77.jpg"/>




<p>將此jquery函式庫，存放至lesson-1資料夾中，並拖放至sublime text2運行</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.02.12.67.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.02.12.67.jpg"/>




<p>新增檔案-index.html</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.02.33.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.02.33.77.jpg"/>




<p>建議將放在建議將&lt;script src=&quot;jquery-1.7.1.js&quot;&gt;&lt;/script&gt;放在&lt;body&gt;&lt;/body&gt;間的最底層，是為了先讀完css和html的tag後，在導入js，加快讀取速度</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.03.03.27.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.03.03.27.jpg"/>



## jquery的標籤選擇器(selector)和css的搭配應用


<p>jquery所用的html標籤選擇法和css是一樣的 <br />jquery寫法:&lt;script&gt;jQuery(&#x27;ul li&#x27;)&lt;/script&gt;<br />css     寫法:&lt;style&gt;ul li{color:red;}&lt;/style&gt;</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.04.50.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.04.50.77.jpg"/>




<p>介紹google chrome console對程式碼編輯的支援</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.05.32.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.05.32.77.jpg"/>




<p>//運用console.log()來測試chrome console除錯的功能</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.05.56.90.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.05.56.90.jpg"/>




<p>運行結果，可看到console輸出的log畫面[&lt;li&gt;hello&lt;/li&gt;]</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.06.08.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.06.08.77.jpg"/>




<p>設定&lt;li&gt;顏色為綠色</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.06.56.17.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.06.56.17.jpg"/>




<p>字變為綠色的畫面</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.06.58.87.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.06.58.87.jpg"/>




<p>console的html原始碼檢測，可看到&lt;li&gt;套用新的CSS樣式&lt;li style=&quot;color:green;&quot;&gt;</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.07.09.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.07.09.77.jpg"/>




<p>新增&lt;style&gt;.emphasis{color:green;}&lt;/style&gt;，<br />並用jQuery的addClass套用此類別<br /></p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.07.54.43.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.07.54.43.jpg"/>




<p>一樣得到綠色字的畫面，但此次是&lt;li&gt;套用類別<br />&lt;li class =&quot;emphasis&quot;&gt;</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.08.00.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.08.00.77.jpg"/>



## 介紹jquery簡寫符號及如何從google libraries API取得jquery


<p>jQuery的簡寫符號為$</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.08.21.60.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.08.21.60.jpg"/>




<p>解說可從Google Libraries API取得jquery的連結</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.08.48.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.08.48.77.jpg"/>




<p>複製jQuery在google上的<br />path:http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.09.18.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.09.18.77.jpg"/>




<p>複製至index.html中，取代本地端的jQuery連結，改為<br />&lt;script src=&quot;http://ajax.googleapis.com/ajax/libs/jquery/1.7.1.js&quot;&gt;&lt;/script&gt;</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.09.33.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.09.33.77.jpg"/>




<p>解說window.jQuery=window.$=jQuery;</p>
<img src="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.10.16.77.jpg" alt="/images/coding-note/javascript/jQuery-30day/01-Hello-jQuery/01-Hello-jQuery-0.10.16.77.jpg"/>


