//jshint esversion:7
const button = document.querySelector('button');
button.addEventListener('click', () => {

   function genereazaCuvint() {
      var text = "";
      var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 3; i++)
         text += possible.charAt(Math.floor(Math.random() * possible.length));


      return text;
   }
   getRandomVid = function (key, phrase, callback) {
      var cuvintGen = genereazaCuvint();
      phrase = "+" + phrase + "+";
      var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=' + cuvintGen + phrase + '&regionCode=IN&key=' + key;
      fetch(
         url, {
         method: "GET"
      }).then(response => response.json())
         .then(json => caller(json))
         .catch(err => console.log(err));


   };
   function callerm() {

         let dataset = ["danny","","", "radbrad", "pewd", "help let me go", "","MR.BREAST", , "", "", "", "", "", "", "", "", "NETFLIX LATEST","","IKON KPOP","","","DOLPHIN MAN","KILLER","","SPACE","","LET ME LIVE","","ED SHERAN","","PRANK", "", "", "", "", "", "", "", "","CARRY MINATI","TIKTOK ROAST", "","CRINGE","MEME", "", "","CODING","WWE","UI","mafia","messi", "danny gonzales","greg","tech","laptop","gucci","fashion","makeup","brothers","trailer game", "", "", "", "", "", "UX","KID","JOHNY","KIDS DIANA", "","LIKE","CANAL KONDZILLA","", "", "", "", "","WWE", "","WWE","WILDLIFE","TIGER","DOG CUTE", "","CAT CUTE","HINDI", "","ASHISH","PEWDIPIE","life of a","mjo","music","vevo",  "","justin bieber", "", "", "", "", "", "", "","kpop", "","asmr","food","cook","momo", "","indian food", "", "", "", "", "","diy","5 min","quantum","markiplier","joe rogan", "", "", "", "", "","money","rich", "", "dude","dude perfect","ryan higa","og youtubers","trick shots","tiktok roast","tiktok funny","","","","","","", "", "", "", "","","", "", "", "","poor vs", "", "", "", "","motivation video","self help", , "", "", "", "", "", "", "", "", "", "monk motivation","new movie full","subtitle south movie","malyali hindi dub ","kannada hindi dub","","messi", "", "", "", "", "", "", "", "", "stock market","trading","money","earn online","coffezila","white","black","education","kids","ben10","anime","dragon","","","","powerpuff", "", "", "", "", "", "", "", "", "", "", "", "","ronaldo","cricket", "", "", "", "", "", "", "","cricket aus", "", "", "", "", "", "", "", "","indian cricket", "", "", "", "", "", "", "", "","neymar","best", "","politics","Bihar","Khesari song","Rahul gandhi funny compilation", "", "", "", "","most","linus tech","mkbhd","unbox","unbox therepy","lewlater","joe raegan podcast","ipl","cricket best","goat","","footbALL","","skills football","funny", "", "", "","memes","rap", "", "memes", "", "", "", "", "", "", "","ign","reviews","movie rating","game rating","esports","vevo","pop","rock","fortnite","pubg","fee","freefire", "", "", "","helo","kittens","most view","most sad","angry","politics","news","aajtak", "", "", "", "", "", "", "","abp","language", "", "", "", "", "", "", "", "", "", "", "","religion","baby shark", "", "", "", "", "movie trailer", "", "", "", "", "", "", "", "", "", "bollywood", "", "", "", "", "bollywood","", "", "", "", "", "", "", "hollywood", "", "", "", "", "", "", "", "","end of ","movie trailer","avengers", "", "", "", "", "coding", "", "", "","kung fu","karate","avengers","marvel", "", "", "", "", "", "", "", "", "", "","deadpool","spiderman","batman", "baby", "songs", "bhojpuri", "", "", "", "", "", "","","bollywood music", , "", "", "", "", "", "", "", "", "old", "music", "machine", "", "", "","ninja","lets play","book review","summary","","","","","esports","football game","fifa","","","","","controvery","", "", "", "", "car","kpop","google is evil","bb","indian youtuber","best indian","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","National Geographic","Discovery channel","Lion","Tiger","Animals","Peacock","Animals hunting compilation"];

         let mychoice = dataset[Math.floor(Math.random() * dataset.length)];
         // console.log(mychoice);
         getRandomVid("AIzaSyCu6FFSu7onaudnUehscfDqS9TR2NQ6W60", `${mychoice}`);
      }
      callerm();




   function caller(body){
      var obj = body;
         obj = obj.items;
         obj = obj.filter(function (obj) {
            return obj.id.kind == 'youtube#video';
         });
         var chosen = obj[Math.floor(Math.random() * obj.length)];

      const Finallink = "https://www.youtube.com/watch?v=" + JSON.parse(JSON.stringify(chosen)).id.videoId;
      window.open(Finallink);
         //console.log(Finallink);

   }

});