import express from 'express';

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/'); //save uploaded files in `public/images` folder
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop(); // get file extension
        const uniqueFilename = Date.now() + '-' + Math.round(Math.random() * 1000) + '.' + ext; //generate unique filename - current timestamp + random number between 0 and 1000.
        cb(null, uniqueFilename);
    }

});
const upload = multer({ storage: storage });

//////////
//ROUTES//
//////////
router.get('/', (req, res) => {
    res.send('Contacts route');
});

// Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
});

// Get a contact by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact by id ' + id);
});

// to-do: add post, put, and delete routers
router.post('/create', (req, res) => {
    const id = req.params.id;
    res.send('Contact created with id ' + id);
});

router.put('/update', (req, res) => {
    const id = req.params.id;
    res.send('Contact updated at id ' + id);
});

router.delete('/delete', (req, res) => {
    const id = req.params.id;
    res.send('Contact deleted at id ' + id);
});
export default router;
