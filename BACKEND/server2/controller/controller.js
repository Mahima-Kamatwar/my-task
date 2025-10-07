let users = []

let getTable = (req, res) => {
    res.status(200).render("index", { data: users })
}

const getImage = (req, res) => {
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
const postSomeInformation = (req, res) => {
    console.log(req)
    let {data} = req.headers
    
    console.log(data)

    let {yourName} = req.params
    console.log(yourName)
    const { name, email } = req.body
   console.log(name,email)
    res.status(202).json({ message: 'reached some-information route !' })
}
export { getTable, getImage, getContact, postForm , postSomeInformation}

// form, routes(query parameters, path parameter), json()