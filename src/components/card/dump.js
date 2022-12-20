const books = [
    {
        id: 1,
        title: "The Romance of Irish History",
        author: "John Gabriel Rowe",
        link: "https://archive.org/details/romanceofirishhi00roweuoft"
    },
    {
        id:2,
        src:"",
        title:"Quaint Irish Bygones",
        author: "William B Hannon",
        link: "https://archive.org/details/quaintirishbygon00hanniala"
    },
    {
        id:3,
        title: "A Woman Alone In The Heart Of Japan",
        author:"Gertrude Adams Fisher",
        link: "https://archive.org/details/womanaloneinhear00fishiala"
    },
    {
        id:4,
        title:"The Picture Of Dorian Gray",
        author:"Oscar Wilde",
        link: "https://archive.org/details/pictureofdoriang00wildiala"
    },
    {
        id:5,
        title:"Demonology and Withcraft",
        author: "Sir Walter Scott",
        link: "https://archive.org/details/demonologywitchc00scotiala"
    },
    {
        id:6,
        title:"Some Thoughts Concerning Education...",
        author:"John Locke",
        link:"https://archive.org/details/somethoughtsconc00lockiala"
    },
    {
        id:7,
        title:"Legends Of Ancient China",
        author:"Unkown",
        link:"https://archive.org/details/legendsofancient00chin"
    },
    {
        id:8,
        title:"Sankalpa",
        author:"Keshar Man Tamrakar",
        link:"https://archive.org/details/sankalpainenglish"
    },
    {
        id:9,
        title:"Write The Way You Would Talk",
        author:"Gerald Ensley",
        link:"https://archive.org/details/6542411-Write-the-Way-You-Would-Talk-by-Gerald-Ensley/page/n3/mode/2up"
    },
    {
        id:10,
        title:"Hard Times Create Strong Man",
        author:"Stefan Arnio",
        link:"https://archive.org/details/hard-times-create-strong-men-stefan-aarnio"
    },
    {
        id:11,
        title:"Fire In The Sky",
        author:"Travis Walton",
        link:"https://archive.org/details/1996traviswaltonfireinthesky"
    },
    {
        id:12,
        title:"Noble Warrior",
        author:"Unkown",
        link:"https://archive.org/details/noblewarrior191026"
    },
    {
        id:13,
        title:"It Ends With Us",
        author:"Colleen Hoover",
        link:"https://archive.org/details/itendswithus0000hoov"
    },
    {
        id:14,
        title:"Mahabharata",
        author:"Ramanarayanadatta Astri",
        link:"https://archive.org/details/mahabharat05ramauoft"
    },
    {
        id:15,
        title:"Harry Potter and the Chamber of Secrets",
        author:"J.K. Rowling",
        link:"https://archive.org/details/isbn_9780439064866"
    },
    {
        id:16,
        title:"IT",
        author:"Stephen King",
        link:"https://archive.org/details/it0000king"
    },
    {
        id:17,
        title:"Ugly Love",
        author:"Colleen Hoover",
        link:"https://archive.org/details/uglylovenovel0000hoov"
    },
    {
        id:18,
        title:"The Epic of Gilgamesh",
        author:"N.K Sanders",
        link:"https://archive.org/details/TheEpicofGilgamesh_201606"
    },
    {
        id:19,
        title:"Troilus And Cressida",
        author:"Shakespeare",
        link:"https://archive.org/details/shakespeare-troilus-cressida-oxf/mode/2up"
    },
    {
        id:20,
        title:"A Midsommer Nights Dreame",
        author:"Shaekspeare",
        link:"https://archive.org/details/midsommernightsd1600shak/page/n1/mode/2up"
    },
    {
        id:21,
        title:"Genji Monogatari",
        author:"Murasaki Shikibu",
        link:"https://archive.org/details/genjimonogatariv2mura/page/7/mode/2up"
    },
    {
        id:22,
        title:"Koetsu Utaibon Hyakuban",
        author:"Unkown",
        link:"https://archive.org/details/koetsuutaibonhyv35"
    },
    {
        id:23,
        title:"Twelfth Night",
        author:"William Shakespeare",
        link:"https://archive.org/details/Twelfth_Night_201710/page/n1/mode/2up"
    },
    {
        id:24,
        title:"The Life and Raigne of King Henry the Eighth",
        author:"Edward Herbert",
        link:"https://archive.org/details/lifeandraigneofk00herbrich/page/n3/mode/2up"
    },
    {
        id:25,
        title:"Russian Laws  1649 - 1825",
        author:"Unkown",
        link:"https://archive.org/details/sim_russian-laws_1649-1825_index-of-names/page/4/mode/2up"
    },
    {
        id:26,
        title:"Marxism and Contemporary Science",
        author:"Jack Lindsay",
        link:"https://archive.org/details/in.ernet.dli.2015.190264/page/n3/mode/2up"
    },
    {
        id:27,
        title:"The Works of Alexander Pope",
        author:"Alexander Pope, William Warburton",
        link:"https://archive.org/details/worksalexanderp24warbgoog "
    },
    {
        id:28,
        title:"The Odyssey of Homer",
        author:"Homer, Alexander Pope",
        link:"https://archive.org/details/odysseyhomer01popegoog/page/n6/mode/2up"
    },
    {
        id:29,
        title:"The Iliad of Homer",
        author:"Homer, Alexander Pope",
        link:"https://archive.org/details/iliadhomer06popegoog"
    },
    {
        id:30,
        title:"The History Of Ophelia",
        author:"David Simple",
        link:"https://archive.org/details/historyopheliap01fielgoog/page/n8/mode/2up"
    },
    {
        id:31,
        title:"Remarks On the Life and Writings of Plato",
        author:"Ebenezer Macfait",
        link:"https://archive.org/details/remarksonlifean00macgoog"
    },
    {
        id:32,
        title:"The Letters of Horace Walpole",
        author:"Mrs Paget Tonybee",
        link:"https://archive.org/details/TheLettersOfHoraceWalpoleVolV"
    },
    {
        id:33,
        title:"Poems On Several Occasions",
        author:"William Shakespeare",
        link:"https://archive.org/details/poemsonseveralo00shakgoog"
    },
    {
        id:34,
        title:"Continuation of the Complete History Of England",
        author:"Tobias George Smollett",
        link:"https://archive.org/details/continuationcom01smolgoog"
    },
    {
        id:35,
        title:"Essays and Treatises on Several Subjects",
        author:"David Hume",
        link:"https://archive.org/details/essaysandtreati02humegoog/page/n4/mode/2up"
    },
    {
        id:36,
        title:"The Works of the English Poets",
        author:"Samuel Johnson",
        link:"https://archive.org/details/worksenglishpoe00unkngoog/page/n6/mode/2up"
    },
    {
        id:37,
        title:"The Natural and Civil History of the French Dominions...",
        author:"Thomas Jefferys",
        link:"https://archive.org/details/ldpd_6447806_000"
    },
    {
        id:38,
        title:"The Voyages and Cruises of Commodore Walker",
        author:"George Walker",
        link:"https://archive.org/details/voyagesandcruis00walkgoog"
    },
    {
        id:39,
        title:"A History of English Education",
        author:"H.C. Barnard",
        link:"https://archive.org/details/in.ernet.dli.2015.126155"
    },
    {
        id:40,
        title:"The State in its Relations with the Church",
        author:"W.E. Gladstone",
        link:"https://archive.org/details/stateinitsrelati02gladiala"
    },
    {
        id:41,
        title:"Diary Of A Wimpy Kid Series",
        author:"Jeff Kinney",
        link:"https://archive.org/details/DiaryOfAWimpyKidSeries"
    },
    {
        id:42,
        title:"The Kite Runner",
        author:"Khaled Hosseini",
        link:"https://archive.org/details/TheKiteRunnerPDF_201905"
    },
    {
        id:43,
        title:"Diary Of a Young Girl",
        author:"Anne Frank",
        link:"https://archive.org/details/AnneFrankTheDiaryOfAYoungGirl_201606"
    },
    {
        id:44,
        title:"Tintin Collection",
        author:"Herge",
        link:"https://archive.org/details/01TintinInTheLandOfTheSoviets"
    },
    {
        id:45,
        title:"DSM-5",
        author:"Many",
        link:"https://archive.org/details/info_munsha_DSM5"
    },
    {
        id:46,
        title:"The Old Man And The Sea",
        author:"Ernest Hemingway",
        link:"https://archive.org/details/TheOldManAndTheSea-Eng-Ernest"
    },
    {
        id:47,
        title:"Why Nations Fail",
        author:"Daron Acemoglu, James A. Robinson",
        link:"https://archive.org/details/WhyNationsFailTheOriginsODaronAcemoglu"
    },
    {
        id:48,
        title:"History Of Medeival India",
        author:"Satish Chandra",
        link:"https://archive.org/details/satishchandrahistoryofmedievalindia"
    },
    {
        id:49,
        title:"The Grapes Of Wrath",
        author:"J. Steinbeck",
        link:"https://archive.org/details/in.ernet.dli.2015.261773"
    },
    {
        id:50,
        title:"The Secret Garden",
        author:"Frances Hodgson Burnett",
        link:"https://archive.org/details/TheSecretGarden_201303"
    }
]

export default books;