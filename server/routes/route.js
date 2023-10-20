import express from 'express';
import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';

const router = express.Router();


router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

//static files
app.use(express.static(path.join(__dirname, "../client/build",)));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html",))
})


export default router;
