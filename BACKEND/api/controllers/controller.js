import { techs } from "../data/DataSet.js"

const introToAPI = async (req, res) => {
    res.status(200).json({
        message: "Welcome to our languages API !",
        to_do: [
            {
                title: "You can get all the languages that are present in our dataset",
                method: "GET",
                url: "http://localhost:5011/api/techs/all-languages",
                expectedResult: "[objects]/null"
            },
            {
                title: "You can a random language that is present in our data set",
                method: "GET",
                url: "http://localhost:5011/api/techs/get-random-language",
                expectedResult: "[objects]/null"
            },
            {
                title: "You can filter languages based on Scope, Difficulty, Duration",
                method: "GET",
                url: "http://localhost:5011/api/techs?scope=***&difficulty=***&duration=***",
                expectedResult: "object/[objects]/null",
                expectedFilter: [
                    {
                        scope: [
                            "Web Development", "Frontend", "Backend", "Full Stack", "Data Science", "AI", "Automation", "Android Development", "Enterprise Apps", "Embedded Systems", "OS Development", "Low-level Programming", "Game Development", "Competitive Programming", "System Software", "Desktop Apps", "Web Apps (.NET)", "CMS", "Cloud Services", "System Programming", "iOS Development", "Mobile Apps", "WebAssembly", "Blockchain", "Cross-Platform Apps", "Statistics", "Machine Learning", "Big Data", "Functional Programming", "Scripting", "Linux Admin", "DevOps", "Databases", "Data Analysis", "Web Design", "UI/UX", "SSR Apps", "APIs", "Database", "Cloud", "CI/CD", "Containers", "Infrastructure", "Deep Learning", "Computer Vision", "Robotics", "Data Visualization", "Analysis", "3D Modeling", "Game Design", "Animation", "Version Control", "Collaboration", "Automation", "Configuration Management", "Cloud Infrastructure", "System Administration", "Security", "Windows Admin", "Web3", "Finance", "Smart Contracts", "Blockchain Development", "Frontend Integration", "3D Web", "Graphics", "Animation", "Frontend ML", "Cross-Platform", "Build Tools", "Bundling", "Optimization", "Code Quality", "Code Formatting", "Testing", "Assertions", "Frontend Testing", "Automation", "Data Engineering", "Analytics", "BI", "Search Engines", "Data Indexing", "Caching", "Message Queues", "Microservices", "Web Servers", "Load Balancing", "Hosting", "Cybersecurity", "Penetration Testing", "Networking", "Security Analysis", "LLM Apps", "Chatbots"
                        ]
                    },
                    { difficulty: ["Easy", "Medium", "Hard"] },
                    { duration: [1, 2, 3, 4], isIn: "months" },
                ]
            },
            {
                title: "You can search for a language using their ID (id).",
                method: "GET",
                url: "http://localhost:5011/api/techs/:id/info",
                expectedResult: "object/null"
            },
        ]
    })
}

const getAllLanguages = (req, res) => {
    res.status(200).json({ message: `got all ${techs.length} languages for you !`, techs })
}

const getRandomLanguage = (req, res) => {

    let randomNuber = Math.floor((Math.random() * 98) + 1)

    let randomLanguage = techs.filter((tech, index) => {
        return index == randomNuber
    })

    let [tech] = randomLanguage

    res.status(200).json({ message: "you a random language for you !", tech })
}

const getFilteredData = (req, res) => {
    try {

        let { scope, difficulty, duration } = req.query

        if (!scope && !difficulty && !duration) throw ("invalid filters. please add Scope, Difficulty, Duration as filters")

        let filteredData = techs

        let filterString = ''

        if (difficulty) {
            filterString += "/difficulty"
            filteredData = filteredData.filter((data) => {
                return data.difficulty.toLowerCase() === difficulty.toLowerCase().trim()
            })
        }

        if (duration) {
            filterString += "/duration"
            filteredData = filteredData.filter((data) => {
                let durationArray = data.duration.split(" ")
                return Number(durationArray[0]) <= Number(duration.toLowerCase().trim())
            })
             }

           
        // multiple scope
       if (scope) {
    filterString += "/scope"

    // Convert comma-separated scopes to array
    const scopeArray = scope.split(",").map(s => s.toLowerCase().trim());
    filteredData = filteredData.filter((data) => {
        // Convert each data.scope item to lowercase for case-insensitive match
        const dataScopes = data.scope.map(item => item.toLowerCase().trim());

        // Check if every requested scope exists in data.scope
        return scopeArray.every(reqScope => dataScopes.includes(reqScope));
    })
}

        if (filteredData.length == 0) throw (`unable to filter data based on ${filterString} : ${scope}/${difficulty}/${duration} months`)

        res.status(200).json({ message: "we got data you asked for !", filteredBaseOn: filterString, results: filteredData.length, filteredData })

    } catch (err) {
        console.log("error while filter : ", err)
        res.status(500).json({ message: "unable to get filter data", result: null, err })
    }
}
const NewLanguage = (req, res) => {
    try {

        let { name, duration, difficulty, scope } = req.body

        if (!name || !duration || !difficulty || !scope) throw ("missing data to create a new language !")


        techs.push({ id: techs.length + 1, name, duration, difficulty, scope })

        res.status(202).json({ message: `new language ${name} has been addedd successfully !` })

    } catch (err) {
        res.status(400).json({ message: "unable to add new language !" })
    }
}

export { introToAPI, getAllLanguages, getRandomLanguage, getFilteredData , NewLanguage }