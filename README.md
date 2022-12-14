## Alex Mills
**User Interface 1**


### Project 1: Smart Water Bottle


**Sketches:**   
<img width="621" alt="image" src="https://user-images.githubusercontent.com/43217465/196078337-a264eef5-d83c-4163-96a2-d1e9d2e785ab.png">
<img width="618" alt="image" src="https://user-images.githubusercontent.com/43217465/196078401-18b84401-320a-4a0b-861c-b525e7974fc0.png">
<img width="611" alt="image" src="https://user-images.githubusercontent.com/43217465/196078480-11ccd982-6f4a-4e0b-bf1c-fc960fbe355a.png">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/43217465/196078570-32c42b3d-f1b0-4bd0-b5dc-cb36b9149391.png">
<img width="618" alt="image" src="https://user-images.githubusercontent.com/43217465/196078659-9e91123f-8d2d-43df-83ac-5c153458bcaa.png">  
Note: In the final design implementation, I decide to make the screen vertical along the side of the bottle instead of wrapped around the top.


**Requirements and Interview Findings:**   
At first, the list  of requirements for the water bottle were very long and included many features that were very unnecessary. By interviewing potential users, we were able to greatly refine our list of goals and prioritize feautures.  The most helpful questions were "What do you wish your water bottle could do that it currently doesn’t?" and "What experience have you had with smart products? What issues have you had? What did you like?". The users agreed that tracking water intake was the number one thing that they wished their curret water bottle could do. They also expressed that they would want to know when they need to clean their water bottle, have easy to charge and long-lasting products, and simple and intuitive products. My final list of requirements were based on the goals for my water bottle were for it to display basic information such as date and time and daily hydration goal progress, and have all of the more long-term settings such as age and weight are controlled from the app.  

Product Assumptions:
- The water bottle will have a sensor that measures the water level and temperature.  
- The bottle will contain a temperature control system to heat or cool your beverage as desired.  
- Bluetooth and connectivity to smart watches will be built-in.  
- The bottle will be made from easy to clean, dishwasher-safe materials.  
- All electronic components will be water-proof and dishwasher-safe.    

UI Design Requirements:
- Water level must be easy to check - can be immediately displayed to the user when UI is activated   
- The user will be reminded when they need to drink water. 
- Track and update user on their hydration level 
- Notify user when bottle needs to be cleaned 
- Allow user easy access to check battery level and notify user when the bottle needs charging 
- Only information relevant to a user’s current hydration level will be displayed on the bottle -  all historic data will be saved on related app 
- Other devices, such as phone and fitness app, will sync to bottle and simultaneously track hydration goal progress and notify user  


**Interface Description:**      
The water bottle screen is designed to run from the top to the bottom of the side of the bottle. It has been designed to have limited interactivity since my intention is for it to be mostly read-only. This is to the user avoid accidently pressing the buttons when carrying or washing their smart bottle. The bottle displays the time and date, battery percentage, daily hydration intake, and water temperature. The only setting that can be changed directly from the water bottle is the temperature, while other settings that are less likey to be changed often can be found in the mobile app. Below is the temperature control slider on the bottle UI:  
<img width="266" alt="image" src="https://user-images.githubusercontent.com/43217465/196067932-8dafc30b-81de-4746-a416-593aa7a35110.png">. 

 The mobile app settings include the user's health settings that determine their daily hydration goal and the bottle cleaning status. When the user updates their weight and age group, their daily hydration goal will be calculatedand updated in both the mobile app and on the water bottle screen. On the left below is the component on the mobile app where you can edit and view your current health stats and hydration goal, and on the right is the daily hyrdation goal tracker on the water bottle:   
 <img width="298" alt="image" src="https://user-images.githubusercontent.com/43217465/196067836-62bc4dd4-e4a3-46ae-9217-e19135dd1022.png"> <img width="286" alt="image" src="https://user-images.githubusercontent.com/43217465/196067849-e00edb9b-f4eb-4822-979d-fcf3a8b5e8f2.png">

The bottle clean status displays whether the bottle is dirty or clean. After a certain period of time, the status will switch from "Clean" to "Dirty!". The user must click the reset button once they wash their bottle to return it to the clean status. The time period is currently only 10 seconds so the functionality can be demonstrated, but would preferable be a week for a real use-case.<img width="295" alt="image" src="https://user-images.githubusercontent.com/43217465/196067768-01a664c2-4aa9-4342-a89c-715df9af9e45.png">
<img width="284" alt="image" src="https://user-images.githubusercontent.com/43217465/196076113-8f4abc1a-0301-4720-a11e-62b71f22f984.png">


**Demo Video:**  
https://streamable.com/atknb8 

**Link to Source Code:**  
https://github.com/alexjmills/projects/tree/main/UI%20Project%201

