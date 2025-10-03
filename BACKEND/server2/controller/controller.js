let users = []

let getTable = (req, res) => {
    // res.status(200).json({ message: "welcome user at our '/' route" })
    res.status(200).render("index", { data: users })
}

const getImage = (req, res) => {
    // res.status(200).sendFile("about.html")
    res.status(200).render("Image")
}

const getContact = (req, res) => {
    res.status(200).render("contact")
}

const postForm = (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.status(301).redirect("/")
}

export { getTable, getImage, getContact, postForm }

// form, routes(query parameters, path parameter), json()