const {writeFileSync} = require("node:fs")
let vacationTypeDetail = [
    {
        title:"All-Inclusive Vacation Packages: Leave Your Worries and Wallet Behind",
        text:"Whether you're looking for a romantic escape, an adventure with friends, or a memorable family vacation, we’ve got all-inclusive getaways with your name on it. Between gourmet dining, thrilling activities, and endless entertainment for everyone – including kids clubs at select resorts – we’re here to craft your complete all-inclusive package at one great price. Oasis Travel agents are experts in the destinations you seek, so pack everything but your worries and indulge with us.",
        imageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/all%20inclusive-hero%20(1).jpg",
        detailTitle:"Here’s What’s Included in an All-Inclusive Vacation Package—The Oasis Travel Way",
        detailText:'<div class="field--item"><p class="text-start font-monospace">Simply put, a lot. At an all-inclusive resort, you pay one flat price for your room, all gourmet meals and drinks (including premium cocktails). But, that’s just the beginning. Rolled into the deal are a host of activities, like water sports, tennis, golf, cooking classes, yoga, wine tastings, entertainment programs, kid camps and teens clubs.</p><p class="text-start font-monospace"><strong>The Oasis Travel Difference:</strong> We partner with top resorts to bring you My Time, a set of exclusive perks such as, express check-in/out, welcome gifts, and spa or resort credits at no additional cost.</p></div>',
        detailImageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/all%20inclusive-c.png",
        urlPath:"all-inclusive"
    },
    {
        title:"The Best Family Vacations Last Forever",
        text:"You’ll agree, family vacations last much longer than the trip. Some moments are captured and framed, while others resurface as stories that are shared over and over again. Which makes planning that perfect getaway with the kids so worth it. Whether you’re looking at a family resort or a vacation package in an exotic country, our Oasis Travel consultants will guide you with their in-depth knowledge of places that offer multigenerational fun. So, let’s start exploring.",
        imageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/family-a.jpg",
        detailTitle:"All-inclusive Vs. Customized Family Vacation Packages",
        detailText:'<div class="field--item"><p class="text-start font-monospace">Oasis Travel Spoiler Alert: Both are time-tested and family-approved. It’s just a matter of what you’re looking for in your next trip.</p></div>',
        detailImageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/family-c.png",
        urlPath:"family"
    },
    {
        title:"Adults-Only Vacations: A Kid-Free Escape",
        text:"Some of the world’s best resorts are kid-free, so you’ll have more time to reconnect, play, relax, or unwind. Adult vacation packages let you enjoy some time away from the bustle, noise, and needs of families, so you can experience more grown-up options—from time at the casino to unique distillery and winery tours. Let our resorts be your first resort when it comes to getting a little time away from the kids.",
        imageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/adult-only-A.jpg",
        detailTitle:"Looking for Some Romance on Your Next Trip? Let Oasis Travel Hook You Up",
        detailText:'<div class="field--item"><p class="text-start font-monospace">Oasis Travel Spoiler Alert: Both are time-tested and family-approved. It’s just a matter of what you’re looking for in your next trip.Fall in love with room upgrades, spa credits, and insider experiences at our adults-only resorts. With My Time, speed everything up with expedited early check-in, so that you can slow down and enjoy incredible room upgrades, spa, and food credits. Get access to exclusive services like your own concierge, private transfer, reserved cabanas, Wi-Fi access, and in-room gifts. Once you’re at your destination, enjoy personalized beach getaways and sightseeing excursions that will take you off-the-beaten path, so you can connect with each other. You can even sleep in with late check-outs.</p></div>',
        detailImageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/adult%20only%20-%20c.png",
        urlPath:"adults-only"
    },
    {
        title:"Honeymoon Vacations You’ll Remember Forever",
        text:"Engaged? Get a wedding planner for your wedding; call Oasis Travel for your honeymoon. Start your life together with an adventure you’ll always remember. Travel to remote islands in the South Pacific, meditate together in Asian temples, go on a safari in Africa, or hike the Alps in Europe. Want to bask on a beautiful beach in Hawaii or the Caribbean, and maybe do a little partner yoga? Oasis Travel’s all-inclusive honeymoon vacation packages can match you with a luxury resort that’s just your style. Include Oasis Travel’s honeymoon vacation consultants on your wedding planning team.",
        imageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/honeymoon-hero_0.jpg",
        detailTitle:"When Planning Your Honeymoon, It’s the Details That Matter",
        detailText:'<div class="field--item"><p class="text-start font-monospace">Oasis Travel’s honeymoon vacation planners know that, while the destination matters, it’s the little things that make a honeymoon memorable, like rose petal Jacuzzi baths, complimentary couples’ massages, Champagne breakfasts in bed, private candlelit dinners, and sunset sails. With My Time, enjoy “Just Married” exclusive perks, and enhanced services. Oasis Travel’s vacation consultants can connect you with unique experiences, excursions, and adventures. You can even create your own Oasis Travel honeymoon registry.</p></div>',
        detailImageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/honeymoon-c.png",
        urlPath:"honeymoon"
    },
    {
        title:"Last-Minute Vacation Packages with Oasis Travel",
        text:"Need to get away from it all this weekend? Want a little sunshine to break the monotony of the workweek? Oasis Travel’s last-minute vacations can take you to the world’s leading cities and beaches. Want to leave tomorrow? Your Oasis Travel vacation consultant can make it happen. Whether you want an adults-only weekend with your sweetheart, or would like to practice a little self-care with a spa vacation, Oasis Travel can book you a room at some of the Caribbean’s best resorts, Europe’s coziest hotels, or a tour in North America’s most vibrant cities.",
        imageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/last%20minute-hero_0.jpg",
        detailTitle:"Last-Minute Planned, Every Minute Perfect",
        detailText:'<div class="field--item"><p class="text-start font-monospace">Sometimes the best vacations aren’t planned weeks or months in advance. The spontaneous can be spectacular. The last-minute can be magnificent. When it comes to last-minute vacations, Oasis Travel handles all the details, so you can hop on a plane and enjoy. Oasis Travel’s vacation consultants know the resorts, destinations, guides, and flights, and can get you connected with accommodations, tours, and even a reservation at that exquisite Michelin starred restaurant in the heart of Paris, San Francisco, Chicago, or London.</p></div>',
        detailImageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/last%20minute-c.png",
        urlPath:"last-minute"
    },
    {
        title:"Looking for the Best Beach Deals?",
        text:"We get it—you're ready to leave your stress behind for crystal-clear waters, blue skies, and palm trees. Whether you're planning a family vacation, friends' getaway, or romantic retreat for two, we've got a beach travel package for you. From Caribbean islands to far-flung exotic destinations across the globe, our consultants will find the ideal resort to make it a trip you'll never forget. Let us plan your next great beach escape.",
        imageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/Widget%20A-Post%20Beach%20Bliss-838x557.jpg",
        detailTitle:"Plan Your Beach Getaway with Oasis Travel",
        detailText:'<div class="field--item"><p class="text-start font-monospace">For over 70 years, the one-on-one personal experience has been at the very heart of Oasis Travel’s mission. It\'s what we\'ve always done, and now it’s more important than ever.</p></div>',
        detailImageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/colorful-beach-bag-filled-with-beach-essentials.png",
        urlPath:"beach"
    },
    {
        title:"Reimagine Luxury Vacations with Oasis Travel",
        text:"Exclusive resorts, exquisite experiences, unparalleled service, and attention to detail—this is a Oasis Travel luxury vacation. Enjoy the privacy of a bungalow in Tahiti. Stay at a Bahamas resort fit for the Duke and Duchess of Windsor. History meets nature at the breathtaking Château Lake Louise in Canada. See the Eiffel Tower from your window in France. If solitude and the wild are your indulgences, sleep in the African savannah. From exclusive experiences to the best five-star resorts, your Oasis Travel vacation consultant can match you with a luxury resort package that’s just right for you.",
        imageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/luxury-hero%20(1).jpg",
        detailTitle:"Luxury Vacation Packages with Oasis Travel",
        detailText:"Luxury with Oasis Travel is more than time at one of the world’s most exclusive resorts. It’s the personalized attention of your vacation consultant. It’s our connection with local guides, authentic experiences, and our knowledge of some of the most exotic destinations on the planet. When planning your luxury vacation, let Oasis Travel’s unparalleled expertise lead the way. We do more than book your vacation, we design incredible experiences.",
        detailImageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/luxury-c.png",
        urlPath:"luxury"
    },
    {
        title:"Casino Vacation Packages with Oasis Travel",
        text:"Don’t leave your casino vacation plans to chance. Oasis Travel casino vacations can take you to leading casinos and resorts around the world. Roll the dice in Las Vegas, or get some time at the beach before you hit the slots in the Caribbean. Want to combine a European vacation with some time at the table? Travel to Monaco and visit the famous Monte Carlo Casino. Take an ocean cruise and discover multiple destinations while enjoying a good game of poker, blackjack, or some of your other favorite games. Let Oasis Travel take your casino vacation to the next level.",
        imageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/casino-hero.jpg",
        detailTitle:"From Resort Casinos to Vacation Packages with Casino Access",
        detailText:'<div class="field--item"><p class="text-start font-monospace">Oasis Travel’s casino vacation consultants can match you with a casino vacation package that’s just your style. From Las Vegas to the Caribbean, there are casino resorts that offer everything from dining, entertainment accommodations, shopping malls, and even transportation, so all you need to think about is which game you’ll play next. If you want a vacation that includes the casino, but offers a range of activities (like beach time)—a customized vacation package by your Oasis Travel consultant is just the ticket.</p></div>',
        detailImageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/casino-c.png",
        urlPath:"casino"
    },
    {
        title:"Golf and Spa Vacations with Oasis Travel",
        text:"Life can sometimes be fast-paced. Take time to slow down and get away for a little pampering. A Oasis Travel spa and golf vacation can connect you with some of the world’s leading golf and spa resorts. Indulge in a massage with aromatherapy, soak in a hot tub, get a facial or body scrub, or partake in a range of wellness rituals from yoga to meditation. Then, hit the links for a game of golf at some of the world’s leading championship courses. Contact your Oasis Travel vacation consultant today to learn about our spa and golf vacation packages.",
        imageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/golf%20and%20spa%20-%20hero.jpg",
        detailTitle:"Tips for Planning Your Next Golf and Spa Vacation",
        detailText:'<div class="field--item"><p class="text-start font-monospace">When Choosing a Spa Vacation Package: Take a look a the treatments offered at the resort and ask yourself whether you want your spa experience to be the centerpiece of your vacation or just one aspect of it. Spa getaways can take you to the mountains, beach, and city, so there’s always time to explore before, after, or between treatments.When Choosing a Golf Vacation Package: Consider your skill level. Before planning your vacation around a golf course. Check the USGA Course Rating and Slope Database to see how your resort’s course compares.</p></div>',
        detailImageUrl:"https://oasis-image.blr1.cdn.digitaloceanspaces.com/images/vacation-type-detail/golf%20and%20spa-c.png",
        urlPath:"golf-and-spa"
    }
]

writeFileSync('vacation-type-details.json',JSON.stringify(vacationTypeDetail))