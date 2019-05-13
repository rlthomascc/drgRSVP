const db = require('../index.js');

    const data = [
        {
          "agent": "Andy",
          "name": "Adriana Buenrostro",
          "email_phone": "bacocula@yahoo.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/02",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Adriana Buenrostro - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Adriana Buenrostro - Guest",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Adriana Buenrostro - Guest",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Andy Del Real",
          "email_phone": "andy@thedelrealgroup.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Angela Osten",
          "email_phone": "myangel1388@hotmail.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Angela Osten - Allison osten",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Angela Osten - Matthew Osten",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Angela Osten - Todd osten",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Angela Osten - Vanessa osten",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Chrissy Aguilar-MacDonald",
          "email_phone": "chrissyaguilar3@gmail.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Cynthia Arrellano-Rodriguez",
          "email_phone": "arellanoc04@yahoo.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Cynthia Arrellano-Rodriguez - Jose Rodriguez",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Cynthia Arrellano-Rodriguez - Kamilah Rodriguez",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Cynthia Arrellano-Rodriguez - Margarita Arellano",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "DaiNette Bowens",
          "email_phone": "sdlvsdz@gmail.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "DaiNette Bowens - Arianna Carranza (Glam daughter)",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "DaiNette Bowens - Joe Rivas",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Deborah D. Kirkpatrick",
          "email_phone": "rkirkpa150@aol.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/02",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Delia Berardy",
          "email_phone": "bberardy@yahoo.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/21",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Delia Berardy - Terry Berardy",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/21",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Delia Berardy - Wyatt Berardy",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/21",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Jeannette Picado",
          "email_phone": "jeannette.picado@ros.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Jeannette Picado - Jason Valdez",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Jeannette Picado - JD Valdez",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Jeannette Picado - Reima Valdez",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Joyce Fischer",
          "email_phone": "JBFISHWINE@AOL.COM",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Karen Wilkson",
          "email_phone": "karen.wilkson@gmail.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Leticia Vera",
          "email_phone": "cherry95122@yahoo.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/22",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Leticia Vera - Jonathan",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Leticia Vera - Leah",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Leticia Vera - Nathan",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Maria Baez",
          "email_phone": "mariabaez83@yahoo.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/03",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Maria Baez - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Maria Baez - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Maria Hurtado",
          "email_phone": "hurtado358@gmail.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Maria Hurtado - Adrian Gonzalez",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Maria Hurtado - Genevieve Gonzalez",
          "email_phone": "",
          "age": "Infant",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Maria Hurtado - Giovanni Gonzalez",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Maria Hurtado - Gisselle Gonzalez",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Maria Hurtado - Jacqueline Gonzalez",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Pedro Lucatero",
          "email_phone": "pedro.lucatero@yahoo.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Pedro Lucatero - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Sean Stapleton",
          "email_phone": "sean@asweetinspection.com",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Sean Stapleton - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Sean Stapleton - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Sean Stapleton - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Aaron Fontes",
          "email_phone": "(209) 648-3457",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Abigail Crook",
          "email_phone": "(209) 483-4429",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Abimael Galindo",
          "email_phone": "(209) 614-1717",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Adela Reynoso",
          "email_phone": "(209) 620-3184",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Agustin Aguilar",
          "email_phone": "(209) 566-3271",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Alain M. Diaz",
          "email_phone": "(209) 450-1482",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Alberdia Benton",
          "email_phone": "(510) 314-9270",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Alejandro Pulido",
          "email_phone": "(209) 222-0961",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Alexie Uribe",
          "email_phone": "(209) 409-4908",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Alexsandra Hurtado",
          "email_phone": "(209) 552-1052",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Alexsandra Hurtado - Luna",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Alfredo Rodriguez",
          "email_phone": "(209) 341-9778",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Ali   Stambaugh",
          "email_phone": "(209) 613-4095",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Ali   Stambaugh - Adelia",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Ali   Stambaugh - Eloise",
          "email_phone": "",
          "age": "Infant",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Ali   Stambaugh - Ian",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Alicera Aubel",
          "email_phone": "(209) 204-0168",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/23",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Amal Shoaibi",
          "email_phone": "(209) 846-4021",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Amber Rowe",
          "email_phone": "(209) 648-1099",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/11",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Ana Paula Garcia",
          "email_phone": "(209) 324-8373",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Anita Randle",
          "email_phone": "(510) 565-0240",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Anita - Portsmouth Tenant",
          "email_phone": "(209) 605-7442",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Ann marie & Stuart Barnum",
          "email_phone": "(925) 949-6113",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Anna Vasquez",
          "email_phone": "(510) 432-9263",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Annemae Belleza",
          "email_phone": "(909) 764-7945",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Antonio Munguia",
          "email_phone": "(209) 534-2366",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Apolino Cisneros",
          "email_phone": "(209) 743-3842",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Araceli Plascencia",
          "email_phone": "(209) 596-3862",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Aracely & Jose Hurtado Villatorro",
          "email_phone": "(650) 669-0378",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Arcadio Alaniz",
          "email_phone": "(209) 740-2968",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Asuncion Perez",
          "email_phone": "(209) 535-5727",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Audrey Powell",
          "email_phone": "(931) 436-6054",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Betty Del Real",
          "email_phone": "(209) 380-9471",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Bev Ahern",
          "email_phone": "(209) 534-1377",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Bill Butler",
          "email_phone": "(209) 402-6201",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Brad Vanderwal",
          "email_phone": "(209) 620-6420",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Brenda Cabrera",
          "email_phone": "(209) 534-1551",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/21",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Brenda Cabrera - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/21",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Brenda Cabrera - Guest",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/21",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Byron McBroom",
          "email_phone": "(209) 480-8380",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Candy Villapudua",
          "email_phone": "(323) 240-0263",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Carina Garcia",
          "email_phone": "(209) 404-3397",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Carlos & Jamie Vega",
          "email_phone": "(408) 690-1795",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Carlos Carrasco",
          "email_phone": "(209) 629-0580",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Carlos Mclver",
          "email_phone": "(209) 894-6362",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/02",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Carlos Ruiz",
          "email_phone": "(510) 410-3025",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Carolina Garcia",
          "email_phone": "(209) 324-5975",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Catalina Pena",
          "email_phone": "(209) 596-9174",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/22",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Cathy Yerby",
          "email_phone": "(209) 872-8689",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Cecilia Arreola",
          "email_phone": "(650) 392-9034",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Cesar Padilla",
          "email_phone": "(209) 613-0683",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/06",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Charles \" Rich\" Zurlinden",
          "email_phone": "(209) 271-5470",
          "age": "Infant",
          "dateSent": "07/20",
          "dateViewed": "08/22",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Charles \" Rich\" Zurlinden - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Charles \" Rich\" Zurlinden - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Charles \" Rich\" Zurlinden - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Charles \" Rich\" Zurlinden - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Chris Hughes",
          "email_phone": "(209) 531-4212",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Cindy Garcia",
          "email_phone": "(209) 416-9051",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/21",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Cinnamon Peel",
          "email_phone": "(209) 620-7466",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Cong Tran",
          "email_phone": "(408) 785-0646",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Craig Hardenbrook",
          "email_phone": "(209) 404-7367",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Cristian Virgin",
          "email_phone": "(209) 622-7024",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Crystal Stapleton",
          "email_phone": "(209) 648-0681",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Crystal Walter",
          "email_phone": "(209) 639-6445",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Dana Ardis",
          "email_phone": "(209) 604-8079",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/02",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Dana Cust",
          "email_phone": "(209) 604-1770",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Daniel (A/C)",
          "email_phone": "(209) 568-1357",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Danielle Dolina",
          "email_phone": "(209) 814-9754",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Danielle Fairbairn",
          "email_phone": "(209) 648-4002",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "David \"Chico\" Rodriguez",
          "email_phone": "(209) 324-3005",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "David Del Real",
          "email_phone": "(408) 561-3446",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "David Lucas",
          "email_phone": "(209) 968-4827",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "David Lucas - Parker Lucas",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "David Lucas - Steffani Lucas",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "David Ruiz",
          "email_phone": "(510) 861-6110",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/07",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "David Ruiz - Beatriz",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "08/01",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "David Ruiz - Guest",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "08/01",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "David Ruiz - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "08/01",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "David - Marilous Husband",
          "email_phone": "(209) 269-7119",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Denia Tamayo",
          "email_phone": "(209) 380-0589",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "DeVaughn Jones",
          "email_phone": "(916) 367-3157",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/04",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Deysy Fajaro",
          "email_phone": "(510) 695-1574",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Diane Dunn-Amatori",
          "email_phone": "(415) 272-0626",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Dianne Love",
          "email_phone": "(209) 409-1109",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Edgar Perez",
          "email_phone": "(209) 818-1121",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Edith Solis",
          "email_phone": "(209) 612-0174",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Eduardo Orozco",
          "email_phone": "(209) 456-0067",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Efrain Pinon - Ramirez",
          "email_phone": "(650) 468-7735",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Efren Peña",
          "email_phone": "(510) 828-3076",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Eliana Del Real",
          "email_phone": "(408) 406-1808",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Eliana Del Real - Alex Del Real",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Eliana Del Real - Arieana Del Real",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Eliana Del Real - Manuel Hernandez",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Elodia Sandoval",
          "email_phone": "(209) 765-2299",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Eric Weaver",
          "email_phone": "(209) 916-5355",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Erika Ruiz",
          "email_phone": "(209) 613-0051",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Erika y Jesus",
          "email_phone": "(209) 568-0652",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Esperansa Godinez",
          "email_phone": "(209) 985-6322",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/25",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Esther Garcia",
          "email_phone": "(209) 404-4315",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Esther Thomas",
          "email_phone": "(510) 862-0351",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Evan Fitzsimmons",
          "email_phone": "(562) 235-7672",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Federico Parra",
          "email_phone": "(209) 809-5884",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Felipe Pimentel - FF",
          "email_phone": "(209) 613-4023",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Flavio Contreras",
          "email_phone": "(510) 214-3604",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Francis Ranger",
          "email_phone": "(209) 380-8604",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Francisco \"Pancho",
          "email_phone": "(209) 606-2293",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Francisco Reynoso",
          "email_phone": "(209) 599-2838",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Fred Okino Sr",
          "email_phone": "(209) 450-8233",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/03",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Freddy Vera",
          "email_phone": "(209) 408-7767",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/23",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Gina Orozco",
          "email_phone": "(559) 709-9147",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Gordon Stjohn",
          "email_phone": "(209) 649-6919",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Gregorio Alvarez",
          "email_phone": "(510) 512-8232",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Guadalupe Olivarez",
          "email_phone": "(209) 354-7511",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Gursharon Kaur",
          "email_phone": "(209) 765-9124",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Harmat Gehlon",
          "email_phone": "(209) 996-2632",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Heather Ahern",
          "email_phone": "(209) 769-1606",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Hector Solis",
          "email_phone": "(209) 612-1508",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Helvia Alonso",
          "email_phone": "(209) 408-9427",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Herminia Tajeda",
          "email_phone": "(209) 604-4455",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Ignacio y Esperanza Serrato",
          "email_phone": "(209) 595-8045",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Isabel Cortes",
          "email_phone": "(209) 872-1438",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/21",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Ismael Flores",
          "email_phone": "(209) 408-3743",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jaime Cisneros",
          "email_phone": "(408) 898-0599",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "James Ollivierre",
          "email_phone": "(209) 809-8856",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/02",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "James Ollivierre - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Janet Ardis",
          "email_phone": "(209) 968-4451",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/06",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Janet Ardis - Dana Ardis",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "08/01",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Janet Ardis - Ness Young",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "08/01",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Janet Ardis - Ron Ardis",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "08/01",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Janet Ardis - Vicky Young",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "08/01",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Janet Del Real",
          "email_phone": "(209) 568-9366",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Jason Picado",
          "email_phone": "(209) 390-6707",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jeanpaul “JP” Hannah",
          "email_phone": "(209) 747-9461",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/08",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Jeanpaul “JP” Hannah - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Jeff Armstrong",
          "email_phone": "(650) 430-0709",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jen Dessert",
          "email_phone": "(252) 571-8470",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jennifer Duarte",
          "email_phone": "(209) 342-7839",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jennifer Tello",
          "email_phone": "(650) 400-2140",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jennifer Tyson",
          "email_phone": "(209) 609-1805",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jennifer White",
          "email_phone": "(209) 628-2062",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jenny Howell",
          "email_phone": "(781) 366-2303",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Jenny Mehlhaff",
          "email_phone": "(209) 604-2233",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/21",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jeremy White",
          "email_phone": "(209) 628-5126",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jesus Ordaz",
          "email_phone": "(209) 505-3640",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jesus Ruiz",
          "email_phone": "(209) 480-0071",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jines Pinon Ramirez",
          "email_phone": "(650) 784-9014",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Joanie Peel",
          "email_phone": "(209) 681-3531",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Joe Rivas",
          "email_phone": "(209) 765-4790",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/30",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Joe Rivas - Dainette Bowens",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Joel Pelayo",
          "email_phone": "(209) 606-7719",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Joel Sandoval",
          "email_phone": "(209) 345-4397",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Joey Fitzsimmons",
          "email_phone": "(562) 522-9338",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/22",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jonathan Franco Cabrera",
          "email_phone": "(408) 387-4703",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jorge Huizar",
          "email_phone": "(209) 250-6730",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jorge Othon",
          "email_phone": "(209) 232-9429",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jorge Villegas",
          "email_phone": "(209) 606-8868",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jose Plascencia",
          "email_phone": "(209) 756-1540",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jose Rodriguez",
          "email_phone": "(209) 918-2586",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jose Vilchis",
          "email_phone": "(209) 688-1173",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/02",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Jose y Josefina Vera",
          "email_phone": "(209) 495-2945",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Josh Dolina",
          "email_phone": "(209) 303-6850",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Josh Dolina - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Juan Alonso",
          "email_phone": "(209) 345-8862",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Juana Orozco",
          "email_phone": "(209) 620-2563",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Julio De Alba",
          "email_phone": "(209) 735-1607",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Karen - Nugget Tenant",
          "email_phone": "(209) 324-8855",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Kathie & Bill Silva",
          "email_phone": "(209) 764-0024",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Katrina Silva",
          "email_phone": "(209) 324-7379",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Keith Immediato",
          "email_phone": "(209) 765-5550",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/02",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Kenny Sullivan",
          "email_phone": "(209) 277-5444",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Kim Dolina",
          "email_phone": "(209) 818-7084",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/04",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Kim Dolina - Guest",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Kim Dolina - Guest",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Kim Gaynor",
          "email_phone": "(209) 996-5136",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Kimberly Del Real",
          "email_phone": "(707) 327-7307",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Kimberly Hughes",
          "email_phone": "(209) 996-5309",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Laura Garcia",
          "email_phone": "(209) 345-7901",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Laura Marquez",
          "email_phone": "(209) 872-1101",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Laura Sontag-Garcia",
          "email_phone": "(209) 499-5725",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/26",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Laura Sontag-Garcia - Bryan Sontag",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/26",
          "dateViewed": "",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Lilia Tamayo",
          "email_phone": "(209) 380-5744",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Lily Hardenbrook",
          "email_phone": "(209) 543-4373",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Linda Ng",
          "email_phone": "(408) 510-0046",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Linda Okino",
          "email_phone": "(209) 241-2538",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/23",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Linda Peden",
          "email_phone": "(209) 277-0287",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Lino Garcia",
          "email_phone": "(209) 815-1712",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Lizete Galvan",
          "email_phone": "(209) 735-8674",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Lizette Alaniz",
          "email_phone": "(209) 597-4956",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Lori Ayala",
          "email_phone": "(209) 765-8007",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Louisa Marquez",
          "email_phone": "(209) 679-2519",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Lucas Cisneros",
          "email_phone": "(209) 704-0702",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Luis Carlos Cisneros",
          "email_phone": "(209) 918-2394",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Luis Faustino",
          "email_phone": "(408) 221-7315",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Luz Casares",
          "email_phone": "(209) 402-0917",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Magdaleno Barragan",
          "email_phone": "(209) 534-3639",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Marcus Rodabaugh",
          "email_phone": "(209) 968-0657",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Margarita Mendoza",
          "email_phone": "(209) 410-1876",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Maria C. Contreras",
          "email_phone": "(650) 804-0062",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Maria Cazares",
          "email_phone": "(510) 213-2534",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Maria Dueñez",
          "email_phone": "(209) 303-8377",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Maria S Piñedo",
          "email_phone": "(209) 581-5097",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "12/08",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Marilou Sisk-Champeny",
          "email_phone": "(209) 345-9752",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Mario Plascenia",
          "email_phone": "(209) 252-9386",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Marta Talamantes",
          "email_phone": "(209) 221-1977",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Martha Garcia",
          "email_phone": "(209) 543-4852",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Martin Calderon",
          "email_phone": "(209) 947-0288",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Matt Dessert",
          "email_phone": "(252) 571-8294",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Max Ahmadi",
          "email_phone": "(707) 616-1103",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Mayra y Felipe Sandoval",
          "email_phone": "(209) 345-0630",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "11/29",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Megan Palmer",
          "email_phone": "(209) 581-1725",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Melissa Carrasco",
          "email_phone": "(209) 505-9088",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Miguel Beltran",
          "email_phone": "(209) 872-2765",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Miguel Fajaro",
          "email_phone": "(510) 909-9099",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Mike Archuletta",
          "email_phone": "(510) 316-5518",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Mike Casares",
          "email_phone": "(209) 552-5750",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Millie Ruiz",
          "email_phone": "(209) 405-0199",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/02",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Monica Bellofiore",
          "email_phone": "(650) 255-8593",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Monica - 1437 Nadine",
          "email_phone": "(209) 898-8884",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Natividad De Alba",
          "email_phone": "(209) 496-4498",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Nicolle Tran",
          "email_phone": "(209) 602-8829",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Ninos Rasho",
          "email_phone": "(209) 606-2017",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Noor Karabala",
          "email_phone": "(209) 922-2200",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Octavio Cisneros",
          "email_phone": "(209) 631-4645",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Olivia Sandoval",
          "email_phone": "(209) 601-6993",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/30",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Patricia Hurtado",
          "email_phone": "(209) 613-9298",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Patrick Ranger",
          "email_phone": "(360) 509-3820",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Philip Phillips",
          "email_phone": "(209) 601-1480",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Rachel Gonzalez-Orosco",
          "email_phone": "(408) 623-9120",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/09",
          "rsvp": "No"
        },
        {
          "agent": "Andy",
          "name": "Ramon Frausto",
          "email_phone": "(209) 409-0966",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/21",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Raul Contreras",
          "email_phone": "(209) 614-3929",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Rebecca Billington",
          "email_phone": "(209) 614-5934",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Rebecca Rodabaugh",
          "email_phone": "(209) 756-6051",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Rene Esquivel",
          "email_phone": "(510) 755-4911",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Ricardo Zaragoza",
          "email_phone": "(209) 604-8652",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Rick Shaibi",
          "email_phone": "(831) 512-3715",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Rob Vera",
          "email_phone": "(209) 968-0904",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/01",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Rob Vera - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Rob Vera - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Rob Vera - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Rob Vera - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Rob Vera - Guest",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Rocque Portillo",
          "email_phone": "(209) 922-4023",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Rod & Michelle Switzer",
          "email_phone": "(209) 605-2997",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Ron Ardis",
          "email_phone": "(209) 605-9915",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Ryan Flathery",
          "email_phone": "(415) 341-4086",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Ryan Mehlhaff",
          "email_phone": "(209) 327-1806",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Salina Soto",
          "email_phone": "(209) 914-0279",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/24",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Sam Prasad",
          "email_phone": "(209) 247-4464",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Sara Castellanos",
          "email_phone": "(209) 303-6404",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Sean McAdams",
          "email_phone": "(415) 716-8313",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Sharon Wong",
          "email_phone": "(209) 345-7066",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Shawn B. Allan",
          "email_phone": "(209) 484-6761",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Shawn Kwok",
          "email_phone": "(415) 886-5398",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Shirley Lloyd",
          "email_phone": "(209) 480-7015",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/24",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Shiu Prasad",
          "email_phone": "(209) 595-2790",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Sintia Rapalo",
          "email_phone": "(209) 275-7614",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Sonny \"Raj\" Sidhu",
          "email_phone": "(209) 605-3706",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/20",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Sonny Tran",
          "email_phone": "(209) 281-7755",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Spencer Yount",
          "email_phone": "(408) 203-9691",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Stephen Kooi",
          "email_phone": "(209) 380-7857",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/03",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Steve Alexander",
          "email_phone": "(661) 803-0129",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Steven Carrasco",
          "email_phone": "(510) 872-2221",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Sunita Prasad",
          "email_phone": "(209) 595-2236",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Sunny Phillips",
          "email_phone": "(209) 606-4069",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Surila Singh",
          "email_phone": "(209) 968-4479",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Tahana Lish",
          "email_phone": "(209) 409-4991",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Tami Boyer",
          "email_phone": "(831) 818-0159",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Tammy Zurlinden",
          "email_phone": "(209) 568-5193",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Terrence \"Wolf\" Lish",
          "email_phone": "(760) 809-4169",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "08/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Terry Berardy",
          "email_phone": "(650) 333-6050",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/23",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Thomas Ahern",
          "email_phone": "(650) 906-0628",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Tim Boone",
          "email_phone": "(650) 305-9433",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Tina Uanrachawong",
          "email_phone": "(209) 576-5055",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Todd Osten",
          "email_phone": "(209) 271-0103",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Todd Osten - Allison",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Todd Osten - Angela",
          "email_phone": "",
          "age": "Adult",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Todd Osten - Matthew",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Todd Osten - Vanessa",
          "email_phone": "",
          "age": "Child (2-12)",
          "dateSent": "07/31",
          "dateViewed": "",
          "rsvp": "Yes"
        },
        {
          "agent": "Andy",
          "name": "Tracey Dolina",
          "email_phone": "(209) 579-4065",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Valente Hurtado Jr",
          "email_phone": "(209) 552-1710",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Valerie Powell",
          "email_phone": "(209) 409-0327",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Vanessa Gusman",
          "email_phone": "(209) 450-9063",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Victor & Ana Moreno",
          "email_phone": "(209) 427-6405",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Victor Garcia",
          "email_phone": "(209) 605-9700",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Victor Marquez",
          "email_phone": "(209) 531-8995",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "07/31",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Victor Valenzuela",
          "email_phone": "(408) 829-0105",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Victoria Trujillo",
          "email_phone": "(801) 603-0603",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Vincent & Jessica Haro",
          "email_phone": "(702) 353-4357",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Wayne And Alicia Matheny",
          "email_phone": "(510) 760-5296",
          "age": "Adult",
          "dateSent": "07/26",
          "dateViewed": "07/26",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Yecenia Calderon",
          "email_phone": "(209) 585-8922",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Yesica Mendez",
          "email_phone": "(209) 585-7399",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        },
        {
          "agent": "Andy",
          "name": "Yvette Pelayo",
          "email_phone": "(209) 416-8245",
          "age": "Adult",
          "dateSent": "07/20",
          "dateViewed": "",
          "rsvp": "- - -"
        }
      ]

      const seedData = () => {
          db.Invites.create(data).then(() => console.log('Data seeded to database'). then(() => db.disconnect())
          )}

          seedData()