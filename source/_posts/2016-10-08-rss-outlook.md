---
layout: post
title: "Outlook的RSS功能-管理youtube教學影片"
date: 2016-10-8 09:00:00 +0800
comments: true
categories: [e-learning]
keywords: "e-learning"
tags: [e-learning]
description: "你常看youtube上的影片嗎?youtube上的影片學習資源真的很多，但隨著閱讀的量變多，就變得愈難管理。
也許在你看完一部影片後，想將它分類，標示為你已將看過的、難度較高的等等不同分類，以便未來知道自己曾經看過什麼樣內容的影片。
但youtube內建的瀏覽介面，並沒有辦法讓你一目了然的了解自己所設定的分類。
那要如何才能用更有效率的介面，來分類我們所曾經學習過的影片呢?
有的!只要善用youtube提供的RSS API(http://gdata.youtube.com/demo/)，並和outlook合用，就可有效的管理你曾經看過的影片內容。
如下圖，可到到其自訂分類影片的功能，可依自訂資料夾、顏色、日期等來自行分類。
接下來的教學，我會以如何管理youtube上的英文學習資源為範例，來讓大家了解如何達成自訂youtube影片分類的效果。"
demoPic: "/images/software/e-learning/rss-outlook/00_demo.jpg"
---
<div id="intro">
    <img src="/images/software/e-learning/rss-outlook/00_demo.jpg" class="demo_img" alt="你常看youtube上的影片嗎?youtube上的影片學習資源真的很多，但隨著閱讀的量變多，就變得愈難管理。
也許在你看完一部影片後，想將它分類，標示為你已將看過的、難度較高的等等不同分類，以便未來知道自己曾經看過什麼樣內容的影片。
但youtube內建的瀏覽介面，並沒有辦法讓你一目了然的了解自己所設定的分類。
那要如何才能用更有效率的介面，來分類我們所曾經學習過的影片呢?
有的!只要善用youtube提供的RSS API(http://gdata.youtube.com/demo/)，並和outlook合用，就可有效的管理你曾經看過的影片內容。
如下圖，可到到其自訂分類影片的功能，可依自訂資料夾、顏色、日期等來自行分類。
接下來的教學，我會以如何管理youtube上的英文學習資源為範例，來讓大家了解如何達成自訂youtube影片分類的效果。">
    <p>你常看youtube上的影片嗎?youtube上的影片學習資源真的很多，但隨著閱讀的量變多，就變得愈難管理。
也許在你看完一部影片後，想將它分類，標示為你已將看過的、難度較高的等等不同分類，以便未來知道自己曾經看過什麼樣內容的影片。
但youtube內建的瀏覽介面，並沒有辦法讓你一目了然的了解自己所設定的分類。
那要如何才能用更有效率的介面，來分類我們所曾經學習過的影片呢?
有的!只要善用youtube提供的RSS API(http://gdata.youtube.com/demo/)，並和outlook合用，就可有效的管理你曾經看過的影片內容。
如下圖，可到到其自訂分類影片的功能，可依自訂資料夾、顏色、日期等來自行分類。
接下來的教學，我會以如何管理youtube上的英文學習資源為範例，來讓大家了解如何達成自訂youtube影片分類的效果。</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />




<p>本範例的目標為:取得有關engVid.com線上英文家教中的Emma老師的所有教學影片。你可將滑鼠移到該系例影片的作者照片上，出現的網頁連結的最後一段字串，就是作者的名稱了(作者名稱為:EnglishTeacherEmma)。</p>
<img src="/images/software/e-learning/rss-outlook/youtube-rss_01.jpg" alt="/images/software/e-learning/rss-outlook/youtube-rss_01.jpg"/>




<p>取得作者名稱後，接下來請至youtue的API網站(http://gdata.youtube.com/demo/)來取得該教學影片的RSS網址。<br />Youtube的API可依多種不同的方式來取得你想要的影片資料，有依作者、撥放清單、關鍵字、受歡迎度~等等不同分類，我們先來學如何使用作者名稱來取得其RSS資料。<br />分別在以下欄位輸入資料:<br />Number of results:50(將讀取數設為最大值50，不然會依預設值，只有讀入25筆資料)<br />Outpus format:RSS 2.0(由於是要給outlook讀取用，所以設為RSS 2.0)<br />Ordering:Published(依發佈日期來排序，不然會讀入一些很舊的影片，我們希望總是以讀入最新的影片為優先)<br />Author name:EnglishTeacherEmma(剛才在youtube上取得的影片作者名稱)</p>
<img src="/images/software/e-learning/rss-outlook/youtube-rss_02.jpg" alt="/images/software/e-learning/rss-outlook/youtube-rss_02.jpg"/>




<p>依序輸入後，會看到，Resulting URI的欄位後自動產生一串RSS網址(http://gdata.youtube.com/feeds/base/videos?max-results=50&amp;alt=rss&amp;orderby=published&amp;author=englishTeacherEmma)。點選Submit的按鈕後，如果你看到一大串的Response資料出現的話，就代表這個網址是正確的，確定讀得到資料。<br />確定成功後，就把這段網址給複製起來，準備傳至outlook。</p>
<img src="/images/software/e-learning/rss-outlook/youtube-rss_03.jpg" alt="/images/software/e-learning/rss-outlook/youtube-rss_03.jpg"/>




<p>Outllook要加入RSS的方法非常簡單，先在左側欄的RSS上點選滑鼠右鍵，後點選&quot;新增RSS摘要&quot;。</p>
<img src="/images/software/e-learning/rss-outlook/youtube-rss_04.jpg" alt="/images/software/e-learning/rss-outlook/youtube-rss_04.jpg"/>




<p>接下來，貼入剛才所取得的RSS資料網址。</p>
<img src="/images/software/e-learning/rss-outlook/youtube-rss_05.jpg" alt="/images/software/e-learning/rss-outlook/youtube-rss_05.jpg"/>




<p>接下確定後，就可看到所讀入的RSS影片資料了，預設的資料夾名稱為Videos，日後你可自行改為你要的分類名稱。</p>
<img src="/images/software/e-learning/rss-outlook/youtube-rss_06.jpg" alt="/images/software/e-learning/rss-outlook/youtube-rss_06.jpg"/>




<p>依照上述的方法，日後你可以自行加入你有興趣的youtube影片，並加以分類。以我的使用經驗為例，你可看到我所加入的英文學習課程，如對話類:<br />podEnglish(https://www.youtube.com/user/podEnglish)<br />twominenglish(https://www.youtube.com/user/twominenglish)<br />單字片語類:<br />lettalk(https://www.youtube.com/user/learnexmumbai)<br />EnglishTeacherAdam(https://www.youtube.com/user/EnglishTeacherAdam)<br />AlexESLvid(https://www.youtube.com/user/AlexESLvid)<br /><br />並將這些課程，分為介繫詞、不定詞等自訂類別。如果遇到比較難的課程，會以紅色做為標記，日後在去處理。透過這種分類方法 ，你就能很清楚的知道自己曾經讀過什麼，讓未來的你在面對類似的題目時，可從過去讀過的資料來找出答案。<br />擅用youtube上的學習資源，你將會在在資訊爆炸的時代更加的得心應手。</p>
<img src="/images/software/e-learning/rss-outlook/youtube-rss_07.jpg" alt="/images/software/e-learning/rss-outlook/youtube-rss_07.jpg"/>


