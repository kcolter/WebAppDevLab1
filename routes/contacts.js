import express from 'express';
import multer from 'multer';

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

//create using multer for file handling
router.post('/create', upload.single('image') ,(req, res) => {
    const filename = req.file ? req.file.filename : 'placeholderFilename';
    console.log('Uploaded file: ' + filename);

    const {first_name, last_name} = req.body;

    console.log('added contact for ' + ${first_name} ${last_name});

    res.send('Created contact with image/');
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
