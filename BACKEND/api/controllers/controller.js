// import { techs } from "../data/DataSet.js"
import { TechSchema } from "../models/schema.js"

const introToAPI = async (req, res) => {
    res.status(200).json({
        message: "Welcome to our languages API !",
        to_do: [
            {
                title: "You can get all the languages that are present in our dataset",
                method: "GET",
                url: "http://localhost:5012/api/techs/all-languages",
                expectedResult: "[objects]/null"
            },
            {
                title: "You can a random language that is present in our data set",
                method: "GET",
                url: "http://localhost:5012/api/techs/get-random-language",
                expectedResult: "[objects]/null"
            },
            {
                title: "You can filter languages based on Scope, Difficulty, Duration",
                method: "GET",
                url: "http://localhost:5012/api/techs/filter?scope=***&difficulty=***&duration=***",
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
                url: "http://localhost:5012/api/techs/:id/info",
                expectedResult: "object/null"
            },
        ]
    })
}
// const getAllLanguages = (req, res) => {
//     res.status(200).json({ message: `got all ${techs.length} languages for you !`, techs })
// }

const getAllLanguages = async(req, res) => {
    try {
         let techs = await TechModel.find()
        res.status(200).json({ message: `got all ${techs.length} languages for you !`, techs })
    } catch (err) {
        res.status(400).json({ message: "Error fetching languages", error: err })
    }
}
// const getRandomLanguage = (req, res) => {
//     let randomNo = Math.floor((Math.random() * 98) + 1);

//     let randomLang = techs.filter((tech, index) => {
//         return index === randomNo;
//     })

//     let [tech] = randomLang;

//     res.status(200).json({ message: "Here is a random language for you", language: tech });
// }
const getRandomLanguage = async(req, res) => {
    try {
            let techs = await TechModel.find()

        let randomNuber = Math.floor((Math.random() * 98) + 1)

    let randomTech = techs[randomIndex]
    res.status(200).json({ message: "Random language selected", tech: randomTech })
  } catch (err) {
    res.status(500).json({ message: "Error fetching random language", error: err.message })
  }}

const getFilteredData = async (request, response) => {

    try {
        let { scope, duration, difficulty } = request.query
        let FiltersUsed = ""

        if (!scope && !duration && !difficulty) {
            throw ("Invalid filters ! Please enter the valid one (scope, duration or difficulty)")
        }

        //filtering by scope
        if (scope) {
            let ScopeBasedData = await LanguageModel.find({ scope: { $elemMatch: { $eq: scope } }})//elem match 
            FiltersUsed += " scope "
            response.status(200).json({
                message: `Successfully fetched the data based on the ${scope}`, ScopeBasedData
            })
        }
        if (duration) {
            let DurationBasedData = await LanguageModel.find({ duration: duration })
            FiltersUsed += " duration "
            response.status(200).json({
                message: `Successfully fetched the data based on the ${duration}`, DurationBasedData
            })
        }
        if (difficulty) {
           
            FiltersUsed = " difficulty"
            // Allowed enum values list
            const allowedDifficulties = ["Beginner", "Intermediate", "Advanced"]

            // Check if difficulty is valid
            if (!allowedDifficulties.includes(difficulty)) {
                response.status(400).json({
                    message: `Invalid difficulty value: ${difficulty}. Allowed values are ${allowedDifficulties}.`, FiltersUsed
                })
            }
            let DifficultyBasedData = await LanguageModel.find({ difficulty: difficulty })
            response.status(200).json({
                message: `Successfully fetched the data based on data based on the ${duration}`, DurationBasedData
            })
        }
        if (difficulty) {
           
            FiltersUsed = " difficulty"
            // Allowed enum values list
            const allowedDifficulties = ["Beginner", "Intermediate", "Advanced"]

            // Check if difficulty is valid
            if (!allowedDifficulties.includes(difficulty)) {
                response.status(400).json({
                    message: `Invalid difficulty value: ${difficulty}. Allowed values are ${allowedDifficulties}.`, FiltersUsed
                })
            }
            let DifficultyBasedData = await LanguageModel.find({ difficulty: difficulty })
            response.status(200).json({
                message: `Successfully fetched the data based on the ${difficulty}`, DifficultyBasedData
            })
        }


    } catch (error) {
        response.status(400).json({
            message: "Please provide at least one valid filter (scope, duration, or difficulty).",
        })
    }

}



 const getLanguageBasedOnId = async(req,res) => {
    
      try {
        let { id } = req.params
        if (!id) throw ("Invalid ID!")
        let IdBasedResult = await TechModel.findOne({
            id: id
        })

        if (!IdBasedResult) {
            res.status(200).json({ message: "Couldn't find the language based on the given id! Please provide valid id!" })
        }

        res.status(200).json({
            message: `Got your language of ${id} id`, IdBasedResult
        })
    } catch (error) {
        res.status(400).json({
            message: "Unable to get your language", error
        })
        console.log(error)
    }
}
let postNewLanguage =async (req, res) => {
     try {
    const { id, name, duration, difficulty, scope } = req.body
    const newTech = new TechModel({ id, name, duration, difficulty, scope })
    await newTech.save();
    res.status(201).json({ message: "Added successfully", data: newTech })
  } catch (err) {
    res.status(400).json({ message: "Error adding data", error: err.message })
  }
}

export { introToAPI, getAllLanguages, getRandomLanguage, getFilteredData, getLanguageBasedOnId, postNewLanguage }