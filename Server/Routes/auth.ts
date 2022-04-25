/* Lab 4 - WEBD 6201
   Rohail Shah
   100492683
   April 24, 2022 */

   import express from 'express';
const router = express.Router();

// controller instance
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../Controllers/auth';

/*************************************** AUTHENTICATION ROUTES************************************************/
/* GET - Display login page. */
router.get('/login', DisplayLoginPage);

/* Process the login request */
router.post('/login', ProcessLoginPage);

/* GET - Display register page. */
router.get('/register', DisplayRegisterPage);

/* Process the register request */
router.post('/register', ProcessRegisterPage);

/* process logout request */
router.get('/logout', ProcessLogoutPage);

export default router;
