const router = require(`express`).Router();
const userController = require('../controllers/userController');
const barberController = require('../controllers/barberController');
const appointmentController = require('../controllers/appointmentController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.post(`/register`, userController.register)
router.post(`/login`, userController.login)

router.use(authentication)

router.get('/barbers', barberController.getBarbers)

router.post('/appointments/:barberId', appointmentController.createAppointment)

router.get('/user_appointment', appointmentController.getMyAppointment)
router.get('/appointments', appointmentController.getAllAppointment)

module.exports = router