const router = require('express').Router();
const { NotFoundError } = require('../errors/NotFoundError');
// const { createUser, login, logout } = require('../controllers/users');
const { createUser, login } = require('../controllers/users');

const {
  signUp,
  signIn,
} = require('../middlewares/validations');
const auth = require('../middlewares/auth');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signup', signUp, createUser);
router.post('/signin', signIn, login);

router.use(auth);
router.use('/', require('./users'));
router.use('/', require('./movies'));

// router.post('/signout', logout);

router.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
