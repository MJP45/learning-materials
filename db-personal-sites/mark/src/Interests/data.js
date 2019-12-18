

const interests=[];
let selectedIndex = 0;

class _interest {
    //
    // use a simple constructor without getters/setters as we are creating the content not the user
    //
    constructor(heading, narrative,images){
        this.heading = heading;
        this.narrative = narrative;
        this.images = images;
    };

};




//-------------------------------------------------------------------------------
// initialize the interest array with data for displaying
//-------------------------------------------------------------------------------

const initializeData=()=>{

    let interest = new _interest;
    interest.images = [];

    interest.heading = "Cooking";
    
    let image = {src:"/assets/img/burger-150.jpg",
                    alt:"A picture of burger stacked with bacon,lettuce, tomatoe, relish,\
                             cheese and accompanied with chips and mushrooms"};

    
    interest.images.push(image);

    image = {src:"/assets/img/calamariSalad-200.jpg",
    alt:"an image of a salad comprising of lettuce, melon, tomatoes, red peppers with a dusting of pepper\
    and grated parmesan accompanied by pan fried calamari."};


    interest.images.push(image);

    interest.narrative = "I love cooking, I like to know what goes into my food and take great pride in making food\
    that tastes good.\
    I need to work on the presentation....I am happy to cook all sorts of different cuisines and\
    like to experiment. In the summer months when in France\
    I love to BBQ especially if it involves entertaining. I have a domain name registered called\
    BadBoyMenu, which I have\
    yet to use...maybe after this course..."

    interests.push(interest);

   // next item

    interest = new _interest;
    interest.images = [];

    interest.heading = "Skiing"

    image = {src:"/assets/img/skiing200.jpg",
            alt : "A picture looking down a snowy ski slope,\
                                it is quite steep."};
        
    
    interest.images.push(image);

    image = {src:"/assets/img/skiLift-200.jpg",
    alt : "A picture of a ski lift the person taking the picture is sitting on the chair lift the tips of their\
    skis are visible in the bottom of the frame. There is a drag lift on the left and the chair lift is passing over a\
    piste where some people are skiing"};


    interest.images.push(image);

    interest.narrative = " During the winter months I try to take advantage of one of my passions from my 20's -\
    skiing.\
    Being only an hours drive to the Pyrenees ski resort of St Lary-Soulan it is entirely\
    possible to drive-up\
    in the morning and home again for dinner. I used to work part time at Beckton ski centre\
    where we helped build it and in return they trained me to\
    become a ski instructor.";

    interests.push(interest);

   
    // next item

    interest = new _interest;
    interest.images = [];

    interest.heading = "Photography"

    image = {src:"/assets/img/surfer-200.jpg",
            alt : "A surfer in silhouette on the beach\
            walking away from the sea. The image has a golden tone to it and looks to be a bright day"};
        
    
    interest.images.push(image);

/* 
    image = {src:"/assets/img/cheminDeLaLande-200.jpg",
    alt : "A picture of a river stone house in France. In the foreground is garden with  the house\
    where Mark lives in France"};

    
    interest.images.push(image); */

    image = {src:"/assets/img/AmelieandEdward-200.jpg",
    alt : "A picture of two children stood underneath\
    a cherry tree in blossom. The blossom is pinky white."};

    
    interest.images.push(image);


    interest.narrative = "I became interested in photography circa 2004 and was an avid photographer for a number\
    years. During this time I took many thousands of pictures\
    and rarely went places without a camera. In recent years I don't have the same amount of\
    time of time to indulge myself, but I am looking forward\
    to the time I can pick this up again especially now I have such great landscapes being a\
    stone throw away from the Pyrenean mountains.";

    interests.push(interest);

//next item
    interest = new _interest;
    interest.images = [];

    interest.heading = "Keeping Fit"

    image = {src:"/assets/img/cwGym-200.jpg",
            alt : "A picture of gym with exercise benches and dumbells."};
        
    
    interest.images.push(image);

    image = {src:"/assets/img/cw2-200.jpg",
    alt : "A picture of a gym with a barbell rack and some exercise machines"};

    interest.images.push(image);

    interest.narrative = "Another big part of my life is the gym, I am almost religous in my attendance. I like to workout\
     especially with weights. I think it is important to stay active, I like to think I am making an investment in the\
     health bank! of course there are no guarantees, but I would hate to be sat in a doctors surgery being told bad\
     new and knowing maybe there was something I could have done about it. I also personally feel so much better in\
     myself after having exercised, and not just from the endorphins.";

     interests.push(interest);

};
 
