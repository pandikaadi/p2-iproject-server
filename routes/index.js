const router = require(`express`).Router();
const userController = require('../controllers/userController');
const barberController = require('../controllers/barberController');
const appointmentController = require('../controllers/appointmentController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.post(`/register`, userController.register)
router.post(`/login`, userController.login)
router.get('/appointments', appointmentController.getAllAppointment)

router.use(authentication)

router.get('/forecast', appointmentController.getWeatherForecast)
router.post('/translate', appointmentController.translateCoordinate)
router.get('/barbers', barberController.getBarbers)
router.get('/barbers/:barberId', barberController.getOneBarber)

router.post('/appointments/:barberId', appointmentController.createAppointment)

router.get('/myAppointment', appointmentController.getMyAppointment)
router.delete('/myAppointment/', authorization, appointmentController.deleteAppointment)
router.put('/myAppointment/', authorization, appointmentController.editAppointment)

module.exports = router