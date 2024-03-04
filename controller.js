import { Users } from "./model.js";

export function create(req, res) {
    let postData = req.body;
    let data = new Users({
        name: postData.name,
        age: postData.age,
        password: postData.password,
    });
    data.save()
        .then(() => {
            res.status(201).send("your data have been saved...");
        })
        .catch(() => {
            res.status(400).send("your data is not saved...");
        });
}

export function read(req, res) {
    Users.find()
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(404).send(err);
        });
}

export function readById(req, res) {
    let searchName = req.params.name;
    Users.find({ name: searchName })
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(404).send(err);
        });
}

export function update(req, res) {
    let updatableName = req.params.name;
    let UpdateData = req.body;
    Users.updateOne(
        { name: updatableName },
        {
            $set: {
                name: UpdateData.name,
                age: UpdateData.age,
                password: UpdateData.password,
            },
        }
    )
        .then(() => {
            res.status(201).send("Data updated...");
        })
        .catch(() => {
            res.status(400).send("Data is not update...");
        });
}

export function del(req, res) {
    let deleteName = req.params.name;
    Users.deleteOne({ name: deleteName })
        .then(() => {
            res.status(201).send("Data deleted...");
        })
        .catch(() => {
            res.status(400).send("Data is not deleted...");
        });
}
