!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.be=t())}(this,function(){"use strict";var e=[{locale:"be",pluralRuleFunction:function(e,t){var a=String(e).split("."),n=Number(a[0])==e,o=n&&a[0].slice(-1),r=n&&a[0].slice(-2);return t?2!=o&&3!=o||12==r||13==r?"other":"few":1==o&&11!=r?"one":o>=2&&o<=4&&(r<12||r>14)?"few":n&&0==o||o>=5&&o<=9||r>=11&&r<=14?"many":"other"},fields:{year:{displayName:"год",relative:{0:"у гэтым годзе",1:"у наступным годзе","-1":"у мінулым годзе"},relativeTime:{future:{one:"праз {0} год",few:"праз {0} гады",many:"праз {0} гадоў",other:"праз {0} года"},past:{one:"{0} год таму",few:"{0} гады таму",many:"{0} гадоў таму",other:"{0} года таму"}}},month:{displayName:"месяц",relative:{0:"у гэтым месяцы",1:"у наступным месяцы","-1":"у мінулым месяцы"},relativeTime:{future:{one:"праз {0} месяц",few:"праз {0} месяцы",many:"праз {0} месяцаў",other:"праз {0} месяца"},past:{one:"{0} месяц таму",few:"{0} месяцы таму",many:"{0} месяцаў таму",other:"{0} месяца таму"}}},day:{displayName:"дзень",relative:{0:"сёння",1:"заўтра",2:"паслязаўтра","-2":"пазаўчора","-1":"учора"},relativeTime:{future:{one:"праз {0} дзень",few:"праз {0} дні",many:"праз {0} дзён",other:"праз {0} дня"},past:{one:"{0} дзень таму",few:"{0} дні таму",many:"{0} дзён таму",other:"{0} дня таму"}}},hour:{displayName:"гадзіна",relativeTime:{future:{one:"праз {0} гадзіну",few:"праз {0} гадзіны",many:"праз {0} гадзін",other:"праз {0} гадзіны"},past:{one:"{0} гадзіна таму",few:"{0} гадзіны таму",many:"{0} гадзін таму",other:"{0} гадзіны таму"}}},minute:{displayName:"хвіліна",relativeTime:{future:{one:"праз {0} хвіліну",few:"праз {0} хвіліны",many:"праз {0} хвілін",other:"праз {0} хвіліны"},past:{one:"{0} хвіліна таму",few:"{0} хвіліны таму",many:"{0} хвілін таму",other:"{0} хвіліны таму"}}},second:{displayName:"секунда",relative:{0:"now"},relativeTime:{future:{one:"праз {0} секунду",few:"праз {0} секунды",many:"праз {0} секунд",other:"праз {0} секунды"},past:{one:"{0} секунда таму",few:"{0} секунды таму",many:"{0} секунд таму",other:"{0} секунды таму"}}}}}];return e});