const Mongoose = require('mongoose');
const express = require('express');
const ToDo = require("./Shcema/Note.model.js");
const User = require("./Shcema/User.model.js");
const app = express();
const port = 3004;
const cors = require('cors')
app.use(cors());
app.use(express.json());
Mongoose.connect("mongodb+srv://janujahsivarattinam:Janu1216@cluster0.mhrv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("You are connected");
 })
 .catch((error)=>{
    console.log("Connection failed",error)
 });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/create', async (req, res) => {
    try {
      const toDo = new ToDo(req.body);
      await toDo.save();
      res.status(201).send(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
});      

app.get('/view', async (req, res) => {
    try {
      const toDo = await ToDo.find();
        res.status(200).json(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
   });

   app.get('/view/:id', async (req, res) => {
    try {
      const toDo = await ToDo.findById(req.params.id);
      res.status(200).json(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  app.put('/list/update/:id', async (req, res) => {
    try {
      const {id} = req.params
      await ToDo.findByIdAndUpdate(id, req.body);
      const toDo = await ToDo.findById(id);
      res.status(200).json(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
   });

   app.delete('/list/:id', async (req,res) => {
    try {
      await ToDo.findByIdAndDelete(req.params.id);
      if (!ToDo.findByIdAndDelete(req.params.id)) {
        res.status(404).send({message: "not found"})
      }
      res.status(200).json(await ToDo.findById(id));
      console.log("Deleted")
    }
    catch (error){
      res.status(400).send(error)
    }
   });


   app.post('/User/create', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
});      

app.get('/User/view', async (req, res) => {
  try {
    const toDo = await User.find();
      res.status(200).json(toDo);
  } catch (error) {
    res.status(400).send(error);
  }
 });

 app.get('/User/view/:id', async (req, res) => {
  try {
    const toDo = await User.findById(req.params.id);
    res.status(200).json(toDo);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.put('/User/update/:id', async (req, res) => {
  try {
    const {id} = req.params
    await User.findByIdAndUpdate(id, req.body);
    const toDo = await User.findById(id);
    res.status(200).json(toDo);
  } catch (error) {
    res.status(400).send(error);
  }
 });

 app.delete('/User/:id', async (req,res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    if (!User.findByIdAndDelete(req.params.id)) {
      res.status(404).send({message: "not found"})
    }
    res.status(200).json(await User.findById(id));
    console.log("Deleted")
  }
  catch (error){
    res.status(400).send(error)
  }
 })

//  app.get('/user/:name', async (req, res) => {
//   try {
//       const {name} = req.params.name;
//       const notes = await User.find(name  ,req.body);

//       if (notes.length > 0) {
//           res.status(200).json(notes);
//       } else {
//           res.status(404).send('No notes found for the specified user.');
//       }
//   } catch (error) {
//       res.status(500).send('Server error while fetching notes');
//   }
// });


app.get('/user/:userid', async (req, res) => {
  try {
      const { userid } = req.params;
      const user = await User.find({ userid }, req.body );
      const note = await user.map(list => list.created_note.title);

      res.status(200).json(note);
  } catch (error) {
      console.error('Error fetching notes:', error);
      res.status(500).send('Server error');
  }
});

// app.get('/user/:userid', async (req, res) => {
//   const note = ToDo.find({ created_by: User.userid })
//                    .populate('created_by') // This replaces the userId with // app.get('/user/:userid', async (req, res) => {

//         if (!User) {
//           res.status(500).send('Server error');

//         }
//       const json = JSON.stringify(note);
//       res.status(200).json(json)
// });

