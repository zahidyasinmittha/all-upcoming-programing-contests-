lines = [
    "Stay on top of the latest coding competitions with our comprehensive list of programming contests.",
    "Maximize your coding potential by staying informed with our regularly updated programming contest information.",
    "Never miss out on the opportunity to showcase your coding skills with our list of upcoming programming contests.",
    "Find the next big coding challenge and stay ahead of the competition with our site.",
    "Our site is your go-to source for the most up-to-date information on programming contests.",
    "Join the ranks of top coders by keeping track of the newest programming contests through us.",
    "Be prepared for the next coding competition with our extensive list of programming contests.",
    "Get ahead of the game and stay informed about the latest programming contests on our site.",
    "Put your coding skills to the test with our comprehensive information on upcoming programming contests.",
    "Stay ahead of the curve and find the best programming contests to participate in with our site.",
    "Discover the latest coding opportunities and hone your skills with our programming contest updates.",
    "Our site is your ultimate guide to the most exciting coding challenges and competitions.",
    "Advance your coding career and stay informed about the newest programming contests with us.",
    "Find the perfect coding competition to showcase your skills with our list of upcoming programming contests.",
    "Stay up-to-date on the latest coding events and opportunities with our comprehensive programming contest information.",
    "Maximize your coding experience and stay ahead of the competition with our regularly updated list of programming contests.",
    "Never miss out on the chance to prove your coding prowess with our site's programming contest updates.",
    "Join the community of top coders and find your next coding challenge with our comprehensive programming contest information.",
    "Our site is your one-stop-shop for all the latest updates on programming contests and coding competitions.",
    "Put your coding skills to the test and stay ahead of the curve with our regularly updated list of programming contests.",
    "Stay informed and be ready for the next big coding competition with our up-to-date programming contest information.",
    "Find the best coding opportunities and stay ahead of the game with our site's comprehensive list of programming contests.",
    "Maximize your coding potential and discover new frontiers in coding with our regularly updated information on programming contests.",
    "Join the community of top coders and stay in the know with our list of upcoming programming contests.",
    "Find your next coding challenge and enhance your skills with our comprehensive programming contest information.",
    "Stay ahead of the competition and never miss out on the opportunity to prove your coding abilities with our site's programming contest updates.",
    "Our site is your ultimate resource for finding the most exciting coding events and competitions to participate in.",
    "Stay informed and find the next big coding competition to showcase your skills with our up-to-date programming contest information.",
    "Put your coding skills to the test and find the perfect coding competition to participate in with our site's comprehensive list of programming contests.",
    "Maximize your coding experience and find new coding opportunities with our regularly updated information on programming contests.",
    "Join the community of top coders and discover the latest coding challenges with our comprehensive programming contest information.",
    "Our site is your guide to the most exciting programming contests and coding competitions to participate in.",
    "Stay ahead of the curve and find the perfect coding competition to enhance your skills with our site's comprehensive list of programming contests.",
    "Maximize your coding potential and stay calm","Find the perfect coding competition to showcase your skills with our list of upcoming programming contests.",
    "Stay up-to-date on the latest coding events and opportunities with our comprehensive programming contest information.",
    "Maximize your coding experience and stay ahead of the competition with our regularly updated list of programming contests.",
    "Never miss out on the chance to prove your coding prowess with our site's programming contest updates.",
    "Join the community of top coders and find your next coding challenge with our comprehensive programming contest information.",
    "Our site is your one-stop-shop for all the latest updates on programming contests and coding competitions.",
    "Put your coding skills to the test and stay ahead of the curve with our regularly updated list of programming contests.",
    "Stay informed and be ready for the next big coding competition with our up-to-date programming contest information.",
    "Find the best coding opportunities and stay ahead of the game with our site's comprehensive list of programming contests.",
    "Maximize your coding potential and discover new frontiers in coding with our regularly updated information on programming contests.",
    "Join the community of top coders and stay in the know with our list of upcoming programming contests.",
    "Find your next coding challenge and enhance your skills with our comprehensive programming contest information.",
    "Stay ahead of the competition and never miss out on the opportunity to prove your coding abilities with our site's programming contest updates.",
    "Our site is your ultimate resource for finding the most exciting coding events and competitions to participate in.",
    "Stay informed and find the next big coding competition to showcase your skills with our up-to-date programming contest information.",
    "Put your coding skills to the test and find the perfect coding competition to participate in with our site's comprehensive list of programming contests.",
    "Maximize your coding experience and find new coding opportunities with our regularly updated information on programming contests.",
    "Join the community of top coders and discover the latest coding challenges with our comprehensive programming contest information.",
    "Our site is your guide to the most exciting programming contests and coding competitions to participate in.",
    "Stay ahead of the curve and find the perfect coding competition to enhance your skills with our site's comprehensive list of programming contests.",
    "Maximize your coding potential and stay calm"]
    image_links = ["https://cdn.britannica.com/30/199930-131-B3D1D347/computer.jpg"
    ,"https://www.springboard.com/blog/wp-content/uploads/2022/08/programming-skills.png",
    "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
    "https://www.herzing.edu/sites/default/files/2020-09/it_computer_programming.jpg",
    "https://cdn.ucberkeleybootcamp.com/wp-content/uploads/sites/106/2021/03/CDG_blog_post_image_02-850x412.jpg",
    "https://www.herzing.edu/sites/default/files/2020-09/how-to-become-software-engineer.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUtKYw9aahK3Nq4q2uriz1WYrkP-hFa5z3zF4tudZJqqJxsHZlchmh2Spi8vxvU2bzFs&usqp=CAU",
    "https://imageio.forbes.com/specials-images/imageserve/5fd9103fcdfffb8c55b74fb8/Smart-Female-IT-Programer-Working-on-Desktop-Computer-in-Data-Center-System-Control/960x0.jpg?format=jpg&width=960",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9_zVer1g-5LmoH85NA8DOZ2BMciNAt8at3LRSlGygPpGreRieEFMCT6KRDF6ORx00xA&usqp=CAU"]
    function random(a,b){
        let number=Math.random() * (b - a) + a;
        console.log(number)
        return Math.round(number);
     };
let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((v) => {
        return v.json();
    })
    .then((v) => {
        str = "";
        for (x in v){
        let dur=v[x].duration/60;
        let start=v[x].status;
        if(start=="BEFORE")
        start='NO'
        else
        start='YES'
        str+= ` <div class="card " style="width: 22rem; margin:4px;margin-left:1rem;">
                <img class="card-img-top" src="${image_links[random(8,0)]}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${v[x].name}</h5>
                <p class="card-text">${lines[random(53,0)]}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Duration:${dur} minutes</li>
                <li class="list-group-item">Start Time:${v[x].start_time} UTC</li>
                <li class="list-group-item">End Time:${v[x].end_time} UTC</li>
                <li class="list-group-item">Started In 24 Hours:${v[x].in_24_hours}</li>
                <li class="list-group-item">Started:${start}</li>
                </ul>
                <div class="card-body">
                <a href="${v[x].url}" class="btn btn-primary">LINK</a>
                </div>
                </div>`;
                document.getElementById("con").innerHTML=str;
        }
    });
