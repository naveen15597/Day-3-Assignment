
//Resume Json
let resumeJSON = [{
    "basics": [{
      "name": "Naveen G",    
      "email": "naveen15597@gmail.com",
      "phone": "9092517017",
      "degree": "B.Tech Inofrmation Technology",      
      "summary": "Talented Software Developer bringing more than 1.10 years of experience in software industry.Demonstrated excellent skills in C#,.NET, DB Design. True team player with strengths in adaptability and accuracy",
      "location": {
        "address": "132, pattinathar st, new kamaraj nagar",
        "postalCode": "600039",
        "city": "Chennai",
        "countryCode": "India",
        "region": "Tamil Nadu"
      },      
    }],
    "work": [
      {
        "company": "Infosys",
        "position": "Systems Engineer",
        "website": "www.infosys.com",
        "startDate": "09-09-2019",
        "endDate": "Currently working",    
        "Project": [
          "Health Care Web applocation"
        ]
      }
    ],    
    "education": [
      {
        "institution": "Velammal Institute Of Technology",
        "area": "B.Tech Inoformation Technology",        
        "startDate": "Jun 2015",
        "endDate": "May 2019",
        "cgpa": "7.75"        
      }
    ],
    "awards": [
      {
        "title": "Insta Award",
        "date": "Mar 2021",
        "awarder": "Manager",
        "summary": "For quick adaptation to the environment and showing elegant performance."
      }
    ],    
    "skills": [
      {
        "name": "Java / C#, Angular / HTML / CSS, SQL Server, Object Oriented Programming and Design(OOPS)",        
      }
    ],
    "languages": [
      {
        "language": "Tamil, English, Malayalam",
        "fluency": "Tamil"
      }
    ],
    "interests": [
      {
        "name": "Sports",
        "keywords": "Cricket"          
      }
    ]
  }];
   
//for of
for(let i of resumeJSON)
{      
    //for in
    console.log("Basic information ");    
    for(let j in i.basics)
    {
        console.log(i.basics[j]);
    }

    //forEach
    console.log("Work information ");    
    i.work.forEach(element => {
        console.log(element);
    });

    console.log("Awards ");
    i.awards.forEach(element => {
    console.log(element);
    });

    console.log("Education details ");
    i.education.forEach(element => {
        console.log(element);
    });

    console.log("Skill set ");
    i.skills.forEach(element => {
        console.log(element);
    });

    console.log("Languages known ");
    i.languages.forEach(element => {
        console.log(element);
    });

    //for loop
    console.log("Interest ");    
    for(let j=0;j<i.interests.length;j++)
    {
        console.log(i.interests[j]);
    }
}