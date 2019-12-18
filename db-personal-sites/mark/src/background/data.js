

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

    interest.heading = "Growing-Up";
    
    let image = {src:"/assets/img/kingsclere-200.jpg",
                    alt:"The village centre in Kingsclere, a small square with a monument and a road\
                     with house lining each side."};

    
    interest.images.push(image);
   
    
    image = {src:"/assets/img/kingsclereChurch-200.jpg",
                    alt:"The church in Kingsclere, dating from Norman times. The bed bug weather vane symbolises when\
                    King John was bitten by one whilst staying in the village"};

    
    interest.images.push(image);

    interest.narrative = "As a child growing up I spent time both in the South and North of England, with most\
     of my time being spent in the South.\
        <li>Born Hampton Court Hospital 1965 </li>\
        <li>Lake District age 2-4 </li>\
        <li>Sunbury-on-Thames age 4-6 </li>\
        <li>Kingsclere near Newbury age 6-18</li>\
        The highest education I obtained was A'Levels though I did attend polytechnic";


    interests.push(interest);

   // next item

    interest = new _interest;
    interest.images = [];

    interest.heading = "Work"

    image = {src:"/assets/img/10UpperBankst-200.jpg",
            alt : "Deutsche Banks offices in 10 Upper Bank Street"};
        
    
    interest.images.push(image);

    image = {src:"/assets/img/dbLW-200.jpg",
    alt : "A picture of Deutsche Banks head office in London at London Wall"};


    interest.images.push(image);

    interest.narrative = "After leaving ploytechnic I have had the following roles:\
        <li>Field based IT sales to General Practioners 1987 - 1993  </li>\
        <li>IT sales to retail and businesses 1993 - 1999 </li>\
        <li>Ran a business for 1 year 1999 - 2000 </li>\
        <li>Deutsche Bank 2000 - todate</li>\
        At DB my first 8-10 years were as a software developer working in Visual Basic, ASP.Net\
            and SQL Server, thereafter I have been a manager - project management, business analysis,\
            technical support and ITAO - IT application owner usually all at the same time.";
        
    interests.push(interest);

   
    // next item

    interest = new _interest;
    interest.images = [];

    interest.heading = "Other Points of Interest"

    image = {src:"/assets/img/edward&AmeliePortrait-200.jpg",
            alt : "Two childen Edward and Amelie, Marks children"};
        
    
    interest.images.push(image);

    image = {src:"/assets/img/cheminDeLaLande-200.jpg",
    alt : "a picture of river stone house sandy in colour, it a traditional built French house."};

    
    interest.images.push(image);


    interest.narrative = " A few other things about me\
    <li>I have flown a glider solo </li>\
    <li>I used to be a ski instructor </li>\
    <li>I now live in France, south of Toulouse, close to Spain </li>\
    <li>with my wife, two children, two dogs and a cat</li>";

    interests.push(interest);

};
 
